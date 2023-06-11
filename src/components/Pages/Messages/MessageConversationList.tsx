import React from 'react'
import { HiChevronLeft } from 'react-icons/hi2'
import EachConversation from './EachConversation'

type Props = {}

export default function MessageConversationList({}: Props) {
	return (
		<div className="flex flex-col max-h-screen">
			<div className="h-24 border-b flex items-center gap-2 px-3">
				<button className="text-dark_lighter text-2xl">
					<HiChevronLeft />
				</button>
				<span className="text-lg">Messages</span>
			</div>
			<div className="flex-1 overflow-y-auto">
				<EachConversation />
				<EachConversation />
				<EachConversation />
				{/* <EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation />
				<EachConversation /> */}
			</div>
		</div>
	)
}
