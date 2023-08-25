import Link from 'next/link'
import React from 'react'
import { SlOptions } from 'react-icons/sl'
import EachRequestCommentReply from './EachRequestCommentReply'

type Props = {}

export default function EachRequestComment({}: Props) {
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
							<EachRequestCommentReply />
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
