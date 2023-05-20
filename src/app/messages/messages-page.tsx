import MainLayout from '@/components/Layouts/MainLayout/MainLayout'
import React from 'react'

type Props = {}

export default function MessagesPage({}: Props) {
	return (
		<MainLayout
            activePage='messages'
			centerComponent={
				<>
					<div>messages-page</div>
				</>
			}
		/>
	)
}
