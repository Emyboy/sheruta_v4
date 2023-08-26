import React from 'react'

type Props = {
	id: string
	placeholder: string
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
	type: 'number' | 'text' | 'email' | null
	required?: boolean
    label?: string
}

export default function SInput({
	id,
	onChange,
	placeholder,
	type,
	required,
    label
}: Props) {
	return (
		<div className="flex flex-col gap-2 w-100 flex-1">
			{label && (
				<label htmlFor={id} className="text-dark_light text-sm">
					{label}{' '}
					{required && <span className="text-danger font-bold">*</span>}
				</label>
			)}
			<input
				id={id}
				name={id}
				className="border-2 border-gray-200 action:border-green-400 rounded-lg p-3 outline-none "
				placeholder={placeholder}
				onChange={onChange}
				type={type || 'text'}
				required={required}
			/>
		</div>
	)
}
