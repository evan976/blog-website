import * as React from 'react'
import classNames from 'classnames'

export const IconSearch = React.memo<JSX.IntrinsicElements['svg']
>(function IconSearch({className, ...rest}) {
  return (
    <svg
      width="1.05em"
      height="1.05em"
      viewBox="0 0 512 512"
      className={classNames('icon', className)}
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z">
      </path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M338.29 338.29L448 448">
      </path>
    </svg>
  )
})

IconSearch.displayName = 'IconSearch'