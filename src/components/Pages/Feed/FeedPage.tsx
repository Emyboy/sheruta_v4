import React from 'react'
import MeetTheFounders from './MeetTheFounders'
import { Spinner } from '@/components/ChakraUi'
import { RoomRequest } from '@/interface/request.interface'
import EachRequest from '@/components/EachRequest/EachRequest'

type Props = {
	requests: RoomRequest[]
}

export default function FeedPage({requests}: Props) {
	return (
		<>
			<div className="flex flex-col gap-4">
				{requests.map((data, i) => {
					return (
						<>
							{i === 2 && <MeetTheFounders />}
							<EachRequest request={data} key={`feed-${i}`}  />
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
