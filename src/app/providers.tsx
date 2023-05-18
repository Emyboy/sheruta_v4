'use client'
import MasterPopups from '@/components/Popups/Masterpopups'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

export default function providers({ children }: any) {
	return (
		<>
			<Provider store={store}>
				<MasterPopups />
				{children}
			</Provider>
		</>
	)
}
