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
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
				/>
			</head>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
