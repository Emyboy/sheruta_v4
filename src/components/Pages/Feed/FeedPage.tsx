import React from 'react'
import MeetTheFounders from './MeetTheFounders'
import { Spinner } from '@/components/ChakraUi'

type Props = {}

export default function FeedPage({}: Props) {
	return (
		<>
			<div className="flex flex-col gap-4">
				{new Array(4).fill(null).map((_, i) => {
					return (
						<>
							{i === 2 && <MeetTheFounders />}
							{/* <EachRequest key={`feed-${i}`} /> */}
						</>
					)
				})}
			</div>
			<div className="flex justify-center pt-9 pb-36 text-dark_lighter">
				<Spinner size={'sm'} />
			</div>
		</>
	)
}
