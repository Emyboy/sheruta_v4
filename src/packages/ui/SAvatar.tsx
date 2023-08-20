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
						'https://res.cloudinary.com/dg2lh1ndf/image/upload/v1692522281/website_assets/avatar.png'
					}
					alt="avatar"
					className="absolute rounded-full"
					fill
					// placeholder='blur'
				/>
				<span className="h-4 w-4 rounded-full absolute shadow-lg bg-danger right-0 bottom-0"></span>
			</div>
		</div>
	)
}
