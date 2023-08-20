import { defaultAvatarURL } from '@/constants/app.constrant'
import { User } from '@/interface/auth.interface'
import Image from 'next/image'
import React from 'react'

type Props = {
	userData: User
	size?: number
}


export default function SAvatar({ userData, size }: Props) {
	return (
		<div>
			<div className="w-11 h-11 rounded-full relative border ">
				<Image
					src={
						userData.avatar_url ||
						defaultAvatarURL
					}
					alt="avatar"
					className="absolute rounded-full"
					fill
					// placeholder='blur'
				/>
				<span className="h-3 w-3 rounded-full absolute shadow-lg bg-danger right-0 bottom-0"></span>
			</div>
		</div>
	)
}
