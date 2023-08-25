

'use client'
import { AppStore } from '@/interface/index.interface'
import { RoomRequest } from '@/interface/request.interface'
import SAvatar from '@/packages/ui/SAvatar'
import React from 'react'
import { useSelector } from 'react-redux'
import EachRequestComment from './EachRequestComment'

export default function EachRequestCommentSection({
	requestData,
}: {
	requestData: RoomRequest
}) {
	const { user } = useSelector((state: AppStore) => state.app.auth)

	return (
		<div className="flex flex-col gap-2">
			{requestData?.user?.id !== user?.id || !user && (
				<form className="flex bg-background rounded-full p-1 justify-between gap-3">
					{user && <SAvatar userData={user} />}
					<input
						placeholder="Ask your question (Ex. is this available?)"
						className="bg-background w-full outline-none text-sm md:text-md"
					/>
					<button className="bg-dark text-white rounded-full px-3 py-1">
						Send
					</button>
				</form>
			)}
			<div className="flex flex-col gap-5">
				<EachRequestComment />
			</div>
		</div>
	)
}
