import React, { useState } from 'react'
import EachConversation from './EachConversation'
import classNames from 'classnames'

type Props = {
	setConversation: (conversation: any) => void
}

export default function ConversationList({ setConversation }: Props) {
	return (
		<ul className="">
			{new Array(16).fill(null).map((_, i) => {
				let id = Math.random()
				return (
					<li key={id}>
						<EachConversation
							active={i < 3}
							onClick={() => setConversation(id)}
						/>
					</li>
				)
			})}
		</ul>
	)
}
