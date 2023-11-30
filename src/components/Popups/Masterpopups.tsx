'use client'
import React from 'react'
import IntentionsPopup from './IntentionsPopup/IntentionsPopup'
import { useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
// import LoginPopup from './LoginPopup'

export default function MasterPopups() {
	const { user, user_info } = useSelector((state: AppStore) => state.app.auth)
	return (
		<>
			{user && user_info && (
				<>
					<IntentionsPopup
						isOpen
						user={user}
						user_info={user_info}
					/>
				</>
			)}
			{/* <LoginPopup /> */}
		</>
	)
}
