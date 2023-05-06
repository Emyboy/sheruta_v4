import React from 'react'
import ProfileHero from './ProfileHero'
import ProfileAbout from './ProfileAbout'
import ProfileInfo from './ProfileInfo'
import ProfileSocials from './ProfileSocials'
import EachRequest from '../Feed/EachRequest'


type Props = {}

export default function ProfilePage({}: Props) {
	return (
		<>
			<div className="flex flex-col px-4 md:px-3 gap-5">
				<ProfileHero />
				<hr className="mt-4" />
				<ProfileAbout />
				<hr className="mt-4" />
				<ProfileInfo />
				<hr className="mt-4" />
				<ProfileSocials />
				<hr className="mt-4" />
				<section>
					<div className="flex flex-col gap-2">
						<h6 className="text-lg">Requests</h6>
						<div className="flex flex-wrap gap-2">
							{new Array(2).fill(null).map((val) => {
								return <EachRequest />
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
