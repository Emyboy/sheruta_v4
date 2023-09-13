import React, { useEffect, useState } from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SFormINputGroup from '@/packages/ui/SFormInputGroup'
import SInput from '@/packages/ui/SInput'
import SQuantityInput from '@/packages/ui/SQuantityInput'
import { DebounceInput } from 'react-debounce-input'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import SSelect from '@/packages/ui/SSelect'
import NextButtonContainer from '../NextButtonContainer'

type Props = {}

export default function PortRoomForm({
	next,
	onChange,
	roomRequestData,
}: EachStepProps) {
	const [bedrooms, setBedrooms] = useState(roomRequestData?.bedrooms || 0)
	const [bathrooms, setBathrooms] = useState(roomRequestData?.bathrooms || 0)
	const [toilets, setToilets] = useState(roomRequestData?.toilets || 0)
	const [number_of_flatmate, setFlatmateCount] = useState(
		roomRequestData?.number_of_flatmate || 0
	)
	const [request_text, setRequestText] = useState(
		roomRequestData?.request_text || ''
	)
	const [total_rent, setTotalRent] = useState<any>(
		roomRequestData?.total_rent || ''
	)
	const [room_rent, setRoomRent] = useState<any>(
		roomRequestData?.room_rent || ''
	)
	const [location_text, setLocationText] = useState('')
	const [location_object, setLocationObject] = useState(null)

	const progressPercentage = (request_text.length / 240) * 100
	const colors =
		progressPercentage < 60
			? 'red'
			: progressPercentage >= 60 && progressPercentage <= 100
			? 'orange'
			: '#1eb21e'

	useEffect(() => {
		let data = {
			bedrooms,
			bathrooms,
			toilets,
			number_of_flatmate,
			request_text,
			total_rent,
			room_rent,
			location_object,
			location_text,
		}

		console.log('THE DATA --', data)

		if (onChange) {
			onChange(data)
		}
	}, [
		bedrooms,
		bathrooms,
		toilets,
		number_of_flatmate,
		request_text,
		total_rent,
		room_rent,
		location_object,
		location_text,
	])

	return (
		<>
			<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
				<div className="grid gap-4 grid-cols-2 md:grid-cols-3">
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
				<hr />
				<div className="grid gap-4 md:grid-cols-2 grid-cols-1">
					<SInput
						label="Total Rent"
						id="total_rent"
						required
						type="currency"
						onChange={(val) => setTotalRent(val)}
						placeholder="Total Rent"
						value={total_rent}
					/>
					<SInput
						label="Room Rent"
						id="room_rent"
						required
						type="currency"
						onChange={(currency) => setRoomRent(currency)}
						placeholder="Room Rent"
						value={room_rent}
					/>
				</div>
				<hr />
				<div className="w-full">
					<div className="flex flex-col gap-2 w-100 flex-1">
						<label htmlFor={'location'} className="text-dark_light text-sm">
							Location <span className="text-danger font-bold">*</span>
						</label>
						<GooglePlacesAutocomplete
							apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
							apiOptions={{ region: 'ng' }}
							selectProps={{
								placeholder: 'Select Location',
								styles: {
									control: (baseStyles, state) => ({
										...baseStyles,
										height: '50px',
									}),
								},
								onChange: (e: any) => {
									setLocationText(e?.label)
									setLocationObject(e)
								},
								value: location_object
							}}
						/>
					</div>
				</div>
				<hr />
				<div className="grid gap-4 md:grid-cols-3 grid-cols-1">
					<SSelect onChange={e => {}} label="Service" placeholder="Select Service" />
					<SSelect onChange={e => {}} label="Category" placeholder="Select Category" />
					<SSelect onChange={e => {}} label="Pay Frequency" placeholder="Weekly, Monthly" />
				</div>
				<div className="flex gap-3 w-full md:flex-row flex-col">
					<div className="flex flex-col gap-2 w-100 flex-1">
						<div className="flex justify-between">
							<label
								htmlFor={'request_text'}
								className="text-dark_light text-sm"
							>
								{'About this listing'}{' '}
								<span className="text-danger font-bold">*</span>
							</label>
							<div className="flex">
								<span style={{ color: colors }}>
									{progressPercentage < 60
										? 'Too short 😭'
										: progressPercentage >= 60 && progressPercentage <= 100
										? 'A bit better 🫥'
										: 'Good enough 👍🏽'}
								</span>
							</div>
						</div>
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
			<NextButtonContainer>
				<button
					type="submit"
					onClick={next}
					className={classNames(
						' text-white bg-dark rounded-md font-bold w-full md:w-[400px] py-3'
					)}
				>
					Continue
				</button>
			</NextButtonContainer>
		</>
	)
}
