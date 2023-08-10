'use client'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import LoginPage from '@/components/Pages/Authentication/LoginPage'
import React from 'react'
import _Container from '@/packages/ui/_Container'
import AuthLayout from '@/components/Layouts/AuthLayout/AuthLayout'

export default function Login() {
	return (
		<AuthLayout backgroundURL="https://images.pexels.com/photos/8037067/pexels-photo-8037067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
			<LoginPage />
		</AuthLayout>
	)
	return (
		<div className="flex flex-col min-h-screen">
			<MainNavbar activePage={'login'} className="absolute" />
			<div className="flex-1 flex">
				<div
					className="w-0 md:w-1/2 bg-dark bg-img"
					style={{
						backgroundImage: `url(https://images.pexels.com/photos/8037067/pexels-photo-8037067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
					}}
				></div>
				<div className="w-screen md:w-1/2 flex flex-col justify-center">
					<LoginPage />
				</div>
			</div>
		</div>
	)
}
