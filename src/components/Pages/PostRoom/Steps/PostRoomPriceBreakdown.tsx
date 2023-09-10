import React, { useState } from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SInput from '@/packages/ui/SInput'
import { currencySymbol } from '@/constants/app.constrant'
import { HiXMark } from 'react-icons/hi2'
import SSelect from '@/packages/ui/SSelect'
import { EachPayFrequency } from '@/types/request.types'
import NextButtonContainer from '../NextButtonContainer'

export default function PostRoomPriceBreakdown({ next }: EachStepProps) {
	const [frequencies, setFrequencies] = useState<EachPayFrequency[]>([])

	const defaultState = {
		frequency: '',
		name: '',
		price: 0,
	}
	const [frequency, setFrequency] = useState<EachPayFrequency>(defaultState)

	const removeItem = (id?: number | string) => {
		if (id) {
			let data = frequencies
			data.filter((x) => x.id === id)
			setFrequencies(data)
		}
	}

	return (
		<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
			<div className="flex flex-col gap-2">
				{frequencies.map((data, index) => {
					return (
						<EachFrequency
							key={data.name}
							data={data}
							onRemove={() => removeItem(data?.id)}
						/>
					)
				})}
			</div>
			<hr />
			<div className="flex flex-col gap-3 ">
				<SInput
					label="Payment Name"
					id="name"
					required
					type="text"
					onChange={(val: any) =>
						setFrequency({ ...frequency, name: val?.target?.value })
					}
					placeholder="Ex. Electric Bill, Security Bill"
					value={frequency?.name || ''}
				/>
				<SInput
					label="Price"
					id="price"
					required
					type="currency"
					onChange={(currency: any) =>
						setFrequency({ ...frequency, price: currency })
					}
					placeholder="Payment Price"
					value={frequency?.price || ''}
				/>
				<SSelect
					id="pay_frequency"
					label="Pay Frequency"
					placeholder="Select Frequency"
					onChange={(data) =>
						setFrequency({ ...frequency, frequency: data.value })
					}
					options={[
						{ label: 'Monthly', value: 'monthly' },
						{ label: 'Annually', value: 'annually' },
						{ label: 'Bi Annually', value: 'bi-annually' },
					]}
					value={''}
				/>
				<br />
				<button
					type="button"
					className="text-lg"
					onClick={() => {
						console.log(frequency)
						let data = frequencies
						data.push({ ...frequency, id: Date.now() })
						setFrequency(defaultState)
					}}
				>
					Add +
				</button>
			</div>
			<NextButtonContainer>
				<button
					onClick={next}
					className={classNames(
						' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
					)}
				>
					Upload Listing
				</button>
			</NextButtonContainer>
		</div>
	)
}

const EachFrequency = ({
	data,
	onRemove,
}: {
	data: EachPayFrequency
	onRemove: () => void
}) => {
	return (
		<div className="border min-h-[50px] px-3 py-1 flex gap-1 bg-white rounded-lg justify-between items-center hover:shadow-md cursor-pointer">
			<div className="flex flex-col gap-1">
				<h4 className="text-sm text-gray-500">{data.name}</h4>
				<h6 className="text-md font-bold text-gray-600">
					{currencySymbol} 45,000 <small className='font-light'>/{data.frequency}</small>
				</h6>
			</div>
			<div
				className="cursor-pointer text-gray-500 hover:text-danger"
				onClick={onRemove}
			>
				<HiXMark className="" size={25} />
			</div>
		</div>
	)
}
