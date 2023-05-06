import React from 'react'
import {
	HiCheckBadge,
	HiEllipsisHorizontal,
	HiFlag,
	HiOutlineEnvelope,
	HiOutlinePhone,
} from 'react-icons/hi2'

type Props = {}

export default function ProfileHero({}: Props) {
	return (
		<section className="flex flex-col md:flex-row gap-2 items-center md:items-end">
			<img
				src={'/assets/img/user-2.jpg'}
				alt="avatar"
				className="rounded-md lg:h-40 lg:w-40 w-60 h-60"
			/>
			<div className="flex-1 w-full md:w-auto">
				<div className="flex justify-end gap-5 h-full flex-col">
					<div className="flex flex-col items-center md:items-start">
						<div className="flex  gap-3 items-center ">
							<p className="font-medium text-lg flex-1 truncate">
								Chukwuemeka S.
							</p>
							<HiCheckBadge
								size={25}
								className="text-blue-500 relative right-0"
							/>
						</div>
						<h6 className="text-sm">Financial Manager</h6>
					</div>
					<div className=" flex flex-row gap-3 items-center justify-center md:justify-start">
						<button className="flex gap-2 text-dark_light items-center border py-2 px-3 rounded-lg border-dark_light">
							<HiOutlineEnvelope size={25} />
						</button>
						<button className="flex gap-2 text-white items-center py-2 px-3 rounded-lg bg-dark">
							<HiOutlinePhone size={25} /> Call
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
