import React from 'react'
import ProfileHero from './ProfileHero'
import ProfileAbout from './ProfileAbout'
import ProfileInfo from './ProfileInfo'


type Props = {}

export default function ProfilePage({}: Props) {
	return (
		<>
			<div className="flex flex-col p-2 gap-5">
				<ProfileHero />
                <hr className='mt-4' />
                <ProfileAbout />
                <hr className='mt-4' />
                <ProfileInfo />
			</div>
		</>
	)
}
