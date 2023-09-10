import React from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'
import SSelect from '@/packages/ui/SSelect'
import NextButtonContainer from '../NextButtonContainer'

type Props = {}

export default function FacilitiesAndAmenities({ next }: EachStepProps) {
	return (
		<div className="flex flex-col gap-4 md:w-[600px] w-[90vw]">
			<div className="mb-[80px] flex gap-4 flex-col md:w-[600px] w-full">
				<SSelect label="Amenities" placeholder="Select Amenities" />
				<SSelect label="Facilities" placeholder="Select Facilities" />
			</div>
			<NextButtonContainer>
				<button
					type="submit"
					onClick={next}
					className={classNames(
						' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
					)}
				>
					Continue
				</button>
			</NextButtonContainer>
		</div>
	)
}
