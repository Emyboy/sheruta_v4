import { currencySymbol } from '@/constants/app.constrant'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

type Props = {
	id: string
	placeholder: string
	onChange: (
		e: React.FormEvent<HTMLInputElement> | number | string | undefined
	) => void
	type: 'number' | 'text' | 'email' | null | 'currency'
	required?: boolean
	label?: string
	value: string | number
}

export default function SInput({
	id,
	onChange,
	placeholder,
	type,
	required,
	label,
	value,
}: Props) {
	let className =
		'border-2 border-gray-200 action:border-green-400 rounded-lg p-3 outline-none placeholder:text-sm'

	return (
		<div className="flex flex-col gap-2 w-100 flex-1">
			{label && (
				<label htmlFor={id} className="text-dark_light text-sm">
					{label} {required && <span className="text-danger font-bold">*</span>}
				</label>
			)}
			{type !== 'currency' ? (
				<input
					id={id}
					name={id}
					className={className}
					placeholder={placeholder}
					onChange={onChange}
					type={type || 'text'}
					required={required}
					value={value}
				/>
			) : (
				<CurrencyInput
					prefix={`${currencySymbol} `}
					id={id}
					name={id}
					placeholder={placeholder}
					className={className}
					defaultValue={value}
					decimalsLimit={2}
					required={required}
					onValueChange={(value, name) => console.log(value, name)}
				/>
			)}
		</div>
	)
}
