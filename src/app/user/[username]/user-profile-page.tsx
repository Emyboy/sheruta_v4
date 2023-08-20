import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import ProfilePage from '@/components/Pages/Profile/ProfilePage'
import React from 'react'
import _Container from '@/packages/ui/SContainer'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'

type Props = {}

export default function UserProfilePage({}: Props) {
	return (
		<>
			<MainNavbar activePage={'profile'} />
			<div className="flex justify-center py-10">
				<div className="w-screen  md:w-3/4 xl:w-2/5">
					<ProfilePage />
				</div>
			</div>
		</>
	)
	// return <MainLayout centerComponent={<ProfilePage />} activePage="profile" />
}
