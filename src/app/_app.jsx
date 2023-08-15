import MasterPopups from '@/components/Popups/Masterpopups'

export default function App({ Component, pageProps }) {
	return (
		<>
			<MasterPopups />
			<Component {...pageProps} />
		</>
	)
}
