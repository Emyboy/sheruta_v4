'use server'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import React from 'react'
import _Container from '@/packages/ui/SContainer'
import RegisterPage from '@/components/Pages/Authentication/RegisterPage'
import AuthLayout from '@/components/Layouts/AuthLayout/AuthLayout'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Login() {
	const cookieStore = cookies()
	const token = cookieStore.has('sheruta_auth')

	if (token) {
		redirect('/')
	}
	return (
		<AuthLayout backgroundURL="https://images.pexels.com/photos/7208925/pexels-photo-7208925.jpeg?auto=compress&cs=tinysrgb&w=1600">
			<RegisterPage />
		</AuthLayout>
	)
	return (
		<div className="flex flex-col min-h-screen">
			<MainNavbar activePage={'login'} className="absolute" />
			<div className="flex-1 flex">
				<div
					className="w-0 md:w-1/2 bg-dark bg-img"
					style={{
						backgroundImage: `url(https://images.pexels.com/photos/7208925/pexels-photo-7208925.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
					}}
				></div>
				<div className="w-screen md:w-1/2 flex flex-col justify-center  md:py-20">
					<RegisterPage />
				</div>
			</div>
		</div>
	)
}
