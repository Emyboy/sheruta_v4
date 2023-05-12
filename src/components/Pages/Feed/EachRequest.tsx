import React from 'react'
import { SlOptions, SlLocationPin } from 'react-icons/sl'
import {
	HiOutlineBookmark,
	HiOutlineChat,
	HiOutlinePhone,
} from 'react-icons/hi'
import Link from 'next/link'
import { HiPlay } from 'react-icons/hi2'

type Props = {}

export default function EachRequest({}: Props) {
	let link = `/request/join-paddy/bungalow/lekki/234`
	return (
		<article className="bg-white py-4 border-b border-1 rounded-sm flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<Link href={'/user/user-1234'} className="flex items-center gap-2">
					<img
						src="/assets/img/user.jpg"
						alt="profile"
						className="h-11 w-11 rounded-full"
					/>
					<div>
						<h6 className="font-medium">The Person Name</h6>
						<small className="text-dark_lighter">@TheUserName</small>
					</div>
				</Link>
				<button className="text-dark_lighter">
					<SlOptions />
				</button>
			</div>
			<div>
				<address className="text-theme flex gap-2 items-center text-sm">
					<SlLocationPin /> Lekki County Homes, Lekki
				</address>
				<Link href={link}>
					<p className="text-sm">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nisi
						doloribus placeat officiis optio. Natus tempora at accusantium{' '}
						<span className="text-theme">Read More..</span>
					</p>
				</Link>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<div className="bg-orange-100 text-orange-500 px-2 rounded-lg text-sm">
						For Share
					</div>
					<div className="bg-green-100 text-green-500 px-2 rounded-lg text-sm">
						Bungalow
					</div>
				</div>
				<div className="px-2 rounded-lg border-1 border text-sm text-dark_light">
					Private Room
				</div>
			</div>
			<div className="flex items-center gap-1 h-56 lg:h-72">
				<Link
					href={link}
					className="cursor-pointer p-2 w-1/2 h-full rounded-lg bg-img flex flex-col justify-center items-center"
					style={{ backgroundImage: `url("/assets/img/room-1.jpg")` }}
				>
					<div className="text-3xl hover:text-4xl p-4 bg-dark_transparent text-white rounded-full shadow-md">
						<HiPlay />
					</div>
				</Link>
				<div className="w-1/2 h-full gap-1 flex flex-col">
					<div
						className="cursor-pointer h-1/2 bg-img rounded-lg"
						style={{ backgroundImage: `url("/assets/img/room-3.jpg")` }}
					></div>
					<Link
						href={link}
						className="cursor-pointer h-1/2 bg-img rounded-lg flex flex-col justify-center items-center"
						style={{ backgroundImage: `url("/assets/img/room-2.jpg")` }}
					>
						<div className="text-xl hover:text-2xl p-4 bg-dark_transparent text-white rounded-full shadow-md">
							3+
						</div>
					</Link>
				</div>
			</div>
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<button className="text-dark_lighter flex gap-1 items-center hover:text-theme">
						<HiOutlinePhone size={20} />
						<small>34.4k</small>
					</button>
					<button className="text-dark_lighter flex gap-1 items-center hover:text-theme">
						<HiOutlineChat size={20} />
						<small>22</small>
					</button>
					<button className="text-dark_lighter flex gap-1 items-center hover:text-theme">
						<HiOutlineBookmark size={20} />
						<small>73</small>
					</button>
				</div>
				<div className="flex items-center">
					<b>N1,230,000</b>
					<small className="text-dark_lighter">/monthly</small>
				</div>
			</div>
			<CommentSection />
		</article>
	)
}

const CommentSection = () => {
	return (
		<div className="flex flex-col gap-2">
			<form className="flex bg-background rounded-full p-1 justify-between gap-3">
				<img src="/assets/img/user.jpg" className="w-9 h-9 rounded-full" />
				<input
					placeholder="Ask your question (Ex. is this available?)"
					className="bg-background w-full outline-none"
				/>
				<button className="bg-dark text-white rounded-full px-3 py-1">
					Send
				</button>
			</form>
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
