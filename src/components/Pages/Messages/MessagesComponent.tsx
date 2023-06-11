import React from 'react'
import MessageConversationList from './MessageConversationList'
import MessageDetail from './MessageDetail'

type Props = {}

export default function MessagesComponent({}: Props) {
	return (
		<div className="flex justify-center min-h-screen max-h-screen">
			<div className="w-screen  xl:w-3/5  flex shadow-lg max-h-screen">
				<div className="w-1/3 bg-white  border border-1 ">
					<MessageConversationList />
				</div>
				<div className="w-2/3 bg-gray-100  flex-1 border border-1">
					<MessageDetail />
				</div>
			</div>
		</div>
	)
}
