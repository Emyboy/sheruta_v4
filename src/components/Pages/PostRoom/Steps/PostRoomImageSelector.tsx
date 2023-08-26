import React, { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi2'
import { RiImageAddFill } from 'react-icons/ri'
import { EachStepProps } from '../PostRoom'
import classNames from 'classnames'

type ImageDataDTO = {
  url: string,
  description: string
} 

export default function PostRoomImageSelector({next}: EachStepProps) {
	const [selectedImages, setSelectedImages] = useState<ImageDataDTO[]>([])
  const isReady = selectedImages.length < 4;

	return (
		<>
			<div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
				<SelectedImage />
				<SelectedImage />
				<SelectedImage />
				<SelectedImage />
				<SelectedImage />
				{selectedImages.length < 8 && <ImageSelector />}
			</div>
			<button
				// disabled={isReady}
				onClick={next}
				className={classNames(
					' text-white rounded-md font-bold w-[90vw] md:w-[400px] py-3',
					{ 'bg-dark': isReady },
					{ 'bg-muted': !isReady }
				)}
			>
				Continue
			</button>
		</>
	)
}

const ImageSelector = () => {
	return (
		<Container>
			<div className="h-full w-full bg-gray-200 border-dashed border-2 rounded-md border-gray-300 text-gray-300 flex items-center justify-center">
				<RiImageAddFill size={50} className="text-gray-400" />
			</div>
		</Container>
	)
}

const SelectedImage = () => {
	return (
		<Container>
			<div className="p-2 text-muted rounded-md shadow-md bg-white absolute left-2 top-2 z-10">
				<HiOutlineTrash size={20} />
			</div>
			<div
				className="h-full w-full relative bg-img"
				style={{
					backgroundImage: `url(https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)`,
				}}
			/>
		</Container>
	)
}

const Container = ({ children }: any) => {
	return (
		<div className="h-[200px] md:w-[200px] w-[90vw] cursor-pointer hover:shadow-lg rounded-md overflow-hidden relative">
			{children}
		</div>
	)
}
