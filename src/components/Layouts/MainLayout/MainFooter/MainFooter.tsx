'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IconBaseProps } from 'react-icons'
import {
	HiBellAlert,
	HiChatBubbleOvalLeftEllipsis,
	HiHome,
	HiMagnifyingGlass,
	HiOutlineBell,
	HiOutlineChatBubbleOvalLeftEllipsis,
	HiOutlineChevronUp,
	HiOutlineHome,
	HiPlus,
} from 'react-icons/hi2'
import FooterUploadOptions from '../../../Upload/UploadOptions'
import { useDispatch, useSelector } from 'react-redux'
import { setMessagingState } from '@/redux/features/message.slice'
import { AppStore } from '@/interface/index.interface'
import { setViewState } from '@/redux/features/view.slice'

type Props = {
	activePage?: string
}

export default function MainFooter({ activePage }: Props) {
	// const [activePage, setActivePage] = useState<string>('home')
	const router = useRouter()
	const { user } = useSelector((state: AppStore) => state.app.auth)
	const { show_upload_menu } = useSelector((state: AppStore) => state.view)
	const { show_messaging } = useSelector((state: AppStore) => state.app.message)
	const dispatch = useDispatch()

	return (
		<div className="lg:hidden block">
			<div
				style={{ bottom: show_upload_menu ? 70 : -893 }}
				onClick={() => dispatch(setViewState({ show_upload_menu: false }))}
				className={classNames(
					'fixed p-1 bottom-16 z-50 w-screen h-screen flex flex-col justify-end  animate__animated'
				)}
			>
				<div className="bg-dark rounded-xl shadow">
					<FooterUploadOptions />
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
					onClick={() =>
						dispatch(setViewState({ show_upload_menu: !show_upload_menu }))
					}
					active={show_upload_menu}
					ActiveIcon={(p: IconBaseProps) => <HiOutlineChevronUp {...p} />}
					Icon={(p: IconBaseProps) => <HiPlus {...p} />}
				/>
				<EachNav
					title="Messages"
					onClick={() => dispatch(setMessagingState({ show_messaging: !show_messaging }))}
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
					title="Search"
					onClick={() => {
						router.push('/search')
					}}
					active={activePage === 'profile'}
					ActiveIcon={(p: IconBaseProps) => <HiMagnifyingGlass {...p} />}
					Icon={(p: IconBaseProps) => <HiMagnifyingGlass {...p} />}
				/>
			</footer>
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
