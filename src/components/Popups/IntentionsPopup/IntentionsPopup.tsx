'use client'
import { User, UserInfo } from '@/interface/auth.interface'
import { useUpdateUserInfoMutation } from '@/redux/services/user-info.service'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/react'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { HiCheckCircle } from 'react-icons/hi2'
import IntentionWelcomeMessage from './IntentionWelcomeMessage'
import { useDispatch } from 'react-redux'
import { setAuthState } from '@/redux/features/auth.slice'
import toast from 'react-hot-toast'
import MobileModal from '../MobileModal'

type Props = {
	isOpen: boolean
	user: User
	user_info: UserInfo
}

export default function IntentionsPopup({ isOpen, user, user_info }: Props) {
	const [seeking, setSeeking] = useState<boolean | undefined>(undefined)
	const [step, setStep] = useState(0);
	const [updateUserInfo, { isLoading, data, isError }] = useUpdateUserInfoMutation();
	const dispatch = useDispatch()

	const handleUpdateUserInfo = async () => {
		const dataToUpdate: Partial<UserInfo> = {
			seeking
		}

		await updateUserInfo(dataToUpdate)
	}

	useEffect(() => {
		if (data) {
			dispatch(setAuthState({ user_info: data }))
		}
		if (isError) {
			toast.error("Error, please try again")
		}
	}, [isError, data])

	if (user_info.seeking !== null) {
		return null
	}

	return (
		<MobileModal isOpen onClose={() => { }}>
			{[
				<IntentionWelcomeMessage onClick={() => setStep(step + 1)} />,
				<>
					<center className="flex flex-col gap-3 my-5">
						<h1 className="capitalize font-bold text-2xl truncate">
							Hi, {user?.first_name}
						</h1>
						<h5 className="text-dark_lighter text-sm ">
							To get you started quickly, let us know what <br /> brings you to
							Sheruta.
						</h5>
					</center>
					<br />
					<br />
					<div className="flex justify-center gap-8">
						<EachSelector
							heading="I'm A Host"
							subHeading="Linked me up with seekers"
							active={seeking === false}
							onClick={() => setSeeking(false)}
							img={"url('/assets/img/ai/44.jpeg')"}
						/>
						<EachSelector
							heading="I'm A Seeker"
							subHeading="Link me up with available hosts"
							active={seeking === true}
							onClick={() => setSeeking(true)}
							img={"url('/assets/img/ai/11.jpeg')"}
						/>
					</div>
					<br />
					<br />
					<center className="mt-5 mb-7">
						<Button isLoading={isLoading} isDisabled={seeking === undefined} className="bg-dark disabled:opacity-5 text-white w-full md:w-[50%] py-3 hover:bg-black rounded-md" onClick={handleUpdateUserInfo}>
							Finish
						</Button>
					</center>
				</>
			][step]}
		</MobileModal>
	)
}

const EachSelector = ({
	active,
	heading,
	subHeading,
	onClick,
	img,
}: {
	active: boolean | undefined
	heading: string
	subHeading: string
	img: string
	onClick: () => void
}) => {
	return (
		<div
			className="flex items-center text-center flex-col cursor-pointer"
			onClick={onClick}
		>
			<div
				style={{ backgroundImage: img }}
				className={classNames(
					`h-[140px] w-[140px] relative bg-dark_transparent border-white hover:shadow-md cursor-pointer hover:border-theme- rounded-full border-4 bg-center bg-cover mb-5`,
					{ 'border-theme shadow-md': active },
					{ "": !active }
				)}
			>
				{active && <div className='bg-white rounded-full absolute left-[-5px] top-[10px]'>
					<HiCheckCircle className='text-theme' size={40} />
				</div>}
			</div>
			<h4 className="font-bold">{heading}</h4>
			<small className="text-dark_lighter">{subHeading}</small>
		</div>
	)
}
