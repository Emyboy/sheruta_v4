import MasterPopups from '@/components/Popups/Masterpopups'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MasterPopups />
			<Component {...pageProps} />
		</>
	)
}
