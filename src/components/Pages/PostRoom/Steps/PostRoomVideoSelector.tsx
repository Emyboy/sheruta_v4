import React from 'react'
import { EachStepProps } from '../PostRoom'
import { HiMiniVideoCamera, HiTrash } from 'react-icons/hi2'
import classNames from 'classnames'
import NextButtonContainer from '../NextButtonContainer'
import { fileToBlob } from '@/packages/utils/file.utils'
import toast from 'react-hot-toast'

export default function PostRoomVideoSelector({
	next,
	onChange,
	roomRequestData,
}: EachStepProps) {
	let maxMB = 30;
	let src
	let videoUrl = roomRequestData?.video_url

	//@ts-ignore
	if (videoUrl && videoUrl instanceof Blob) {
		src = URL.createObjectURL(videoUrl)
	} else {
		src = videoUrl
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		const maxSizeInBytes = maxMB * 1024 * 1024

		//@ts-ignore
		if (selectedFile?.size > maxSizeInBytes) {
			toast(`Video file is more than ${maxMB} MB 😢`)
			return Promise.reject()
		}
		if (selectedFile) {
			try {
				const blob = await fileToBlob(selectedFile)
				onChange({ video_url: blob })
			} catch (error) {
				console.error('Error converting file to Blob:', error)
			}
		}
	}

	return (
		<>
			{!src ? (
				<label
					htmlFor="video-input"
					className="h-[200px] md:h-[400px] w-[90vw] md:w-[700px] bg-gray-200 border-dashed border-2 rounded-md border-gray-300 flex items-center justify-center cursor-pointer hover:shadow-lg text-gray-400"
				>
					<div className="flex flex-col gap-4 items-center">
						<HiMiniVideoCamera size={50} />
						<p className="">{maxMB} MB max</p>
					</div>
					<input
						id="video-input"
						type="file"
						accept="video/*"
						style={{ display: 'none' }}
						onChange={handleFileChange}
					/>
				</label>
			) : (
				<div className="flex flex-col gap-5">
					<video
						controls
						src={src || ''}
						className="h-[200px] md:h-[400px] w-[90vw] md:w-[700px] rounded-md"
					></video>
					<center>
						<button
							className="text-danger flex gap-3 items-center"
							onClick={() => {
								onChange({ video_url: null })
							}}
						>
							<HiTrash /> Remove
						</button>
					</center>
				</div>
			)}
			<NextButtonContainer>
				<button
					onClick={next}
					className={classNames(
						' text-white bg-dark rounded-md font-bold w-[90vw] md:w-[400px] py-3'
					)}
				>
					Continue
				</button>
			</NextButtonContainer>
		</>
	)
}
