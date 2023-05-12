import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import ProfilePage from '@/components/Pages/Profile/ProfilePage'
import React from 'react'

type Props = {}

export default function UserProfilePage({}: Props) {
	return <MainLayout centerComponent={<ProfilePage />} activePage="profile" />
}
