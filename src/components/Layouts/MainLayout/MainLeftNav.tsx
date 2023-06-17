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

type Props = { activePage?: string }

export default function MainLeftNav({ activePage }: Props) {
	return (
		<div className="px-3">
			<Link href={`/user/user13234`} className="flex gap-2">
				<img
					src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					alt="avatar"
					className="w-12 h-12 rounded-full"
				/>
				<div className="flex flex-col gap-0">
					<p className="font-medium">First Name</p>
					<small className="text-dark_lighter">@theUserName</small>
				</div>
			</Link>
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
					<EachNav
						Icon={(p: IconBaseProps) => (
							<HiOutlineArrowRightOnRectangle {...p} />
						)}
						active={false}
						name="Logout"
					/>
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
		<li>
			<Link
				href={link || `/`}
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
			</Link>
		</li>
	)
}
