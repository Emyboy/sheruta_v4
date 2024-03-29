import React, { useEffect, useState } from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SInput from '@/packages/ui/SInput'
import { HiXMark } from 'react-icons/hi2'
import SSelect, { SSelectData } from '@/packages/ui/SSelect'
import NextButtonContainer from '../NextButtonContainer'
import { toast } from 'react-hot-toast'
import { renderPricingFull } from '@/packages/utils/pricing.utils'
import UploadRoomRequestPopup from './UploadRoomRequestPopup'

export type CreateFrequencyDTO = {
	id?: number | string
	name: string
	price: number
	frequency: SSelectData | null
}

export default function PostRoomPriceBreakdown({
	next,
	onChange,
	roomRequestData,
}: EachStepProps) {
	const [startUpload, setStartUpload] = useState(false)
	const [frequencies, setFrequencies] = useState<CreateFrequencyDTO[]>(
		roomRequestData?.service_charge_breakdown
			? roomRequestData?.service_charge_breakdown
			: []
	)

	const defaultState = {
		frequency: null,
		name: '',
		price: 0,
	}
	const [frequency, setFrequency] = useState<CreateFrequencyDTO>(defaultState)

	const removeItem = (id?: number | string) => {
		console.log('THE ID --', id)
		if (id) {
			let data = frequencies.filter((x) => x.id !== id)
			setFrequencies(data)
		}
	}

	const addFrequency = () => {
		const { name, price } = frequency
		console.log(frequency)

		if (name && price && frequency.frequency) {
			let data = frequencies
			data.push({ ...frequency, id: Date.now() })
			setFrequency(defaultState)
			toast.success('New item added')
		} else {
			toast('Please fill out the form', { icon: '⚠️' })
		}
	}

	let disabled = frequencies.length === 0

	useEffect(() => {
		onChange({ service_charge_breakdown: frequencies })
	}, [frequencies])

	return (
		<>
			{startUpload && (
				<UploadRoomRequestPopup
					roomRequestData={roomRequestData}
					onError={() => {}}
					onUploadComplete={() => {}}
				/>
			)}
			<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
				<div className="flex flex-col gap-2">
					{frequencies.length > 0 ? (
						frequencies.map((data, index) => {
							return (
								<EachFrequency
									key={data.name}
									data={data}
									onRemove={() => removeItem(data?.id)}
								/>
							)
						})
					) : (
						<center>
							<p>No item added</p>
							<small className="font-light">
								Fill the form and press Add+ to add <br /> an item.
							</small>
						</center>
					)}
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
						onChange={(data) => setFrequency({ ...frequency, frequency: data })}
						options={[
							{ label: 'Monthly', value: 'monthly' },
							{ label: 'Annually', value: 'annually' },
							{ label: 'Bi Annually', value: 'bi-annually' },
						]}
						value={frequency?.frequency}
						required
					/>
					<br />
					<button type="button" className="text-lg" onClick={addFrequency}>
						Add +
					</button>
					<br />
					<br />
				</div>
				{!startUpload && (
					<NextButtonContainer>
						<button
							onClick={() => setStartUpload(true)}
							className={classNames(
								' text-white rounded-md font-bold w-full md:w-[400px] py-3',
								{ 'bg-dark': !disabled },
								{ 'bg-muted': disabled }
							)}
						>
							Upload Space
						</button>
					</NextButtonContainer>
				)}
				<br />
				<br />
			</div>
		</>
	)
}

const EachFrequency = ({
	data,
	onRemove,
}: {
	data: CreateFrequencyDTO
	onRemove: () => void
}) => {
	return (
		<div className="border min-h-[50px] px-3 py-1 flex gap-1 bg-white rounded-lg justify-between items-center hover:shadow-md cursor-pointer animate__animated animate__fadeIn">
			<div className="flex flex-col gap-1 flex-1 max-w-[80%]">
				<h4 className="text-sm text-gray-500 truncate">{data.name}</h4>
				<h6 className="text-md font-bold text-gray-600">
					{renderPricingFull(data.price)}{' '}
					<small className="font-light">/{data.frequency?.value}</small>
				</h6>
			</div>
			<div
				className="cursor-pointer text-gray-500 hover:text-danger"
				onClick={onRemove}
			>
				<HiXMark size={25} />
			</div>
		</div>
	)
}
