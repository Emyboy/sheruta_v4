import { AppStore } from '@/interface/index.interface'
import { setUploadState } from '@/redux/features/upload.slice'
import classNames from 'classnames'
import React from 'react'
import { IconBaseProps } from 'react-icons'
import { BiSolidBed } from 'react-icons/bi'
import {
	HiEyeSlash,
	HiMiniCheckCircle,
	HiMiniHomeModern,
	HiUsers,
} from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { EachStepProps } from '../PostRoom'
import NextButtonContainer from '../NextButtonContainer'

export default function PostRoomTypeSelector({ next }: EachStepProps) {
	const { type } = useSelector((state: AppStore) => state.upload)
	const dispatch = useDispatch()
	return (
		<>
			<div className="flex flex-col lg:flex-row gap-4 items-center justify-center h-full">
				<RoomUploadOptions
					onClick={() => dispatch(setUploadState({ type: 'entire-space' }))}
					heading="Entire space"
					active={type === 'entire-space'}
					Icon={(p) => <HiMiniHomeModern {...p} />}
				/>
				<RoomUploadOptions
					onClick={() => dispatch(setUploadState({ type: 'private-room' }))}
					heading="Private room"
					active={type === 'private-room'}
					Icon={(p) => <HiEyeSlash {...p} />}
				/>
				<RoomUploadOptions
					onClick={() => dispatch(setUploadState({ type: 'shared-room' }))}
					heading="Shared room"
					active={type === 'shared-room'}
					Icon={(p) => <HiUsers {...p} />}
				/>
			</div>
			<NextButtonContainer>
				<button
					disabled={!type}
					onClick={next}
					className={classNames(
						' text-white rounded-md font-bold w-[90vw] md:w-[400px] py-3',
						{ 'bg-dark': type !== null },
						{ 'bg-muted': type === null }
					)}
				>
					Continue
				</button>
			</NextButtonContainer>
		</>
	)
}
const RoomUploadOptions = ({
	heading,
	active,
	onClick,
	Icon,
}: {
	heading: string
	active: boolean
	onClick: () => void
	Icon: (e: IconBaseProps) => React.ReactElement
}) => {
	return (
		<div
			onClick={onClick}
			className={classNames(
				'relative border h-[200px] w-[90vw] md:h-[300px] lg:w-[300px] rounded-md hover:bg-white hover:shadow-lg  cursor-pointer  flex flex-col justify-center items-center gap-4',
				{ 'bg-white shadow-lg border-gray-700 text-gray-700': active },
				{ 'bg-none border-muted text-muted': !active }
			)}
		>
			<Icon size={50} />
			<p className="font-muted text-lg font-bold">{heading}</p>
			<HiMiniCheckCircle
				className={classNames(
					'absolute left-1 top-1',
					// { 'text-dark': active },
					{ 'text-gray-100': !active }
				)}
				size={30}
			/>
		</div>
	)
}
