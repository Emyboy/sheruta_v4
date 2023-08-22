import { AppStore } from '@/interface/index.interface'
import SAvatar from '@/packages/ui/SAvatar'
import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {
	active?: boolean
	onClick?: () => void
}

export default function EachConversation({ active, onClick }: Props) {
	const { user } = useSelector((state:AppStore) => state.app.auth)
	return (
		<div
			onClick={onClick}
			className={classNames('p-2 outline-none cursor-pointer', {
				'bg-gray-50': active,
			})}
			style={{ height: '70px' }}
		>
			<div className="flex ga-9">
				{user && <SAvatar userData={user} />}
				<div className="flex flex-col flex-1 ml-2">
					<div className="flex justify-between items-center">
						<h6
							className={classNames('flex-1 text-sm line-clamp-1', {
								'font-bold': active,
							})}
						>
							User Name
						</h6>
						<small className={classNames({ 'font-bold': active })}>
							4 Minutes Ago
						</small>
					</div>
					<div className="flex items-center justify-between">
						<small
							className={classNames('text-dark_lighter line-clamp-1', {
								'font-medium': active,
							})}
						>
							r sit amet consectetur adipisicing elit. Sint voluptates quidem
							deleniti{' '}
						</small>
						<span
							className={classNames('p-1 rounded-full', {
								'bg-red-400': active,
							})}
						></span>
					</div>
				</div>
			</div>
		</div>
	)
}
