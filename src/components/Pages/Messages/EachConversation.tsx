'use client'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function EachConversation({}: Props) {

	return (
		<Link
			href={`/messages/434`}
			className={classNames(
				'flex p-3 border-b items-center gap-4 hover:bg-green-50 hover:shadow-inner max-w-full',
			)}
		>
			<img
				src={
					'https://www.shutterstock.com/image-photo/closeup-portrait-his-he-nice-260nw-1476914591.jpg'
				}
				alt="avatar"
				className="rounded-full w-10 h-10 outline-1 outline shadow-md text-green-400"
			/>
			<div className="flex flex-col items-center flex-1">
				<div className="flex items-start w-full">
					<h6 className="text- text-dark_light font-medium">Full Name</h6>
					{/* <span className='text-xs'>30 minutes ago</span> */}
				</div>
				<div className="flex">
					<small className="text-xs text-dark_lighter h-8 ">
						Lorem, ipsum dolor sit amet consectetur
					</small>
					<span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-1 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300 self-center">
						3
					</span>
				</div>
			</div>
		</Link>
	)
}
