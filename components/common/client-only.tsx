import * as React from 'react'
import { useIsomorphicLayoutEffect } from 'ahooks'

const DefaultOnSSR: React.FC = () => null

const ClientOnly: React.FC<{ children: React.ReactNode }> = (props) => {
  const [mounted, toggle] = React.useState(false)

  useIsomorphicLayoutEffect(() => {
    toggle(true)
  }, [])

  return <>{mounted ? props.children : <DefaultOnSSR />}</>
}

export default ClientOnly
