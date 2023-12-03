import { ProfileData } from '@/app/user/[username]/user-profile-page'
import { UserInfo } from '@/interface/auth.interface'
import React from 'react'

type Props = {
	user_info: UserInfo
}

export default function ProfileInfo({ user_info }: Props) {
	return (
		<section className="flex flex-col gap-2">
			<h6 className="text-lg mb-2">Additional Information</h6>
			<div className="grid grid-cols-3 md:grid-cols-5 gap-4">
				<EachInfo heading="Gender" value={user_info?.gender} />
				<EachInfo heading="Share with" value={user_info?.seeking_gender} />
				<EachInfo
					heading="Seeking Ages"
					value={`${user_info?.min_age_range || ''} to ${
						user_info?.max_age_range || ''
					}`}
				/>
				<EachInfo heading="Religion" value={user_info?.religion} />
				<EachInfo heading="Employment" value={user_info?.employment_status} />
				<EachInfo
					heading="Location"
					value={user_info?.location_keyword?.name}
				/>
				<EachInfo heading="State" value={user_info?.state?.name} />
			</div>
		</section>
	)
}

const EachInfo = ({ heading, value }: { heading: string; value: string | null | undefined }) => {
	return (
		<div className="flex flex-col">
			<h6 className="fw-bold">{heading}</h6>
			<h6 className="text-dark_lighter font-light capitalize">{value || 'N/A'}</h6>
		</div>
	)
}
