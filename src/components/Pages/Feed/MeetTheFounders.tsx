import React from 'react'
import { HiOutlinePlayCircle } from 'react-icons/hi2'

export default function MeetTheFounders() {
	return (
		<div className="flex flex-col">
			<div
				className="h-60  text-white rounded-lg bg-img justify-center flex items-center relative"
				style={{
					backgroundImage: `url(https://th.bing.com/th/id/OIG.aRpa3B_lADC1IE4jRqDt?pid=ImgGn)`,
				}}
			>
				<HiOutlinePlayCircle className="z-10" size={40} />
				<h5 className='text-white z-10 ml-2'>Meet The Founders</h5>
				<div className="h-60 w-full rounded-lg absolute p-5 bg-img bg-dark_transparent" />
			</div>
		</div>
	)
}
