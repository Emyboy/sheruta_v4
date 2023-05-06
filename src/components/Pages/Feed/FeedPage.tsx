import React from 'react'
import EachRequest from './EachRequest'
import _Spinner from '@/packages/ui/_Spinner'

type Props = {}

export default function FeedPage({ }: Props) {
    return (
			<>
				<div className="px-3">
					{new Array(4).fill(null).map((val) => {
						return <EachRequest />
					})}
				</div>
				<div className="flex justify-center py-9">
					<_Spinner />
				</div>
			</>
		)
}