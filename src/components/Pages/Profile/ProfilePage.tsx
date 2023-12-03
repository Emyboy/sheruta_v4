import React from 'react'
import ProfileHero from './ProfileHero'
import ProfileAbout from './ProfileAbout'
import ProfileInfo from './ProfileInfo'
import ProfileSocials from './ProfileSocials'
import EachRequest from '../../EachRequest/EachRequest'
import { ProfileData } from '@/app/user/[username]/user-profile-page'


type Props = {
	profile: ProfileData
}

export default function ProfilePage({profile}: Props) {
	return (
		<>
			<div className="flex flex-col px-2 md:px-3 gap-5">
				<ProfileHero profile={profile} />
				<hr className="mt-4" />
				<ProfileAbout profile={profile} />
				<hr className="mt-4" />
				<ProfileInfo user_info={profile.user_info} />
				<hr className="mt-4" />
				<ProfileSocials profile={profile} />
				<hr className="mt-4" />
				<section>
					<div className="flex flex-col gap-2">
						<h6 className="text-lg">Requests</h6>
						<div className="flex flex-wrap gap-2">
							{profile.requests && profile.requests.map((val) => {
								return <EachRequest request={val} key={`request-${val?.id}`} />
							})}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
