import classNames from 'classnames'
import React from 'react'

type Props = {
  className?: string;
  children: any
}

export default function _Container({ className, children }: Props) {
  return (
		<div className={classNames(`w-screen md:w-5/6 ${className}`)}>
			{children}
		</div>
	)
}