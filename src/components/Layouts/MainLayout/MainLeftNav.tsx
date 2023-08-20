'use client'
import Link from 'next/link'
import React from 'react'
import {
	HiOutlineArrowRightOnRectangle,
	HiOutlineBanknotes,
	HiOutlineBookmark,
	HiOutlinePlayCircle,
	HiOutlineRocketLaunch,
	HiOutlineVideoCamera,
	HiOutlineWallet,
	HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'
import classnames from 'classnames'
import { IconBaseProps } from 'react-icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import SAvatar from '@/packages/ui/SAvatar'
import { logout } from '@/redux/features/auth.slice'

type Props = { activePage?: string }

export default function MainLeftNav({ activePage }: Props) {
	const { user } = useSelector((state: AppStore) => state.app.auth);
	const dispatch = useDispatch();
	return (
		<div className="px-3">
			{user && (
				<Link href={`/user/${user?.username}`} className="flex gap-2">
					<SAvatar userData={user} />
					<div className="flex flex-col gap-0">
						<p className="font-medium">{user?.first_name}</p>
						<small className="text-dark_lighter">@{user?.username}</small>
					</div>
				</Link>
			)}
			<nav className="my-8">
				<ul>
					<EachNav
						link="/start"
						Icon={(p: IconBaseProps) => <HiOutlineRocketLaunch {...p} />}
						active={activePage === 'start'}
						name="Get Started"
					/>
					<EachNav
						link="/inspections"
						Icon={(p: IconBaseProps) => <HiOutlineVideoCamera {...p} />}
						active={activePage === 'inspections'}
						name="Inspections"
					/>
					<EachNav
						link="/inspections"
						Icon={(p: IconBaseProps) => <HiOutlineBookmark {...p} />}
						active={activePage === 'bookmarks'}
						name="Bookmarks"
					/>
					<EachNav
						Icon={(p: IconBaseProps) => <HiOutlineBanknotes {...p} />}
						active={false}
						name="Buy Tokens"
					/>
					<EachNav
						Icon={(p: IconBaseProps) => <HiOutlineWallet {...p} />}
						active={false}
						name="Wallet"
					/>
					<EachNav
						Icon={(p: IconBaseProps) => <HiOutlinePlayCircle {...p} />}
						active={false}
						name="How It Works"
					/>
					<EachNav
						Icon={(p: IconBaseProps) => <HiOutlineWrenchScrewdriver {...p} />}
						active={false}
						name="Settings"
					/>
					<hr className="mb-3" />
					<a href="/" onClick={() => dispatch(logout())}>
						<EachNav
							Icon={(p: IconBaseProps) => (
								<HiOutlineArrowRightOnRectangle {...p} />
							)}
							active={false}
							name="Logout"
						/>
					</a>
				</ul>
			</nav>
		</div>
	)
}

const EachNav = ({
	name,
	active,
	Icon,
	link,
}: {
	name: string
	active: boolean
	Icon: any
	link?: string
}) => {
	return (
		<li className='cursor-pointer'>
			<span
				className={classnames(
					{
						'font-medium border border-1 bg-theme_transparent border-theme_light':
							active,
					},
					{ 'text-dark_light': !active },
					'flex gap-2 items-center hover:bg-theme_transparent hover:font-medium  p-2 rounded-lg mb-3'
				)}
			>
				<Icon size={25} /> <p>{name}</p>
			</span>
		</li>
	)
}
