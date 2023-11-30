import React, { useEffect, useState } from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SSelect, { SSelectData } from '@/packages/ui/SSelect'
import NextButtonContainer from '../NextButtonContainer'
import { useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'

export default function FacilitiesAndAmenities({
	next,
	onChange,
	roomRequestData
}: EachStepProps) {
	const [amenity, setAmenity] = useState<SSelectData[] | any>(roomRequestData?.amenities ?roomRequestData?.amenities : []);
	const [facility, setFacility] = useState<SSelectData[] | any>(
		roomRequestData?.facilities ? roomRequestData?.facilities : []
	)

	const { facilities, amenities } = useSelector(
		(state: AppStore) => state.app.option
	)

	useEffect(() => {
		onChange({
			facilities: facility,
			amenities: amenity,
		})
	}, [amenity, facility])

	let disabled = amenity?.length === 0 || facility?.length === 0;

	return (
		<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
			<div className="mb-[80px] flex gap-4 flex-col md:w-[600px] w-full">
				<SSelect
					id="amenity"
					label="Amenities"
					placeholder="Select Amenities"
					options={amenities.map((amenity) => ({
						label: amenity.name,
						value: amenity.id,
					}))}
					value={amenity}
					onChange={(e) => setAmenity(e)}
					isMulti
				/>
				<SSelect
					id="facility"
					label="Facilities"
					placeholder="Select Facilities"
					options={facilities.map((facility) => ({
						label: facility.name,
						value: facility.id,
					}))}
					value={facility}
					onChange={(e) => setFacility(e)}
					isMulti
				/>
			</div>
			<NextButtonContainer>
				<button
					type="submit"
					onClick={next}
					className={classNames(
						' text-white bg-dark rounded-md font-bold w-full md:w-[400px] py-3',
						{ 'bg-dark': !disabled },
						{ 'bg-muted': disabled }
					)}
					disabled={disabled}
				>
					Continue
				</button>
			</NextButtonContainer>
		</div>
	)
}
