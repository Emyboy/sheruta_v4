import React from 'react'

type Props = {
	id: string
	placeholder: string
	onChange: (e: React.FormEvent<HTMLInputElement> | number | string) => void
	required?: boolean
	label?: string
	value: string | number
	options: {
		value: any
		label: string
	}[]
}

export default function SSelect({ label, id, required, placeholder }: Props) {
	return (
		<div className="flex flex-col gap-2 w-100 flex-1">
			{label && (
				<label htmlFor={id} className="text-dark_light text-sm">
					{label} {required && <span className="text-danger font-bold">*</span>}
				</label>
			)}
			<select className="select w-full max-w-xs border-2 border-gray-200 action:border-green-400 rounded-lg p-3 outline-none placeholder:text-sm text-gray-500">
				{placeholder && (
					<option disabled selected>
						{placeholder}
					</option>
				)}
				<option>Homer</option>
				<option>Marge</option>
				<option>Bart</option>
				<option>Lisa</option>
				<option>Maggie</option>
			</select>
		</div>
	)
}
