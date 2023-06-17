'use client'
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import {
	HiBars3CenterLeft,
	HiMagnifyingGlass,
	HiOutlineBell,
	HiOutlineHome,
	HiPlus,
	HiXMark,
} from 'react-icons/hi2'
import { IconBaseProps } from 'react-icons'
import _Container from '@/packages/ui/_Container'
import { useDispatch, useSelector } from 'react-redux'
import { setViewState } from '@/redux/features/view.slice'
import { AppStore } from '@/interface/index.interface'
import MobileLeftPanel from './MobileLeftPanel'

type Props = {
	activePage: any
	className?: string
}

export default function MainNavbar({ activePage, className }: Props) {
	const dispatch = useDispatch()
	const { show_left_panel } = useSelector((state: AppStore) => state.view)

	return (
		<>
			<MobileLeftPanel />

			<header className="h-16 bg-dark fixed top-0 right-0 left-0 z-50">
				<div className="flex w-screen mx-auto md:w-5/6 xl:w-2/3 h-full justify-between px-3 md:px-0">
					<div className="md:w-60 sticky top-16 h-full md:items-center justify-between flex gap-4 w-full">
						<div
							className="md:hidden visible rounded-lg text-gray-400 text-3xl flex-col flex justify-center"
							onClick={() =>
								dispatch(setViewState({ show_left_panel: !show_left_panel }))
							}
						>
							{show_left_panel ? <HiXMark /> : <HiBars3CenterLeft />}
						</div>
						<Link href={`/`} className="flex items-center gap-2">
							<img alt="brand" src={`/icon_green.png`} className="w-6 md:w-7" />
							<img alt="brand" src={`/logo_text_white.png`} className="w-24" />
						</Link>
					</div>
					<div className="hidden flex-1 lg:flex relative shadow h-full justify-center gap-5 items-center">
						<EachNav
							Icon={(p: IconBaseProps) => <HiOutlineHome {...p} />}
							active={activePage === 'home'}
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiPlus {...p} />}
							active={activePage === 'update'}
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiOutlineBell {...p} />}
							active={activePage === 'activities'}
							link="/activities"
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiMagnifyingGlass {...p} />}
							active={activePage === 'search'}
						/>
					</div>
					<div className="w-60 sticky top-16 h-full items-center flex justify-end">
						<Link
							href={`/login`}
							// onClick={() => dispatch(setViewState({ show_login: true }))}
							className="md:bg-theme text-theme md:text-white md:px-6 md:py-2 rounded-lg md:hover:bg-theme_light text-lg px-0 py-1"
						>
							Login
						</Link>
					</div>
				</div>
			</header>
		</>
	)

	return (
		<>
			<header
				className={classNames(
					'bg-dark h-16 left-0 right-0 z-50 flex fixed top-0 justify-center ',
					{ '': className },
					{ fixed: !className }
				)}
			>
				<div className="justify-between xl:w-3/5 md:w-5/6- sm:w-full w-full items-center flex px-5 md:px-8">
					<div
						className="md:hidden visible rounded-lg text-gray-400 text-3xl flex-col flex justify-center"
						onClick={() =>
							dispatch(setViewState({ show_left_panel: !show_left_panel }))
						}
					>
						{show_left_panel ? <HiXMark /> : <HiBars3CenterLeft />}
					</div>
					<Link href={`/`} className="flex items-center gap-2">
						<img alt="brand" src={`/icon_green.png`} className="w-6 md:w-7" />
						<img alt="brand" src={`/logo_text_white.png`} className="w-24" />
					</Link>
					<nav className="hidden lg:visible lg:flex items-center gap-2">
						<EachNav
							Icon={(p: IconBaseProps) => <HiOutlineHome {...p} />}
							active={activePage === 'home'}
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiPlus {...p} />}
							active={activePage === 'update'}
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiOutlineBell {...p} />}
							active={activePage === 'activities'}
							link="/activities"
						/>
						<EachNav
							Icon={(p: IconBaseProps) => <HiMagnifyingGlass {...p} />}
							active={activePage === 'search'}
						/>
					</nav>

					<div className="md:flex items-center gap-2 hidden sm:visible ">
						<Link
							href="/register"
							className=" md:flex outline-1 outline px-5 py-2 rounded-lg text-theme_light text-md hover:bg-theme hover:text-white hover:outline-none"
						>
							Post Request
						</Link>
						<Link
							href={`/login`}
							// onClick={() => dispatch(setViewState({ show_login: true }))}
							className="md:bg-theme text-theme md:text-white md:px-6 md:py-2 rounded-lg hover:bg-theme_light text-lg px-0 py-1"
						>
							Login
						</Link>
					</div>
					<Link href={`/search`} className="md:hidden visible">
						<HiMagnifyingGlass className="md:hidden visible rounded-lg text-gray-400 text-3xl flex-col flex justify-center" />
					</Link>
				</div>
			</header>
			{/* {!className && <div className="h-16 top-0 " />} */}
		</>
	)
}

const EachNav = ({
	active,
	Icon,
	link,
}: {
	active: boolean
	Icon: any
	link?: string
}) => {
	return (
		<Link
			className={classNames(
				{ 'text-accent bg-theme_transparent': active },
				{ 'text-white border border-1 border-theme_transparent': !active },
				'hover:bg-theme_transparent hover:text-accent_light h-12 w-12 rounded-lg flex justify-center items-center '
			)}
			href={link || `/`}
		>
			<Icon size={25} />
		</Link>
	)
}
