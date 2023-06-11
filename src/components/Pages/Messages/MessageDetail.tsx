import Link from 'next/link'
import React from 'react'
import { HiChevronLeft, HiPhone } from 'react-icons/hi2'

type Props = {}

export default function MessageDetail({}: Props) {
	return (
		<div className="flex flex-col min-h-full justify-between">
			<div className="bg-white h-16 border-b flex justify-between items-center px-4">
				<div className="flex gap-3 items-center">
					<Link href={`/messages`} className="text-gray-400 text-3xl">
						<HiChevronLeft />
					</Link>
					<img
						src={
							'https://www.shutterstock.com/image-photo/closeup-portrait-his-he-nice-260nw-1476914591.jpg'
						}
						alt="avatar"
						className="rounded-full w-10 h-10 outline-1 outline shadow-md text-green-400"
					/>
                    <div className="flex flex-col">
                        <span>The full Name</span>
                        <span className='text-dark_lighter text-xs'>last seen 2 days ago</span>
                    </div>
				</div>
                <button className='text-dark_lighter text-xl'>
                    <HiPhone />
                </button>
			</div>
			<div className="flex-1"></div>
			<div className="bg-white h-16 border-t"></div>
		</div>
	)
}
