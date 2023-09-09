'use client' // Error components must be Client Components

import DefaultPageError from '@/components/Errors/DefaultPageError'
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
			<DefaultPageError reset={reset} />
		</>
	)
}
