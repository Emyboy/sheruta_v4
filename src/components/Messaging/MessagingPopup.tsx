'use client'
import React from 'react'
import {
	HiOutlineChevronDown,
	HiOutlineChevronLeft,
	HiOutlineChevronUp,
} from 'react-icons/hi2'
import ConversationList from './ConversationList'
import MessageDetails from './MessageDetails/MessageDetails'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import { setMessagingState } from '@/redux/features/message.slice'

export default function MessagingPopup() {
	const { show_messaging, active_conversation } = useSelector(
		(state: AppStore) => state.message
	)
	const dispatch = useDispatch()

	return (
		<div
			className={classNames(
				'fixed hidden- lg:block  right-0 md:right-5 w-screen md:w-[25rem]',
				{ '-bottom-16 md:bottom-0': !show_messaging },
				{ 'bottom-0': show_messaging }
			)}
			style={{ zIndex: 80 }}
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
					{active_conversation && (
						<button
							onClick={() =>
								dispatch(setMessagingState({ active_conversation: null }))
							}
						>
							<HiOutlineChevronLeft className="text-lg" />
						</button>
					)}
					<h6 className="flex gap-3">
						Messages <div className="badge font-bold">5</div>
					</h6>
				</div>
				<button
					onClick={() => {
						dispatch(setMessagingState({ show_messaging: !show_messaging }))
						// dispatch(setMessagingState({ active_conversation: null }))
					}}
				>
					{show_messaging ? (
						<HiOutlineChevronDown className="text-lg" />
					) : (
						<HiOutlineChevronUp className="text-lg" />
					)}
				</button>
			</div>
			<div
				className={classNames(
					'bg-white flex-1 bottom-0 border-x shadow-lg overflow-y-auto',
					{ 'h-[80vh] md:h-[70vh]': show_messaging },
					{ 'h-[0vh]': !show_messaging }
				)}
				// style={{ height: height, maxHeight: height }}
			>
				{active_conversation ? (
					<MessageDetails />
				) : (
					<ConversationList
						setConversation={(conversation_id) =>
							dispatch(
								setMessagingState({ active_conversation: conversation_id })
							)
						}
					/>
				)}
			</div>
		</div>
	)
}
