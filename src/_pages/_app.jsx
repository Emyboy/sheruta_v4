import MasterPopups from '@/components/Popups/Masterpopups'
import ProgressBar from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
	alert("hi")
	return (
		<>
			<ProgressBar
				color="#00BC73"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<MasterPopups />
			<Component {...pageProps} />
		</>
	)
}
