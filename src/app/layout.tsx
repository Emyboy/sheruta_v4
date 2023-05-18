import './globals.css'
import  Providers  from './providers'


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
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
