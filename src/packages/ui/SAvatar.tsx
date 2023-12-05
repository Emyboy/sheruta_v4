import { defaultAvatarURL } from '@/constants/app.constrant'
import { User } from '@/interface/auth.interface'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type Props = {
	userData: User
	size?: string
}


export default function SAvatar({ userData, size }: Props) {
	return (
		<div>
			<Avatar
				src={userData?.avatar_url || defaultAvatarURL}
				size={size || "md"}
			// placeholder='blur'
			>
				<AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.15em' />
			</Avatar>
			{/* <span
					className="bg-danger absolute rounded-full bottom-0 right-0"
					style={{ height: '15px', width: '15px'}}
				></span> */}
		</div>
	)
}
