'use client'
import React, { useState } from 'react'
import {
	HiOutlineChevronDown,
	HiOutlineChevronLeft,
	HiOutlineChevronUp,
} from 'react-icons/hi2'
import ConversationList from './ConversationList'
import MessageDetails from './MessageDetails/MessageDetails'

export default function MessagingPopup() {
	const [show, setShow] = useState(false)
	let height = show ? '70vh' : 0

	const [conversationID, setConversationID] = useState<string>('')

	return (
		<div
			className="fixed hidden lg:block z-50"
			style={{ bottom: '0', right: 30, width: '450px' }}
		>
			<div
				className="bg-dark flex justify-between text-white items-center px-5"
				style={{
					borderRadius: '15px 15px 0px 0px',
					height: '50px',
					zIndex: 30,
				}}
			>
				<div className="flex gap-4 items-center">
					{conversationID && (
						<button onClick={() => setConversationID('')}>
							<HiOutlineChevronLeft className="text-lg" />
						</button>
					)}
					<h6 className="flex gap-3">
						Messages <div className="badge font-bold">5</div>
					</h6>
				</div>
				<button onClick={() => setShow(!show)}>
					{show ? (
						<HiOutlineChevronDown className="text-lg" />
					) : (
						<HiOutlineChevronUp className="text-lg" />
					)}
				</button>
			</div>
			<div
				className="bg-white flex-1 bottom-0 shadow-lg overflow-y-auto"
				style={{ height: height, maxHeight: height }}
			>
				{conversationID ? (
					<MessageDetails />
				) : (
					<ConversationList setConversation={setConversationID} />
				)}
			</div>
		</div>
	)
}
