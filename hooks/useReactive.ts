import { effect, reactive } from '@vue/reactivity'
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
      for (const i in state)
        // eslint-disable-next-line no-unused-expressions
        state[i]

      isdep && update()
      if (!isdep)
        isdep = true
    })
  }, [state, update])

  return state
}

export default useReactive
