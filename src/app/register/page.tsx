'use client'
import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import React from 'react'
import _Container from '@/packages/ui/_Container'
import RegisterPage from '@/components/Pages/Authentication/RegisterPage'

export default function Login() {
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
				<div className="w-screen md:w-1/2 flex flex-col justify-center px-10 lg:px-36 xl:px-56 md:py-20">
					<RegisterPage />
				</div>
			</div>
		</div>
	)
}
