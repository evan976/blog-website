import * as React from 'react'

function useForceUpdate() {
  const [, setState] = React.useState<number>(0)

  const forceUpdate = React.useCallback(() => {
    setState(state => state + 1)
  }, [])

  return forceUpdate
}

export default useForceUpdate