import { SContentContainer } from '@/packages/ui/SContainer'
import React from 'react'

type Props = {
    reset: () => void
    statusCode?: number
}

export default function DefaultPageError({reset, statusCode}: Props) {
  return (
		<SContentContainer>
			<center className="h-[60vh] flex flex-col justify-center items-center">
				<h1 className="text-6xl font-bold mb-[80px]">{statusCode || 500}</h1>

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
	)
}