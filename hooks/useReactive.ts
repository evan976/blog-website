import * as React from 'react'
import { reactive, effect } from '@vue/reactivity'

function useReactive<S extends Record<string, any>> (initState: S): S {
  const reactiveState = React.useRef<S>(initState)
  const [, forceUpdate] = React.useState<number>(0)

  const state = React.useMemo(() => {
    return reactive(reactiveState.current)
  }, [])

  React.useEffect(() => {
    let isdep = false
    effect(() => {
      for(let i in state) {
        state[i]
      }
      isdep && forceUpdate(num => num + 1)
      if(!isdep) isdep = true
    })
  }, [state])

  return state
}

export default useReactive
