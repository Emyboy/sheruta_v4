'use client'
import { User, UserInfo } from '@/interface/auth.interface'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/react'
import classNames from 'classnames'
import React, { useState } from 'react'

type Props = {
	isOpen: boolean
	onClose: () => void
	user: User
    user_info: UserInfo
}

export default function IntentionsPopup({ isOpen, onClose, user, user_info }: Props) {
	const [seeking, setSeeking] = useState<string>('')

    if(user_info.seeking !== null){
        return null
    }

	return (
		<Modal isOpen={isOpen} onClose={() => {}} size={'3xl'} >
			<ModalOverlay />
			<ModalContent  position={'absolute'} bottom={[-20, 40]}>
				<ModalBody>
					<center className="flex flex-col gap-3 my-5">
						<h1 className="capitalize font-bold text-2xl">
							Hi, {user?.first_name}
						</h1>
						<h5 className="text-dark_lighter text-sm">
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
							seeking={seeking === 'host'}
							onClick={() => setSeeking('host')}
							img={"url('/assets/img/ai/44.jpeg')"}
                            />
						<EachSelector
							heading="I'm A Seeker"
							subHeading="Link me up with available hosts"
							seeking={seeking === 'seeker'}
							onClick={() => setSeeking('seeker')}
							img={"url('/assets/img/ai/11.jpeg')"}
						/>
					</div>
					<br />
					<br />
					<center className="mt-5 mb-7">
						<button className="bg-dark text-white w-full md:w-[50%] py-3 rounded-md">
							Get Started
						</button>
					</center>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

const EachSelector = ({
	seeking,
	heading,
	subHeading,
	onClick,
	img,
}: {
	seeking: boolean
	heading: string
	subHeading: string
	img: string
	onClick: () => void
}) => {
	const [hovered, setHovers] = useState(false)
	return (
		<div
			className="flex items-center text-center flex-col cursor-pointer"
			onMouseEnter={() => setHovers(true)}
			onMouseLeave={() => setHovers(false)}
			onClick={onClick}
		>
			<div
				style={{ backgroundImage: img }}
				className={classNames(
					`h-[140px] w-[140px] bg-dark_transparent border-white hover:shadow-md cursor-pointer hover:border-theme rounded-full border-4 bg-center bg-cover mb-5`,
					{ 'border-theme shadow-md': seeking || hovered }
				)}
			/>
			<h4 className="font-bold">{heading}</h4>
			<small className="text-dark_lighter">{subHeading}</small>
		</div>
	)
}
