import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import ProfilePage from '@/components/Pages/Profile/ProfilePage'
import React from 'react'

export default function UserProfile() {
  return (
      <MainLayout centerComponent={<ProfilePage />} activePage='profile' />
  )
}
