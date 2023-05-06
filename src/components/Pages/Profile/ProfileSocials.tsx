import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'

type Props = {}

export default function ProfileSocials({}: Props) {
	return (
		<section>
			<div className="flex flex-col gap-2">
				<h6 className="text-lg">Socials Media</h6>
				<div className="flex flex-wrap gap-2">
					{new Array(4).fill(null).map((val) => {
						return <EachSocial />
					})}
				</div>
			</div>
		</section>
	)
}

const EachSocial = () => {
	return (
		<span className="h-11 w-11 border flex justify-center items-center rounded-md border-dark_light text-dark_light text-xl cursor-pointer hover:bg-dark_light hover:text-white">
			<AiOutlineTwitter />
		</span>
	)
}
