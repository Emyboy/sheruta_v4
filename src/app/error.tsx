'use client' // Error components must be Client Components

import MainNavbar from '@/components/Layouts/MainLayout/MainNavbar'
import { SContentContainer } from '@/packages/ui/SContainer'
import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.log('APPLICATION ERROR --', error)
	}, [error])

	return (
		<>
			<MainNavbar activePage={''} />
			<SContentContainer>
				<center className="h-[60vh] flex flex-col justify-center items-center">
					<h1 className="text-6xl font-bold mb-[80px]">500</h1>

					<h1 className="font-semibold text-3xl mb-3">Application Error</h1>
					<h2>{`Something went wrong or the content `}</h2>
					<h2>{`does't exist.`}</h2>
					<br />
					<button
						className="bg-dark text-white py-2 px-4 rounded-md w-[300px]"
						onClick={
							// Attempt to recover by trying to re-render the segment
							() => reset()
						}
					>
						Try again
					</button>
				</center>
			</SContentContainer>
		</>
	)
}
