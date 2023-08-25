import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Spinner } from '@/components/ChakraUi'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	isLoading?: boolean
	variant?: 'dark' | 'default' | 'ghost'
}

export default function _Button(props: Props) {
	const { isLoading, variant, children } = props
	return (
		<button
			disabled={isLoading}
			className={classNames(
				`rounded-md px-2 py-3 w-full flex items-center justify-center gap-3 text-sm flex-row`,
				{ 'bg-theme text-white': !variant },
				{ 'bg-dark text-white': variant === 'dark' }
			)}
			{...props}
		>
			<span className="flex w-full justify-center gap-3 items-center">
				{children}
				{isLoading && <Spinner size='sm' />}{' '}
			</span>
			{/* {isLoading && <span className="loading loading-dots loading-xs" style={{ fontSize: '10px'}}></span>} */}
		</button>
	)
}
