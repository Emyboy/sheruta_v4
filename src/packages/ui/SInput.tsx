'use client'
import { currencySymbol } from '@/constants/app.constrant'
import classNames from 'classnames'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

type Props = {
	id: string
	placeholder?: string
	onChange: (
		e: React.FormEvent<HTMLInputElement> | number | string | undefined | boolean
	) => void
	type: 'number' | 'text' | 'email' | null | 'currency' | 'boolean'
	required?: boolean
	label?: string
	value: string | number | boolean | null
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
			{
				type === 'currency' &&
				<CurrencyInput
					prefix={`${currencySymbol} `}
					id={id}
					name={id}
					placeholder={placeholder}
					className={className}
					value={value as string}
					decimalsLimit={2}
					required={required}
					onValueChange={(value, name) => onChange(value)}
				/>
			}

			{
				type !== 'currency' && type !== 'boolean' &&
				<input
					id={id}
					name={id}
					className={className}
					placeholder={placeholder}
					onChange={onChange}
					type={type || 'text'}
					required={required}
					value={value as string}
				/>
			}
			{
				type === 'boolean' && <div className='bg-gray-200 w-full rounded-lg p-1 flex' style={{ minHeight: '50px', maxHeight: '100%' }}>
					<div className={classNames('h-full w-full cursor-pointer rounded-tl-md rounded-bl-md flex justify-center items-center hover:bg-white hover:border hover:shadow-md', {
						"bg-white shadow border": value as boolean
					})}
						onClick={() => onChange(true)}
					>
						<p className='text-sm'>Yes</p>
					</div>
					<div className={classNames('h-full w-full  cursor-pointer rounded-tr-md rounded-br-md flex justify-center items-center hover:bg-white hover:border hover:shadow-md', {
						"bg-white shadow border": value === false as boolean
					})}
						onClick={() => onChange(false)}
					>
						<p className='text-sm'>No</p>
					</div>
				</div>
			}
		</div>
	)
}
