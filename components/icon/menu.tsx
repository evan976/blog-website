import classNames from 'classnames'
import * as React from 'react'

export const IconMenu = React.memo<JSX.IntrinsicElements['svg']>(({
  className,
  ...rest
}) => {
  return (
    <svg
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
      className={classNames('icon', className)}
      {...rest}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
})

IconMenu.displayName = 'IconMenu'
