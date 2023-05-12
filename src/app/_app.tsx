import MasterPopups from '@/components/Popups/Masterpopups'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MasterPopups />
			<Component {...pageProps} />
		</>
	)
}
