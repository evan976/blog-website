import * as React from 'react'

function useMount(fn: () => void) {
  React.useEffect(() => {
    fn?.()
  }, [fn])
}

export default useMount
