import React from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { BsLamp } from 'react-icons/bs'
import { HiOutlineMegaphone } from 'react-icons/hi2'
import Link from 'next/link'

export default function FooterUploadOptions() {
	return (
		<div className='flex flex-col gap-5 p-4'>
			<EachAddOptions title="Room" Icon={(p) => <IoImageOutline {...p} />} />
			<EachAddOptions
				title="Request"
				Icon={(p) => <HiOutlineMegaphone {...p} />}
			/>
			<EachAddOptions title="Furniture" Icon={(p) => <BsLamp {...p} />} />
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
		<Link href={'/activities'} className="flex gap-3 ">
			<div className="text-xl flex flex-col justify-center-">
				<Icon className="text-theme" size={35} />
			</div>
			<div className="flex flex-col">
				<h6 className="text-gray-400 font-semibold">{title}</h6>
				<p className="text-dark_lighter text-sm font-light">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.{' '}
				</p>
			</div>
		</Link>
	)
}
