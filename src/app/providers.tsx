'use client'
import MasterPopups from '@/components/Popups/Masterpopups'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { CacheProvider, ChakraProvider } from '@/components/ChakraUi'
import { Next13ProgressBar } from 'next13-progressbar'

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
							<Next13ProgressBar
								height="4px"
								color="#00BC73"
								options={{ showSpinner: true }}
								showOnShallow
							/>
							{children}
						</Provider>
					</QueryClientProvider>
				</ChakraProvider>
			</CacheProvider>
		</>
	)
}
