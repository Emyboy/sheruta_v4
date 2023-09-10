'use client'
import React, { useState } from 'react'
import PostRoomLayout from '../../Upload/UploadRequestLayout'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import PostRoomTypeSelector from './Steps/PostRoomTypeSelector'
import { capitalizeFirstName } from '@/packages/utils/text.utils'
import PostRoomImageSelector from './Steps/PostRoomImageSelector'
import PostRoomVideoSelector from './Steps/PostRoomVideoSelector'
import PortRoomForm from './Steps/PortRoomForm'
import PostRoomPriceBreakdown from './Steps/PostRoomPriceBreakdown'
import FacilitiesAndAmenities from './Steps/FacilitiesAndAmenities'

type Props = {}
export type EachStepProps = {
	next: () => void
}

export default function PostRoom({}: Props) {
	const { type } = useSelector((state: AppStore) => state.upload)
	const { user } = useSelector((state: AppStore) => state.app.auth)
	let length = 6
	let _type = type && type.replaceAll('-', ' ')
	const [step, setStep] = useState(5)
	const dispatch = useDispatch()
	const navHeadings = ['Post Your Room'][step]
	const headings = [
		'Type Of Space.',
		'Upload Images',
		'Upload A Video',
		`${_type} Information`,
		`Amenities and Facilities`,
		`Payment Breakdown`,
	][step]
	const subHeadings = [
		`Hi ${capitalizeFirstName(
			user?.first_name
		)} 👋🏽,  Click on the type of space your property falls under.`,
		` Add at least 4 pictures of the ${_type}. Including the toilet/bath room, sitting room, bedroom.`,
		`Upload video containing visuals of the room and  toilets/bath and sitting room. (optional)`,
		`Tell us more about the ${_type}.`,
		`Select multiple facilities and amenities.`,
		`let prospects know what the rent and other fees covers.`,
	][step]

	const goBack = () => {
		setStep(step - 1)
	}

	return (
		<PostRoomLayout
			currentIndex={step}
			length={length}
			navHeading={navHeadings}
			back={goBack}
			heading={headings}
			subHeading={subHeadings}
		>
			{
				[
					<PostRoomTypeSelector next={() => setStep(step + 1)} />,
					<PostRoomImageSelector next={() => setStep(step + 1)} />,
					<PostRoomVideoSelector next={() => setStep(step + 1)} />,
					<PortRoomForm next={() => setStep(step + 1)} />,
					<FacilitiesAndAmenities next={() => setStep(step + 1)} />,
					<PostRoomPriceBreakdown next={() => setStep(step + 1)} />,
				][step]
			}
		</PostRoomLayout>
	)
}
