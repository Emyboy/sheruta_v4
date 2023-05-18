'use client'
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import {
	HiMagnifyingGlass,
	HiOutlineBell,
	HiOutlineHome,
	HiPlus,
} from 'react-icons/hi2'
import { IconBaseProps } from 'react-icons'
import _Container from '@/packages/ui/_Container'
import { useDispatch } from 'react-redux'
import { setViewState } from '@/redux/features/view.slice'

type Props = {
	activePage: any
}

export default function MainNavbar({ activePage }: Props) {
	const dispatch = useDispatch()
	return (
		<>
			<header className="bg-dark h-16 flex items-center justify-center fixed left-0 right-0 z-50 ">
				<_Container className="flex  justify-between px-4 w-full">
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

					<div className="flex items-center gap-2">
						<Link
							href="/"
							className="hidden sm:visible md:flex outline-1 outline px-5 py-2 rounded-lg text-theme_light text-md hover:bg-theme hover:text-white hover:outline-none"
						>
							Post Request
						</Link>
						<button
							onClick={() => dispatch(setViewState({ show_login: true }))}
							className="bg-theme  text-white md:px-6 md:py-2 rounded-lg hover:bg-theme_light text-lg px-5 py-1"
						>
							Login
						</button>
					</div>
				</_Container>
			</header>
			<div className="h-16" />
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
