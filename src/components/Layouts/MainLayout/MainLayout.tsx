import React from 'react'
import _Container from '@/packages/ui/_Container'

import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter'
import MainLeftNav from './MainLeftNav'
import MainRightNav from './MainRightNav'

type Props = {
	leftComponent?: React.ReactElement
	centerComponent: React.ReactElement
	rightComponent?: React.ReactElement
}

export default function MainLayout({
	centerComponent,
	leftComponent,
	rightComponent,
}: Props) {
	return (
		<>
			<MainNavbar />

			<div className="bg-background- flex-1 overflow-y-auto flex justify-center pb-16">
				<_Container className="flex h-full- justify-between ">
					<aside className="border-r border-1 w-1/3 hidden lg:visible justify-end lg:flex bg-purple-200- ">
						<div className="bg-green-100- fixed  h-96 w-56">
							{leftComponent || <MainLeftNav />}
						</div>
					</aside>
					<main className="lg:w-2/3 w-screen py-3">{centerComponent}</main>
					<div className="border-l border-1 w-1/3 hidden lg:visible justify-start lg:flex bg-purple-200- ">
						<div className="bg-green-100- fixed  h-96 w-56">
							{rightComponent || <MainRightNav />}
						</div>
					</div>
				</_Container>
			</div>
			<MainFooter />
		</>
	)
}
