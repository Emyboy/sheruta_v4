// 'use client'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import React from 'react'

export default function Home() {
  return (
    <MainLayout
      activePage='home'
      centerComponent={<FeedPage />}
    />
  )
}

