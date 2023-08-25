'use client'

import React from 'react'
import { SlOptions, SlLocationPin } from 'react-icons/sl'
import {
	HiOutlineBookmark,
	HiOutlineChat,
	HiOutlinePhone,
} from 'react-icons/hi'
import Link from 'next/link'
import { HiOutlineShare, HiOutlineTrash, HiPlay } from 'react-icons/hi2'
import { RoomRequest } from '@/interface/request.interface'
import SAvatar from '@/packages/ui/SAvatar'
import STextToMarkdown from '@/packages/ui/STextToMarkdown'
import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Divider,
} from '@/components/ChakraUi'
import { renderPricingFull } from '@/packages/utils/pricing.utils'
import { useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import Image from 'next/image'

type Props = {
	request: RoomRequest
}

export default function EachRequest({ request }: Props) {
	let link = `/request/${request.type}/${request.slug}/${request.id}`

	let author = request.user
	let authorInfo = request.user_info

	return (
		<article className="bg-white py-4 border-b border-1 rounded-sm flex flex-col gap-4 px-3 lg:px-5">
			<div className="flex justify-between items-center">
				<Link
					href={`/user/${author?.username}`}
					className="flex items-center gap-2"
				>
					<SAvatar userData={author} />
					<div>
						<h6 className="font-medium">{author.first_name}</h6>
						<small className="text-dark_lighter">@{author.username}</small>
					</div>
				</Link>
				{/* <button className="text-dark_lighter">
					<SlOptions />
				</button> */}
				<Menu>
					<MenuButton
						as={Button}
						variant={'ghost'}
						className="text-dark_lighter hover:bg-white"
					>
						<SlOptions />
					</MenuButton>
					<MenuList>
						<MenuItem className="hover:bg-green-100 flex gap-3 items-center">
							<HiOutlineShare /> <span>Share</span>
						</MenuItem>

						<Divider />
						<MenuItem className="hover:bg-green-100 text-danger flex gap-3 items-center">
							<HiOutlineTrash /> <span>Delete</span>
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
			<div>
				<address className="text-theme flex gap-2 items-center text-sm">
					<SlLocationPin /> {request.location_text}
				</address>
				<Link href={link}>
					<div className="h-[64px] overflow-hidden text-clip text-sm">
						<STextToMarkdown text={request.request_text} />
					</div>
					<span className="text-theme">Read More..</span>
				</Link>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className="bg-orange-100 text-orange-500 px-2 rounded-lg text-sm">
						{request?.service?.name}
					</div>
					<div className="bg-green-100 text-green-500 px-2 rounded-lg text-sm">
						{request?.category?.name}
					</div>
				</div>
				{request?.private_room && (
					<div className="px-2 rounded-lg border-1 border text-sm text-dark_light">
						Private Room
					</div>
				)}
			</div>
			<div className="flex items-center gap-1 h-56 lg:h-72">
				<Link
					href={link}
					className="cursor-pointer p-2 w-1/2 h-full rounded-lg bg-img flex flex-col justify-center items-center relative overflow-hidden"
					// style={{ backgroundImage: `url(${request?.image_urls[0].url})` }}
				>
					{request?.video_url && (
						<div className="text-3xl hover:text-4xl p-4 bg-dark_transparent text-white rounded-full shadow-md relative z-10">
							<HiPlay />
						</div>
					)}
					<Image
						fill
						src={request?.image_urls[0].url}
						alt={`room for share in ${request?.location_keyword?.name}`}
						className="relative"
					/>
				</Link>
				<div className="w-1/2 h-full gap-1 flex flex-col">
					<div
						className="cursor-pointer h-1/2 bg-img rounded-lg relative overflow-hidden"
						// style={{ backgroundImage: `url(${request?.image_urls[1].url})` }}
					>
						<Image
							fill
							src={request?.image_urls[1].url}
							alt={`room for share in ${request?.location_keyword?.name}`}
							className="relative"
						/>
					</div>
					<Link
						href={link}
						className="cursor-pointer h-1/2 bg-img rounded-lg flex flex-col justify-center items-center relative overflow-hidden"
						// style={{ backgroundImage: `url(${request?.image_urls[2].url})` }}
					>
						{request?.image_urls?.length > 3 && (
							<div className="text-xl hover:text-2xl p-4 bg-dark_transparent text-white rounded-full shadow-md z-10">
								{request?.image_urls?.length - 3}+
							</div>
						)}
						<Image
							fill
							src={request?.image_urls[2].url}
							alt={`room for share in ${request?.location_keyword?.name}`}
							className="relative"
						/>
					</Link>
				</div>
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<button className="text-dark_lighter flex gap-1 items-center hover:text-theme">
						<HiOutlinePhone size={20} />
						<small>{request?.call_count}</small>
					</button>
					<button className="text-dark_lighter flex gap-1 items-center hover:text-theme">
						<HiOutlineChat size={20} />
						<small>{request?.question_count}</small>
					</button>
				</div>
				<div className="flex items-center">
					<b>{renderPricingFull(request?.room_rent)}</b>
					<small className="text-dark_lighter">
						/{request?.pay_frequency?.name}
					</small>
				</div>
			</div>
			<CommentSection requestData={request} />
		</article>
	)
}

const CommentSection = ({ requestData }: { requestData: RoomRequest }) => {
	const { user } = useSelector((state: AppStore) => state.app.auth)
	return (
		<div className="flex flex-col gap-2">
			{requestData?.user?.id !== user?.id && (
				<form className="flex bg-background rounded-full p-1 justify-between gap-3">
					{user && <SAvatar userData={user} />}
					<input
						placeholder="Ask your question (Ex. is this available?)"
						className="bg-background w-full outline-none text-sm md:text-md"
					/>
					<button className="bg-dark text-white rounded-full px-3 py-1">
						Send
					</button>
				</form>
			)}
			<div className="flex flex-col gap-5">
				<EachComment />
			</div>
		</div>
	)
}

export const EachComment = () => {
	return (
		<>
			<div className="flex gap-3 items-center">
				<small className="text-dark_lighter text-xs">Questions</small>
				<hr className="my-2 flex-1" />
			</div>
			<div className="flex items-center">
				<article className="flex gap-2">
					<img
						src="/assets/img/user.jpg"
						alt="avatar"
						className="w-9 h-9 rounded-full"
					/>
					<div>
						<div className="flex justify-between">
							<h6 className="font-medium">The person name</h6>
							<button className="text-dark_lighter">
								<SlOptions />
							</button>
						</div>
						<p className="text-dark_lighter mb-4 text-sm">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
							voluptates quidem deleniti eaq ullam?
						</p>
						<div className="flex flex-col gap-2">
							<EachReply />
						</div>
					</div>
				</article>
			</div>
			<Link href={'/'} className="text-theme text-center text-sm">
				Show More
			</Link>
		</>
	)
}

const EachReply = () => {
	return (
		<article className="flex gap-2 ml-3">
			<img
				src="/assets/img/user.jpg"
				alt="avatar"
				className="w-9 h-9 rounded-full"
			/>
			<div>
				<div className="flex justify-between">
					<h6 className="font-medium">The person name</h6>
					<button className="text-dark_lighter">
						<SlOptions />
					</button>
				</div>

				<p className="text-dark_lighter text-sm">
					Lorem text-sm ipsum dolor sit amet consectetur adipisicing elit. Sint
					voluptates quidem deleniti eaq ullam?
				</p>
			</div>
		</article>
	)
}
