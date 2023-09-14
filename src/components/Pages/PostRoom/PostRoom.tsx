'use client'
import React, { useEffect, useState } from 'react'
import PostRoomLayout from '../../Upload/UploadRequestLayout'
import { useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import PostRoomTypeSelector from './Steps/PostRoomTypeSelector'
import { capitalizeFirstName } from '@/packages/utils/text.utils'
import PostRoomImageSelector from './Steps/PostRoomImageSelector/PostRoomImageSelector'
import PostRoomVideoSelector from './Steps/PostRoomVideoSelector'
import PortRoomForm from './Steps/PortRoomForm'
import PostRoomPriceBreakdown from './Steps/PostRoomPriceBreakdown'
import FacilitiesAndAmenities from './Steps/FacilitiesAndAmenities'
import { CreateRoomRequestDTO } from '@/interface/request.interface'

type Props = {}
export type EachStepProps = {
	next: () => void
	roomRequestData?: CreateRoomRequestDTO | null
	onChange: (data: any) => void
}

export default function PostRoom({}: Props) {
	const { user } = useSelector((state: AppStore) => state.app.auth)
	let length = 6
	const [roomRequestData, setRoomRequestData] =
		useState<CreateRoomRequestDTO | null>(null)
	let _type = roomRequestData?.type && roomRequestData.type.replaceAll('-', ' ')
	const [step, setStep] = useState(4)

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

	const addData = (data: any) => {
		if (roomRequestData) {
			setRoomRequestData({ ...roomRequestData, ...data })
		}else {
			setRoomRequestData(data)
		}
	}

	useEffect(() => {
		console.log('DATA UPDATE ---', roomRequestData)
	}, [roomRequestData])

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
					<PostRoomTypeSelector
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
					<PostRoomImageSelector
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
					<PostRoomVideoSelector
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
					<PortRoomForm
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
					<FacilitiesAndAmenities
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
					<PostRoomPriceBreakdown
						next={() => setStep(step + 1)}
						roomRequestData={roomRequestData}
						onChange={(e) => addData(e)}
					/>,
				][step]
			}
		</PostRoomLayout>
	)
}
