import React from 'react'
import _Container from '@/packages/ui/_Container'

import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter/MainFooter'
// import MainLeftNav from './MainLeftNav'
import MainRightNav from './DELETE_MainRightNav'
// import LeftPanel from './DELETE_LeftPanel'
import MainLeftNav from './MainLeftNav'

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
			<div className="min-h-screen flex flex-col">
				<MainNavbar activePage={''} />
				<div className="flex w-screen md:mx-auto md:w-5/6 xl:w-2/3">
					<Aside>
						{leftComponent || <MainLeftNav activePage={activePage} />}
					</Aside>
					<main
						className="flex-1 top-16 md:relative mt-20 md:mt-5"
					>
						{centerComponent}
					</main>
					<Aside>{rightComponent || <MainRightNav />}</Aside>
				</div>
			</div>
			<MainFooter activePage={activePage} />
		</>
	)
}

const Aside = ({ children }: { children: any }) => {
	return (
		<aside className="hidden lg:block w-60 sticky top-20 h-full">
			{children}
		</aside>
	)
}
