import React, { useState } from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SFormINputGroup from '@/packages/ui/SFormInputGroup'
import SInput from '@/packages/ui/SInput'
import SQuantityInput from '@/packages/ui/SQuantityInput'
import { DebounceInput } from 'react-debounce-input'
import type { DebounceInputProps } from 'react-debounce-input'

type Props = {}

export default function PortRoomForm({ next }: EachStepProps) {
	const [bedrooms, setBedrooms] = useState(1)
	const [bathrooms, setBathrooms] = useState(1)
	const [toilets, setToilets] = useState(1)
	const [number_of_flatmate, setFlatmateCount] = useState(1)
	const [request_text, setRequestText] = useState('')



	const progressPercentage = (request_text.length / 240) * 100
	const colors =
		progressPercentage < 60
			? 'red'
			: progressPercentage >= 60 && progressPercentage <= 100
			? 'orange'
			: 'green'

	return (
		<>
			<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
				<div className="grid gap-4 grid-cols-2">
					<SQuantityInput
						label="Bedrooms"
						onChange={(value) => setBedrooms(value)}
						defaultValue={bedrooms}
						id="bedrooms"
						required
					/>
					<SQuantityInput
						label="Bathrooms"
						onChange={(value) => setBathrooms(value)}
						defaultValue={bathrooms}
						id="bathrooms"
						required
					/>
				</div>
				<div className="grid gap-4 grid-cols-2">
					<SQuantityInput
						label="Toilets"
						onChange={(value) => setToilets(value)}
						defaultValue={toilets}
						id="toilets"
						required
					/>
					<SQuantityInput
						label="No Of Flatmates"
						onChange={(value) => setFlatmateCount(value)}
						defaultValue={number_of_flatmate}
						id="number_of_flatmate"
						required
					/>
				</div>
				<div className="flex gap-3 w-full md:flex-row flex-col">
					<SInput
						label="Bedrooms"
						id="bedrooms"
						required
						type="number"
						onChange={() => {}}
						placeholder="Bedroom"
					/>
					<SInput
						label="Bathrooms"
						id="bathrooms"
						required
						type="number"
						onChange={() => {}}
						placeholder="Bathroom"
					/>
				</div>
				<div className="flex gap-3 w-full md:flex-row flex-col">
					<div className="flex flex-col gap-2 w-100 flex-1">
						<label htmlFor={'request_text'} className="text-dark_light text-sm">
							{'About this listing'}{' '}
							<span className="text-danger font-bold">*</span>
						</label>
						<div className="flex flex-col">
							<div className="h-1 bg-green-200 overflow-hidden">
								<div
									className={`h-full`}
									style={{
										width: `${
											progressPercentage > 100 ? 100 : progressPercentage
										}%`,
										backgroundColor: `${colors}`,
									}}
								></div>
							</div>
							{/* @ts-ignore */}
							{/* @ts-ignore */}
							<DebounceInput
								// minLength={2}
								debounceTimeout={400}
								element="textarea"
								id={'request_text'}
								name={'request_text'}
								className="border-2 border-gray-200 action:border-green-400 rounded-bl-lg rounded-br-lg p-3 outline-none "
								placeholder={'Tell more use about this listing.'}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setRequestText(e.target.value)
								}
								required={true}
								rows={6}
							/>
						</div>
					</div>
				</div>
			</div>
			<button
				type="submit"
				onClick={next}
				className={classNames(
					' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
				)}
			>
				Continue
			</button>
		</>
	)
}
