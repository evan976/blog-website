import dateFormat from 'date-fns/format'
import distanceInWords from 'date-fns/formatDistance'
import zh from 'date-fns/locale/zh-CN'
import * as React from 'react'

interface LocaleTimeProps {
  date: string | number | Date
  format?: string
  from?: boolean
  className?: string
  style?: React.CSSProperties
}

let callbacks: (() => void)[] = []

setInterval(() => {
  callbacks.forEach((cb) => cb())
}, 1000 * 60)

const eachMinute = (fn: () => void) => {
  callbacks.push(fn)

  return () => {
    callbacks = callbacks.filter((cb) => cb !== fn)
  }
}

const getTimeago = (date: string | number | Date) => {
  let content = distanceInWords(new Date(date), new Date(), {
    addSuffix: true,
    locale: zh
  })

  content = content
    .replace('about', '')
    .replace('less than a minute ago', 'just now')
    .replace('minute', 'min')

  return content
}

const DateTime: React.FC<LocaleTimeProps> = ({
  date,
  from = true,
  format = 'yyyy年MM月dd日 HH:mm',
  ...rest
}) => {

  const [_, setMinutesMounted] = React.useState<number>(0)
  const callback = React.useRef<() => void>()

  React.useEffect(() => {
    callback.current = eachMinute(() => {
      setMinutesMounted((state) => ++state)
    })

    return () => {
      if (callback.current) {
        callback.current()
      }
    }
  }, [])

  const formated = dateFormat(new Date(date), format!)

  return <time {...rest} dateTime={formated}>{from ? getTimeago(date) : formated}</time>
}

export default DateTime
