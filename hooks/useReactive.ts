import { reactive, effect } from '@vue/reactivity'
import * as React from 'react'
import useForceUpdate from './useForceUpdate'

const useReactive = <S extends Record<string, any>>(initState: S): S => {
  const reactiveState = React.useRef<S>(initState)
  const update = useForceUpdate()

  const state = React.useMemo(() => {
    return reactive(reactiveState.current)
  }, [])

  React.useEffect(() => {
    let isdep = false
    effect(() => {
      for (let i in state) {
        state[i]
      }
      isdep && update()
      if (!isdep) isdep = true
    })
  }, [state, update])

  return state
}

export default useReactive
