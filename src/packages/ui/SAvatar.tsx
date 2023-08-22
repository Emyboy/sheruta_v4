import { defaultAvatarURL } from '@/constants/app.constrant'
import { User } from '@/interface/auth.interface'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type Props = {
	userData: User
	size?: number
}


export default function SAvatar({ userData, size }: Props) {
	return (
		<div>
			<div className={classNames(`w-11 h-11 rounded-full relative border`)}>
				<Image
					src={userData?.avatar_url || defaultAvatarURL}
					alt="avatar"
					className="absolute rounded-full z-0"
					fill
					// placeholder='blur'
				/>
				<span
					className="bg-danger p-2 absolute rounded-full bottom-0 right-0"
					// style={{ background: 'red', padding: '10px', position: 'absolute'}}
				></span>
			</div>
		</div>
	)
}
