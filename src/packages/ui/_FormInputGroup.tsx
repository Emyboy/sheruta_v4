import React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	leftAddon?: any
	rightAddon?: any
}

export default function _FormInputGroup(props: Props) {
	const { label, leftAddon, rightAddon, ...rest } = props
	return (
		<div>
			{label && (
				<label htmlFor={rest.id} className="text-sm text-dark_lighter">
					{label}
				</label>
			)}
			<div className="rounded-md border border-dark_lighter px-2 py- flex gap-3 items-center text-dark_lighter">
				{leftAddon && <div className="text-gray-400">{leftAddon}</div>}
				<input
					{...rest}
					className="outline-none bg-none text-sm w-full h-11 border-0"
				/>
				{rightAddon && <div className="text-gray-400">{rightAddon}</div>}
			</div>
		</div>
	)
}
