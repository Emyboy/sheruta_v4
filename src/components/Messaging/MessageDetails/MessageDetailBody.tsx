import React from 'react'
import { HiPaperAirplane } from 'react-icons/hi2'
import EachMessageBobble from './EachMessageBobble'

type Props = {}

export default function MessageDetailBody({}: Props) {
	return (
		<>
			<div className="bg-gray-100 flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-3">
				{new Array(6).fill(null).map((_) => {
					return (
						<div>
							<EachMessageBobble isOutgoing />
							<EachMessageBobble isOutgoing={false} />
						</div>
					)
				})}
			</div>
			<div className="h-16 border p-2 flex items-center">
				<form className="bg-gray-100 py-1 px-2 rounded-full h-full w-full flex">
					<input
						className="bg-gray-100 outline-none border-none flex-1 text-sm"
						placeholder="Start typing..."
						required
					/>
					<button className="text-dark">
						<HiPaperAirplane className="text-xl" />
					</button>
				</form>
			</div>
		</>
	)
}
