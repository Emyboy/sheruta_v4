import React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

type Props = {
	label?: string
	placeholder?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
}

export default function _FormInputGroup({
	onChange,
	label,
	placeholder,
	value,
}: Props) {
	return (
		<div>
			{label && <label className="text-sm text-dark_lighter">{label}</label>}
			<div className="rounded-md border border-dark_lighter px-2 py- flex gap-3 items-center text-dark_lighter">
				<div>
					<HiOutlineUser size={20} />
				</div>
				<input
					className="outline-none bg-none text-sm w-full h-11"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}
