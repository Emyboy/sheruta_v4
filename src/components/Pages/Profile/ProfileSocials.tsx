import { ProfileData } from '@/app/user/[username]/user-profile-page'
import React from 'react'
import {
	AiOutlineTwitter,
	AiFillLinkedin,
	AiOutlineGlobal,
} from 'react-icons/ai'

type Props = {
	profile: ProfileData
}

export default function ProfileSocials({ profile }: Props) {
	const { user_info } = profile
	const {} = user_info
	return (
		<section>
			<div className="flex flex-col gap-2">
				<h6 className="text-lg mb-2">Socials Media</h6>
				<div className="flex flex-wrap gap-2">
					<EachSocial type="linkedin" value={''} />
				</div>
			</div>
		</section>
	)
}

const EachSocial = ({
	type,
	value,
}: {
	type: 'linkedin' | 'twitter' | 'instagram' | 'facebook'
	value: string
}) => {
	let icon = () => {
		switch (type) {
			case 'linkedin':
				return <AiFillLinkedin />
			default:
				return <AiOutlineGlobal />;
		}
	}
	return (
		<span className="h-11 w-11 border flex justify-center items-center rounded-md border-dark_light text-dark_light text-xl cursor-pointer hover:bg-dark_light hover:text-white">
			{icon()}
		</span>
	)
}
