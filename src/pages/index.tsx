import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import MainLeftNav from '@/components/Layouts/MainLayout/MainLeftNav'
import MainRightNav from '@/components/Layouts/MainLayout/MainRightNav'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import React from 'react'

export default function index() {
  return (
    <MainLayout
      activePage='home'
      centerComponent={<FeedPage />}
      leftComponent={<MainLeftNav />}
      rightComponent={<MainRightNav />}
    />
  )
}

