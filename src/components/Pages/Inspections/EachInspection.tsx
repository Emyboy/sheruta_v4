import Link from 'next/link'
import React from 'react'
import { HiCalendarDays, HiMapPin, HiOutlineXCircle } from 'react-icons/hi2'

type Props = {}

export default function EachInspection({}: Props) {
	return (
		<>
			<div className="p-4 flex flex-col gap-5">
				<Link href={`/user/user-1234k`}>
					<h5 className="font-medium text-sm">
						Virtual inspection With{' '}
						<span className="text-theme">First Name</span>
					</h5>
				</Link>
				<div className="flex flex-wrap gap-2 justify-between">
					<span className="text-dark_lighter text-sm flex gap-2 items-center">
						<HiCalendarDays className="text-lg" /> 12 March by 03:30 PM
					</span>
					<span className="text-dark_lighter text-sm flex gap-2 items-center">
						<HiMapPin className="text-lg" /> lekki conservation centre, Lagos.
					</span>
				</div>
				<div className="flex justify-between">
					<div className="flex gap-2">
						<button className="bg-theme text-white text-sm py-1 px-2 rounded-md">
							Send Message
						</button>
						<button className="bg-dark text-white text-sm py-1 px-2 rounded-md">
							Call
						</button>
					</div>
					<button className="text-xs text-dark_lighter flex gap-2 items-center">
						<HiOutlineXCircle className="text-red-500 text-lg" /> Cancel
					</button>
				</div>
			</div>
			<hr />
		</>
	)
}
