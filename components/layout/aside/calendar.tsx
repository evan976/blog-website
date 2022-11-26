import * as React from 'react'
import Card from 'components/common/card'
import { isAllTrue } from 'utils'
import type { CalendarItem } from 'utils/date'
import { generateCalendar, weekMap } from 'utils/date'

const Calendar = () => {
  const [date, setDate] = React.useState<Date>(new Date())

  const calendarTable = React.useMemo(() => {
    return generateCalendar(date)
  }, [date])

  const today = React.useMemo(() => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }, [date])

  const isToday = (item: CalendarItem) => {
    return isAllTrue([
      item.day === date.getDate(),
      item.isCurrentMonth,
      item.month === new Date().getMonth(),
      item.year === new Date().getFullYear(),
    ])
  }

  const changeMonth = (type: 'prev' | 'next'): void => {
    let month = 0
    let year = 1970
    if (type === 'prev') {
      month = date.getMonth() === 0 ? 11 : date.getMonth() - 1
      year = month === 11 ? date.getFullYear() - 1 : date.getFullYear()
    }
    else {
      month = date.getMonth() === 11 ? 0 : date.getMonth() + 1
      year = month === 0 ? date.getFullYear() + 1 : date.getFullYear()
    }

    date.setMonth(month)
    date.setFullYear(year)
    setDate(new Date(date))
  }

  return (
    <Card className="mt-3 sticky top-20">
      <div className="flex justify-between items-center relative mb-1">
        <button
          className="w-7 h-7 text-font-secondary bg-bg-300 cursor-pointer rounded-sm flex justify-center items-center hover:bg-bg-300"
          onClick={() => changeMonth('prev')}
        >
          <i className="iconfont">&#xe68b;</i>
        </button>
        <h2>{today}</h2>
        <button
          className="w-7 h-7 text-font-secondary bg-bg-300 cursor-pointer rounded-sm flex justify-center items-center hover:bg-bg-300"
          onClick={() => changeMonth('next')}
        >
          <i className="iconfont">&#xe689;</i>
        </button>
      </div>
      <div className="text-sm font-bold grid grid-cols-7 h-7 leading-7">
        {weekMap.map((item, index) => (
          <span
            className={`text-center text-font-200 block ${index === 0 || index === 6 ? 'text-font-300 font-normal' : undefined
              }`}
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
      <div
        className="relative grid grid-cols-7 text-font-200 after:content-[attr(data-month)] after:text-9xl after:font-bold after:text-[#979797]/10 after:absolute after:top-1/2 after:left-1/2 after:translate-y-[-50%] after:translate-x-[-50%]"
        data-month={date.getMonth() + 1}
      >
        {calendarTable.map((item, index) => (
          <div
            key={index}
            className={`text-sm leading-[2.5em] block text-center rounded-full [&:nth-child(7n)]:text-font-300 [&:nth-child(7n-6)]:text-font-300 ${isToday(item) ? '!text-white bg-blue' : undefined
              } ${!item.isCurrentMonth ? '!text-font-400' : undefined}`}
          >
            {item.day}
          </div>
        ))}
      </div>
    </Card>
  )
}

export default Calendar
