import { ProfileData } from '@/app/user/[username]/user-profile-page'
import { defaultAvatarURL } from '@/constants/app.constrant'
import { renderPricingFull } from '@/packages/utils/pricing.utils'
import Image from 'next/image'
import React from 'react'
import {
	HiCheckBadge,
	HiOutlineEnvelope,
	HiOutlinePhone,
} from 'react-icons/hi2'

type Props = {
	profile: ProfileData
}

export default function ProfileHero({profile}: Props) {
	const {user, user_info } = profile
	const {first_name, avatar_url } = user;
	const { occupation, place_of_work, pay_frequency, budget } = user_info
	return (
		<section className="flex flex-col md:flex-row gap-2 items-center md:items-end">
			<div className="rounded-md lg:h-[196px] lg:w-[190px] w-60 h-60 relative overflow-hidden">
				<Image
					src={avatar_url || defaultAvatarURL}
					fill
					alt={`${first_name} profile sheruta`}
					className="absolute"
				/>
			</div>
			<div className="flex-1 w-full md:w-auto">
				<div className="flex justify-end gap-5 h-full flex-col">
					<div className="flex flex-col items-center md:items-start">
						<div className="flex  gap-3 items-center ">
							<p className="font-medium text-lg flex-1 truncate">
								{first_name}
							</p>
							<HiCheckBadge
								size={25}
								className="text-blue-500 relative right-0"
							/>
						</div>
						<h6 className="text-sm mb-3">
							{occupation || 'N/A'} at {place_of_work || 'N/A'}
						</h6>
						<h6 className="text-sm">
							Budget: <span className='font-semibold'>{renderPricingFull(`${budget}`)} /
							{pay_frequency?.name || 'N/A'}</span>
						</h6>
					</div>
					<div className=" flex flex-row gap-3 items-center justify-center md:justify-start">
						<button className="flex gap-2 text-dark_light items-center border py-2 px-3 rounded-lg border-dark_light">
							<HiOutlineEnvelope size={25} /> Lets Chat
						</button>
						<button className="flex gap-2 text-white items-center py-2 px-3 rounded-lg bg-dark">
							<HiOutlinePhone size={25} /> Call Me
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
