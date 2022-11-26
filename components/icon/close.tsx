import classNames from 'classnames'
import * as React from 'react'

export const IconClose = React.memo<JSX.IntrinsicElements['svg']>(({
  className,
  ...rest
}) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={classNames('icon', className)}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z"
      ></path>
    </svg>
  )
})

IconClose.displayName = 'IconClose'
