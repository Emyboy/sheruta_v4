import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string;
  children: any
}

export default function _Container({ className, children }: Props) {
  return (
		<div className={classNames('lg:w-4/5  xl:w-2/3  w-screen', className)}>
			{children}
		</div>
	)
}