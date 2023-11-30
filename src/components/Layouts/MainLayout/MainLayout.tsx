'use client'
import React, { useEffect } from 'react'
import _Container from '@/packages/ui/SContainer'
import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter/MainFooter'
import MainRightNav from './MainRightNav'
import MainLeftNav from './MainLeftNav'
import MessagingPopup from '@/components/Messaging/MessagingPopup'
import { Category } from '@/interface/options.interface'


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
				<div className="flex w-screen md:mx-auto md:w-[95vw] xl:w-[1100px]">
					<Aside>
						{leftComponent || <MainLeftNav activePage={activePage} />}
					</Aside>
					<main className="flex-1 top-16 md:relative mt-20 md:mt-5">
						{centerComponent}
					</main>
					<Aside>{rightComponent || <MainRightNav />}</Aside>
				</div>
			</div>
			<MessagingPopup />
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
