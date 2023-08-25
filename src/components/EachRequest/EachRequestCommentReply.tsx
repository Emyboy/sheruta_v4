import React from 'react'
import { SlOptions } from 'react-icons/sl'

type Props = {}

export default function EachRequestCommentReply({}: Props) {
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

