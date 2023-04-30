import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import React from 'react'
import { SlCompass } from 'react-icons/sl'

export default function index() {
  return (
    <MainLayout>
      <FeedPage />
    </MainLayout>
  )
}
