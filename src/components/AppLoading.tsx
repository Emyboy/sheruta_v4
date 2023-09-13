'use client'
import { AppStore } from '@/interface/index.interface'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AppLoading() {
	const { app_loading } = useSelector((state: AppStore) => state.view)

	if (!app_loading) {
		return null
	}

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-[100]">
			<div className="flex h-full items-center justify-center">
				<img
					src="/icon_green.png"
					alt="brand"
					width={50}
					className="animate-spin"
				/>
			</div>
		</div>
	)
}
