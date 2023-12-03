'use client'
import React from 'react'
import {
	HiChatBubbleOvalLeftEllipsis,
	HiOutlineMegaphone,
} from 'react-icons/hi2'
import Link from 'next/link'
import { BiSolidBed } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setViewState } from '@/redux/features/view.slice'


export default function UploadOptions() {

	return (
		<div className="flex flex-col gap-5 p-4">
			<EachAddOptions
				title="Post A Space"
				Icon={(p) => <BiSolidBed {...p} />}
				link="/request/new/host"
				subHeading="List vacant space, or property for seekers to see."
			/>
			<EachAddOptions
				title="Request A Space"
				Icon={(p) => <HiChatBubbleOvalLeftEllipsis {...p} />}
				link="/request/new/seeker"
				subHeading="Make a space vacancy request for hosts to see."
			/>
		</div>
	)
}

const EachAddOptions = ({
	Icon,
	title,
	link,
	subHeading
}: {
	Icon: (p: any) => React.ReactElement
	title: string
	link: string
	subHeading: string
}) => {
	const dispatch = useDispatch()

	return (
		<Link
			href={link || ''}
			className="flex gap-3 "
			onClick={() => dispatch(setViewState({ show_upload_menu: false }))}
		>
			<div className="text-xl flex flex-col justify-center-">
				<Icon className="text-theme" size={35} />
			</div>
			<div className="flex flex-col">
				<h6 className="text-gray-400 font-semibold">{title}</h6>
				<p className="text-dark_lighter text-sm font-light">
					{subHeading}{' '}
				</p>
			</div>
		</Link>
	)
}
