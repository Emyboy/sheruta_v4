import React from 'react'
import MainNavbar from '../MainLayout/MainNavbar'
import MainLeftNav from '../MainLayout/MainLeftNav'
import EachRequest from '@/components/Pages/Feed/EachRequest'
import _Container from '@/packages/ui/_Container'

export default function TestLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<MainNavbar activePage={''} />
			<div className="flex w-screen mx-auto md:w-5/6 xl:w-2/3">
				<Aside>
					<MainLeftNav />
				</Aside>
				<main className="flex-1 bg-white px-5 top-16 relative shadow mt-5 rounded-md">
					<EachRequest />
					<EachRequest />
					<EachRequest />
					<EachRequest />
					<EachRequest />
					<EachRequest />
					<EachRequest />
				</main>
				<Aside>
					<MainLeftNav />
				</Aside>
			</div>
		</div>
	)
}

const Aside = ({ children }: { children: any }) => {
	return <aside className="p-2  w-60 sticky top-16 h-full">{children}</aside>
}
