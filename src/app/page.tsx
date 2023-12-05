// 'use client'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import { backend_url } from '@/constants/app.constrant'
import React from 'react'

export default async function page() {

	// Requests
	const getRequest = await fetch(backend_url + '/room-request/recent', {
		next: {
			revalidate: 10,
		},
	})
	let requests = await getRequest.json()

	return (
		<>
			<MainLayout
				activePage="home"
				centerComponent={<FeedPage requests={requests} />}
			/>
		</>
	)
}
