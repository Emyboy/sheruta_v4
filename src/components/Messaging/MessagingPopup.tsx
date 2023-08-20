'use client'
import React, { useState } from 'react'
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
		(state: AppStore) => state.app.message
	)
	const dispatch = useDispatch()
	const [selectedTab, setSelectedTab] = useState(0)
	const tabs = [
		{
			name: 'Conversations',
			count: 3,
		},
		{
			name: 'Flat Mates',
			count: 6,
		},
	]

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
				onClick={() => {
					dispatch(setMessagingState({ show_messaging: !show_messaging }))
					// dispatch(setMessagingState({ active_conversation: null }))
				}}
				className="bg-dark flex justify-between text-white items-center px-5"
				style={{
					borderRadius: '15px 15px 0px 0px',
					height: '50px',
					zIndex: 30,
				}}
			>
				<div className="flex gap-4 items-center">
					<h6 className="flex gap-3">
						Messages <div className="badge font-bold">5</div>
					</h6>
				</div>
				<button>
					{show_messaging ? (
						<HiOutlineChevronDown className="text-lg" />
					) : (
						<HiOutlineChevronUp className="text-lg" />
					)}
				</button>
			</div>
			{!active_conversation && (
				<div
					className={classNames(
						'bg-gray-200  flex justify-evenly transition duration-200 ease-in-out',
						{ 'h-[40px]': show_messaging },
						{ 'h-[0px]': !show_messaging }
					)}
				>
					{show_messaging &&
						tabs.map((tab, i) => {
							return (
								<div
									key={tab.name}
									onClick={() => setSelectedTab(i)}
									className={classNames(
										'w-[50%] flex justify-center items-center h-full cursor-pointer transition duration-100 ease-in-out',
										{ 'bg-white font-semibold': selectedTab === i }
									)}
								>
									<small className="flex items-center gap-2">
										{tab.name}{' '}
										{tab.count > 0 && (
											<div className="rounded-full bg-danger text-white h-2 w-2"></div>
										)}
									</small>
								</div>
							)
						})}
				</div>
			)}
			<div
				className={classNames(
					'bg-white flex-1 bottom-0 border-x shadow-lg overflow-y-auto',
					{ 'h-[75vh] md:h-[70vh]': show_messaging },
					{ 'h-[0vh]': !show_messaging }
				)}
				// style={{ height: height, maxHeight: height }}
			>
				{active_conversation ? (
					<MessageDetails
						goBack={() =>
							dispatch(setMessagingState({ active_conversation: null }))
						}
					/>
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
