'use client'
import MasterPopups from '@/components/Popups/Masterpopups'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import '../styles/globals.css'

const queryClient = new QueryClient()

export default function providers({ children }: any) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<MasterPopups />
					{children}
				</Provider>
			</QueryClientProvider>
		</>
	)
}
