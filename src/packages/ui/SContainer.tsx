import classNames from 'classnames'
import React from 'react'

type Props = {
	className?: string
	children: any
}

export default function SContainer({ className, children }: Props) {
	return (
		<div className={classNames(`w-screen  lg:w-5/6 mx-auto ${className}`)}>
			{children}
		</div>
	)
}

export function SContentContainer({ className, children }: Props) {
	return (
		<div className="flex justify-center py-[100px]">
			<div className="w-screen md:max-w-[696px] lg:max-w-[697px]">
				{children}
			</div>
		</div>
	)
}
