'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import {
	HiBellAlert,
	HiChatBubbleOvalLeftEllipsis,
	HiHome,
	HiOutlineBell,
	HiOutlineChatBubbleOvalLeftEllipsis,
	HiOutlineChevronUp,
	HiOutlineHome,
	HiOutlineMegaphone,
	HiOutlineUser,
	HiPlus,
	HiUser,
} from 'react-icons/hi2'
import { IoImageOutline } from 'react-icons/io5'
import { BsLamp } from 'react-icons/bs'

type Props = {
	activePage?: string
}

export default function MainFooter({ activePage }: Props) {
	// const [activePage, setActivePage] = useState<string>('home')
	const router = useRouter()
	const [showUploadMenu, setShowUploadMenu] = useState(false)

	return (
		<div className="visible lg:hidden">
			<div
				style={{ bottom: showUploadMenu ? 70 : -243 }}
				onClick={() => setShowUploadMenu(false)}
				className={classNames(
					'fixed p-2 bottom-16 z-50 w-screen h-screen flex flex-col justify-end  animate__animated',
					// {
					// 	'animate__slideInUp  animate__faster': showUploadMenu,
					// },
					// {
					// 	'animate__slideOutDown  animate__delay-2s-': !showUploadMenu,
					// }
				)}
			>
				<div className="bg-dark rounded-lg p-5 shadow flex flex-col ">
					<EachAddOptions
						title="Room"
						Icon={(p) => <IoImageOutline {...p} />}
					/>
					<EachAddOptions
						title="Request"
						Icon={(p) => <HiOutlineMegaphone {...p} />}
					/>
					<EachAddOptions
						title="Furniture"
						Icon={(p) => <BsLamp {...p} />}
					/>
				</div>
			</div>
			<footer className="bg-dark h-16 items-center fixed bottom-0 py-3 px-4 z-50 w-full  text-gray-400 text-3xl flex justify-between">
				{/* <HiOutlineHome />
      <HiPlus />
      <HiOutlineUser /> */}
				<EachNav
					title="Home"
					onClick={() => {
						router.push('/')
					}}
					active={activePage === 'home'}
					ActiveIcon={(p: IconBaseProps) => <HiHome {...p} />}
					Icon={(p: IconBaseProps) => <HiOutlineHome {...p} />}
				/>
				<EachNav
					title="Activities"
					onClick={() => router.push('/activities')}
					active={activePage === 'activities'}
					ActiveIcon={(p: IconBaseProps) => <HiBellAlert {...p} />}
					Icon={(p: IconBaseProps) => <HiOutlineBell {...p} />}
					count={12}
				/>
				<EachNav
					title="Upload"
					onClick={() => setShowUploadMenu(!showUploadMenu)}
					active={showUploadMenu}
					ActiveIcon={(p: IconBaseProps) => <HiOutlineChevronUp {...p} />}
					Icon={(p: IconBaseProps) => <HiPlus {...p} />}
				/>
				<EachNav
					title="Messages"
					onClick={() => router.push('/messages')}
					active={activePage === 'messages'}
					ActiveIcon={(p: IconBaseProps) => (
						<HiChatBubbleOvalLeftEllipsis {...p} />
					)}
					Icon={(p: IconBaseProps) => (
						<HiOutlineChatBubbleOvalLeftEllipsis {...p} />
					)}
					count={8}
				/>
				<EachNav
					title="Profile"
					onClick={() => {
						router.push('/user/johnDoe')
					}}
					active={activePage === 'profile'}
					ActiveIcon={(p: IconBaseProps) => <HiUser {...p} />}
					Icon={(p: IconBaseProps) => <HiOutlineUser {...p} />}
				/>
			</footer>
		</div>
	)
}

const EachAddOptions = ({
	Icon,
	title,
}: {
	Icon: (p: any) => React.ReactElement
	title: string
}) => {
	return (
		<div className="flex gap-3 py-3">
			<div className="text-xl flex flex-col justify-center-">
				<Icon className="text-theme" size={35} />
			</div>
			<div className="flex flex-col">
				<h6 className="text-gray-400 font-semibold">{title}</h6>
				<p className="text-dark_lighter text-sm font-light">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.{' '}
				</p>
			</div>
		</div>
	)
}

const EachNav = ({
	active,
	ActiveIcon,
	Icon,
	onClick,
	title,
	count,
}: {
	active: boolean
	ActiveIcon: (p: any) => React.ReactElement
	Icon: (p: any) => React.ReactElement
	onClick: () => void
	title: string
	count?: number
}) => {
	return (
		<div
			className={classNames(
				{ 'text-theme_light': active },
				'flex flex-col items-center gap-1'
			)}
		>
			{count && count > 0 ? (
				<span className="bg-danger absolute text-white text-xs rounded-full px-1 ml-6">
					{count}
				</span>
			) : null}
			<button onClick={onClick} className={''}>
				{active ? <ActiveIcon size={27} /> : <Icon size={27} />}
			</button>
			<small className="text-xs font-light">{title}</small>
		</div>
	)
}
