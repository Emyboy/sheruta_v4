import React from 'react'
import _Container from '@/packages/ui/_Container'

import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter/MainFooter'
// import MainLeftNav from './MainLeftNav'
import MainRightNav from './MainRightNav'
import LeftPanel from './LeftPanel'



type Props = {
	leftComponent?: React.ReactElement
	centerComponent?: React.ReactElement
	rightComponent?: React.ReactElement
	activePage?: string
}

export default function MainLayout({
	centerComponent,
	leftComponent,
	rightComponent,
	activePage,
}: Props) {
	return (
		<>
			<MainNavbar activePage={activePage} />
			<div className="bg-background- flex-1 overflow-y-auto flex justify-center pb-16">
				<_Container className="flex h-full- justify-between ">
					<LeftPanel leftComponent={leftComponent} activePage={activePage} />
					<main className="xl:w-1/3 lg:w-4/5 w-screen py-3-">
						{centerComponent}
					</main>
					<div className="border-l border-1 w-1/3 hidden lg:visible justify-start lg:flex  ">
						<div className="bg-green-100- fixed  h-96 w-60">
							{rightComponent || <MainRightNav />}
						</div>
					</div>
				</_Container>
			</div>
			<MainFooter activePage={activePage} />
		</>
	)
}

