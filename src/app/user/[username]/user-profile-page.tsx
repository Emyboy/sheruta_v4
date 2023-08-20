import ProfilePage from '@/components/Pages/Profile/ProfilePage'
import React from 'react'
import _Container, { SContentContainer } from '@/packages/ui/SContainer'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import { User, UserInfo } from '@/interface/auth.interface'
import { RoomRequest } from '@/interface/request.interface'

export interface ProfileData {
	user: User
	user_info: UserInfo
	requests: RoomRequest[]
}

type Props = {
	profile: ProfileData
}

export default function UserProfilePage({ profile }: Props) {
	return (
		<>
			<MainNavbar activePage={'profile'} />

			<SContentContainer>
				<ProfilePage profile={profile} />
			</SContentContainer>
		</>
	)
	// return <MainLayout centerComponent={<ProfilePage />} activePage="profile" />
}
