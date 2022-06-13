import * as React from 'react'

type PromiseAction = (query: Record<string, any>) => Promise<unknown>

function useAsyncLoading<A extends PromiseAction>(
  action: A,
  wait = 300,
  initialLoading = false
): [A, boolean] {
  const timer = React.useRef<NodeJS.Timeout>()
  const [pending, setPending] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(initialLoading)

  const actionWithLoading = React.useCallback(
    (query: Parameters<A>) => {
      setPending(true)
      const promise = action({ ...query })
      promise.then(
        () => setPending(false),
        () => setPending(false)
      )
      return promise
    },
    [action]
  )

  React.useEffect(() => {
    clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      setLoading(pending)
    }, wait)

    return () => {
      clearTimeout(timer.current)
    }
  }, [wait, pending])

  return [actionWithLoading as A, loading]
}

export default useAsyncLoading
