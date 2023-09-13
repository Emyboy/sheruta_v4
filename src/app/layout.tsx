import MasterControl from '@/components/MasterControl'
import Providers from './providers'
import AppLoading from '@/components/AppLoading'

export const metadata = {
	title: 'Sheruta NG',
	description: 'Room for share in Lagos, Lekki and Abuja',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang="en" className="bg-background">
				<head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
					/>
				</head>
				<body className="bg-background">
					<Providers>
						<MasterControl />
						<AppLoading />
						{children}
					</Providers>
				</body>
			</html>
		</>
	)
}
