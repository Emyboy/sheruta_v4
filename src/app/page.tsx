// 'use client'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import FeedPage from '@/components/Pages/Feed/FeedPage'
import { APICall } from '@/services/index.service'
import React from 'react'

let getRecentRequests = async () => {
	try {
		const res = await APICall({
			path: '/room-request/recent',
			options: { method: 'GET' },
		})
		return res.data
	} catch (error) {
		return Promise.reject(error)
	}
}

export default async function Home() {
	let recentRequests = await getRecentRequests()
	return (
		<MainLayout
			activePage="home"
			centerComponent={<FeedPage requests={recentRequests} />}
		/>
	)
}
