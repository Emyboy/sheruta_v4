// 'use client'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import { backend_url } from '@/constants/app.constrant'
import React from 'react'

export default async function page() {
	const getRecentRequests = async () => {
		try {
			const res = await fetch(backend_url + '/room-request/recent')
			let data = await res.json()
			return data
		} catch (error) {
			console.log('DATA ERROR --', error)
			return error
		}
	}

	let data = await getRecentRequests()

	return (
		<>
			<MainLayout
				activePage="home"
				centerComponent={<FeedPage requests={data} />}
			/>
		</>
	)
}
