import React from 'react'
import Select from 'react-select'

export type SSelectData = {
	value: string | number
	label: string
}

type Props = {
	id: string
	placeholder: string
	onChange: (data: SSelectData) => void
	required?: boolean
	label?: string
	value: SSelectData | null
	options: SSelectData[]
}

export default function SSelect({
	label,
	id,
	required,
	placeholder,
	options,
	onChange,
	value
}: Props) {
	return (
		<div className="flex flex-col gap-2 w-100 flex-1">
			{label && (
				<label htmlFor={id} className="text-dark_light text-sm">
					{label} {required && <span className="text-danger font-bold">*</span>}
				</label>
			)}
			<Select
				value={value}
				// @ts-ignore
				onChange={onChange}
				// @ts-ignore
				options={options}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						height: '50px',
					}),
				}}
			/>
			{/* <select
				className="select w-full max-w-xs border-2 border-gray-200 action:border-green-400 rounded-lg p-3 outline-none placeholder:text-sm text-gray-500"
				onChange={e => onChange({
					label: e.target.name,
					value: e.target.value
				})}
				
			>
				{placeholder && (
					<option disabled selected value={value}>
						{placeholder}
					</option>
				)}
				{options &&
					options.map((option) => {
						return (
							<option
								value={option.value}
								key={`select-${option.value}`}
							>
								{option.label}
							</option>
						)
					})}
			</select> */}
		</div>
	)
}
