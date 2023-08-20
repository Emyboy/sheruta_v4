'use server'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import LoginPage from '@/components/Pages/Authentication/LoginPage'
import React from 'react'
import _Container from '@/packages/ui/SContainer'
import AuthLayout from '@/components/Layouts/AuthLayout/AuthLayout'
import { cookies } from 'next/headers'
import { redirect} from 'next/navigation'

export default async function Login() {
	const cookieStore = cookies()
	const token = cookieStore.has('sheruta_auth')

	if(token){
		redirect('/')
	}
	return (
		<AuthLayout backgroundURL="https://images.pexels.com/photos/8037067/pexels-photo-8037067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
			<LoginPage />
		</AuthLayout>
	)
}
