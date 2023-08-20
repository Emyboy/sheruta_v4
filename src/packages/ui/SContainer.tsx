import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string;
  children: any
}

export default function _Container({ className, children }: Props) {
  return (
		<div className={classNames(`w-screen  lg:w-5/6 mx-auto ${className}`)}>
			{children}
		</div>
	)
}