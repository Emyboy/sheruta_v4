import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import MessageDetailBody from './MessageDetailBody'
import { HiOutlineChevronLeft } from 'react-icons/hi2'

type Props = {
	goBack: () => void
}

export default function MessageDetails({goBack}: Props) {
	return (
		<div className="flex flex-col h-full max-h-full transition duration-300 ease-in-out">
			<div className="flex border-b p-3 gap-3 items-center">
				<button onClick={goBack}>
					<HiOutlineChevronLeft className="text-lg text-dark_lighter" size={25} />
				</button>
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
						<h6 className={classNames('flex-1 text-sm line-clamp-1')}>
							User Name
						</h6>
						<small>4 Minutes Ago</small>
					</div>
					<div className="flex items-center justify-between">
						<small className={classNames('text-dark_lighter line-clamp-1')}>
							r sit amet consectetur adipisicing elit. Sint voluptates quidem
							deleniti{' '}
						</small>
						<span className={classNames('p-1 rounded-full')}></span>
					</div>
				</div>
			</div>
			<MessageDetailBody />
		</div>
	)
}
