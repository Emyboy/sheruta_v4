// 'use client'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import MainLeftNav from '@/components/Layouts/MainLayout/MainLeftNav'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import MainRightNav from '@/components/Layouts/MainLayout/MainRightNav'
import React from 'react'

export default function Home() {
  return (
    <MainLayout
      activePage='home'
      centerComponent={<FeedPage />}
    />
  )
}

