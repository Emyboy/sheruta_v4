import React from 'react'
import UserProfilePage from './user-profile-page'
import { APICall } from '@/services/index.service'
import { backend_url } from '@/constants/app.constrant'

export default async function UserProfile({ params: { username } }: any) {
	let getUserProfile = async () => {
		// let result = await APICall({
		// 	path: `/user-info/user-profile/${username}`,
		// 	options: { method: 'GET' },
		// })
		let res = await fetch(backend_url + `/user-info/user-profile/${username}`, {
			method: 'GET',
			next: {
				revalidate: 5
			}
		})
		let result = res.json();

		return result;
	}

	let result = await getUserProfile()

	return <UserProfilePage profile={result} />
}
