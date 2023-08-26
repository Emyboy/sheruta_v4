import React from 'react'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'

export default function PostRoomPriceBreakdown({ next }: EachStepProps) {
	return (
		<>
			<button
				onClick={next}
				className={classNames(
					' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
				)}
			>
				Upload Listing
			</button>
		</>
	)
}
