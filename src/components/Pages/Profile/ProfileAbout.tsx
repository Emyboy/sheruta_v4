import { ProfileData } from '@/app/user/[username]/user-profile-page'
import STextToMarkdown from '@/packages/ui/STextToMarkdown'
import React from 'react'

type Props = {
	profile: ProfileData
}

export default function ProfileAbout({ profile }: Props) {
	const { user_info, user } = profile
	return (
		<section className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<h6 className="text-lg mb-2">About Me</h6>
				<div className="text-sm text-dark_lighter">
					<STextToMarkdown
						text={
							user_info?.bio ||
							`Hi there 👋🏽, my name is ${user?.first_name} and ${
								user_info?.seeking
									? "I'm looking for a flat to share"
									: 'I have a flat to share'
							}. Please feel free to reach out to me.`
						}
					/>
				</div>
			</div>
			<div className="flex flex-wrap gap-3">
				{user_info?.habits &&
					user_info?.habits.map((val) => {
						return (
							<span className="border border-gray-400 rounded-lg px-2 text-sm">{val.name}</span>
						)
					})}
			</div>
		</section>
	)
}
