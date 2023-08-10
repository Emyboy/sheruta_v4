import React from 'react'
import MainNavbar from '../MainLayout/MainNavbar'

type Props = {
	children: React.ReactElement
	backgroundURL: string
}

export default function AuthLayout({ children, backgroundURL }: Props) {
	return (
		<div className="flex flex-col min-h-screen">
			<MainNavbar activePage={'login'} className="absolute" />
			<div className="flex-1 flex">
				<div
					className="w-0 md:w-1/2 bg-dark bg-img"
					style={{
						backgroundImage: `url(${backgroundURL})`,
					}}
				></div>
				<div className="w-screen md:w-1/2 flex flex-col justify-center">
					{children}
				</div>
			</div>
		</div>
	)
}
