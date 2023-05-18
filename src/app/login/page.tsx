import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import LoginPage from '@/components/Pages/Authentication/LoginPage'
import React from 'react'

export default function Login() {
  return <MainLayout centerComponent={<LoginPage />} />
}
