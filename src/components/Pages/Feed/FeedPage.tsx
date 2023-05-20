import React from 'react'
import EachRequest from './EachRequest'
import _Spinner from '@/packages/ui/_Spinner'
import MeetTheFounders from './MeetTheFounders'

type Props = {}

export default function FeedPage({}: Props) {
	return (
		<>
			<div className="px-3">
				{new Array(4).fill(null).map((_, i) => {
					return (
						<>
							{i === 2 && <MeetTheFounders />}
							<EachRequest key={`feed-${i}`} />
						</>
					)
				})}
			</div>
			<div className="flex justify-center py-9">
				<_Spinner />
			</div>
		</>
	)
}
