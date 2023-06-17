import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

type Props = {
	active?: boolean
	onClick?: () => void
}

export default function EachConversation({ active, onClick }: Props) {
	return (
		<div
            onClick={onClick}
			className={classNames(' outline-none cursor-pointer', {
				'bg-gray-50': active,
			})}
			style={{ height: '70px' }}
		>
			<div className="flex p-3 border-b gap-3 items-center">
				<div className="avatar">
					<div className="w-10 rounded-full">
						<Image
							alt="profile"
							className="rounded-full"
							fill
							src={`/assets/img/user-2.jpg`}
						/>
					</div>
				</div>
				<div className="flex flex-col flex-1 gap-2">
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
