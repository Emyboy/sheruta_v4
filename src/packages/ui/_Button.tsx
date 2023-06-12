import classNames from 'classnames'
import React, { ReactNode } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	isLoading?: boolean
}

export default function _Button({ children, ...props }: Props) {
    const { isLoading} = props
	return (
		<button
			disabled={isLoading}
			className={`text-white rounded-md px-2 py-3 w-full hover:bg-theme_light flex items-center justify-center gap-3 ${
				isLoading ? ' bg-green-400' : 'bg-theme'
			}`}
			{...props}
		>
			{children}{' '}
			{isLoading && <span className="loading loading-dots loading-xs"></span>}
		</button>
	)
}
