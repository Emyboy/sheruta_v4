import React, { useState } from 'react'
import { EachStepProps } from '../PostRoom'
import { HiMiniVideoCamera } from 'react-icons/hi2'
import classNames from 'classnames'

export default function PostRoomVideoSelector({ next }: EachStepProps) {
	const [videoData, setVideoData] = useState()

	return (
		<>
			<div className="h-[200px] md:h-[400px] w-[90vw] md:w-[700px] bg-gray-200 border-dashed border-2 rounded-md border-gray-300 flex items-center justify-center cursor-pointer hover:shadow-lg text-gray-400">
				<div className="flex flex-col gap-4 items-center">
					<HiMiniVideoCamera size={50} />
					<p className="">80 MB max</p>
				</div>
			</div>

			<button
				onClick={next}
				className={classNames(
					' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
				)}
			>
				Continue
			</button>
		</>
	)
}
