'use client'
import MasterPopups from '@/components/Popups/Masterpopups'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { CacheProvider, ChakraProvider } from '@/components/ChakraUi'

const queryClient = new QueryClient()

export default function providers({ children }: any) {
	return (
		<>
			<CacheProvider>
				<ChakraProvider>
					<QueryClientProvider client={queryClient}>
						<Provider store={store}>
							<Toaster />
							<MasterPopups />
							{children}
						</Provider>
					</QueryClientProvider>
				</ChakraProvider>
			</CacheProvider>
		</>
	)
}
