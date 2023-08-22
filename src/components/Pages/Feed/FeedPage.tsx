import React from 'react'
import EachRequest from '../../EachRequest/EachRequest'
import _Spinner from '@/packages/ui/SSpinner'
import MeetTheFounders from './MeetTheFounders'

type Props = {}

export default function FeedPage({}: Props) {
	return (
		<>
			<div className='flex flex-col gap-4'>
				{new Array(4).fill(null).map((_, i) => {
					return (
						<>
							{i === 2 && <MeetTheFounders />}
							{/* <EachRequest key={`feed-${i}`} /> */}
						</>
					)
				})}
			</div>
			<div className="flex justify-center pt-9 pb-36">
				<_Spinner />
			</div>
		</>
	)
}
