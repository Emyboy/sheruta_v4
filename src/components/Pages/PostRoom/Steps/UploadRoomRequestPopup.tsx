import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

type Props = {}

export default function UploadRoomRequestPopup({}: Props) {
	return (
		<div className="z-50 bg-white fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center animate__animated animate__fadeIn animate__faster">
			<div className="flex flex-col text-center items-center">
				<ImSpinner2 className="text-theme mb-11 animate-spin" size={50} />
				<h1 className="text-2xl md:text-4xl mb-3 font-bold text-dark">
					Uploading Your Listing
				</h1>
				<small className="text-dark_light">
					This may take some time, So sit back and relax <br />
					while we take it from here.
				</small>
			</div>
		</div>
	)
}
