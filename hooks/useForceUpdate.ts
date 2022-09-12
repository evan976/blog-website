import * as React from 'react'

const useForceUpdate = () => {
  const [, setState] = React.useState(0)

  const forceUpdate = React.useCallback(() => {
    setState((state) => state + 1)
  }, [])

  return forceUpdate
}

export default useForceUpdate
