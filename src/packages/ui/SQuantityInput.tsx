'use client'
import classNames from 'classnames'
import React, { useEffect } from 'react'

type Props = {
	id: string
	onChange: (value: number) => void
	required?: boolean
	disabled?: boolean
	label?: string
	defaultValue: number
}

export default function SQuantityInput({
	id,
	onChange,
	label,
	required,
	defaultValue,
	disabled,
}: Props) {
	const handleDecrement = () => {
		if (defaultValue > 1) {
			onChange(defaultValue - 1)
		}
	}

	const handleIncrement = () => {
		onChange(defaultValue + 1)
	}

	return (
		<div
			className={classNames('flex flex-col gap-2 w-100 flex-1', {
				'opacity-80': disabled,
			})}
			style={{ opacity: !disabled ? 1 : 0.3 }}
		>
			{label && (
				<label htmlFor={id} className="text-dark_light text-sm">
					{label} {required && <span className="text-danger font-bold">*</span>}
				</label>
			)}
			<div className="border border-gray-300 h-12 flex bg-white justify-between  items-center rounded-lg">
				<button
					disabled={disabled}
					type="button"
					className="bg-gray-400 text-lg font-bold w-14 px-5 h-full text-gray-400"
					onClick={handleDecrement}
				>
					-
				</button>
				<input
					className="border-0 outline-none h-full w-full text-center"
					disabled
					value={defaultValue}
					required={required}
				/>
				<button
					disabled={disabled}
					type="button"
					className="bg-gray-400 text-lg font-bold w-14 px-5 h-full text-gray-400"
					onClick={handleIncrement}
				>
					+
				</button>
			</div>
		</div>
	)
}
