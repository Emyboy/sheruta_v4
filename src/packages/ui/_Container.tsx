import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string;
  children: any
}

export default function _Container({ className, children }: Props) {
  return (
    <div className={classNames('lg:w-4/5  xl:w-3/5  w-screen', className)}>
      {children}
    </div>
  )
}