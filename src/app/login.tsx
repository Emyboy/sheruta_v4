import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import LoginPage from '@/components/Pages/Authentication/LoginPage'
import React from 'react'

export default function login() {
  return <MainLayout centerComponent={<LoginPage />} />
}
