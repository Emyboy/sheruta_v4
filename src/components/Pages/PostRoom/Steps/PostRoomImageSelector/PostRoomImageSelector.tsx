import React, { useState, useEffect } from 'react'
import { EachStepProps } from '../../PostRoom'
import classNames from 'classnames'
import NextButtonContainer from '../../NextButtonContainer'
import ImageSelector, { ImageSelectorData } from './ImageSelector'
import SelectedImage from './SelectedImage'

export default function PostRoomImageSelector({ next, onChange, roomRequestData }: EachStepProps) {
	const [selectedImages, setSelectedImages] = useState<ImageSelectorData[]>(
		roomRequestData?.image_urls ? roomRequestData?.image_urls : []
	)
	const isReady = selectedImages.length >= 4

	useEffect(() => {
		onChange({ image_urls: selectedImages })
	}, [selectedImages])
	
	return (
		<>
			<div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
				{selectedImages.map((src) => {
					return (
						<SelectedImage
							key={src?.id}
							data={src}
							removeImage={() => {
								let data = selectedImages.filter((img) => img?.id !== src?.id)
								setSelectedImages(data)
							}}
						/>
					)
				})}
				<ImageSelector
					onChange={(e) => {
						setSelectedImages([...selectedImages, ...e])
					}}
				/>
			</div>
			<NextButtonContainer>
				<button
					disabled={!isReady}
					onClick={next}
					className={classNames(
						' text-white rounded-md font-bold w-full md:w-[400px] py-3',
						{ 'bg-dark': isReady },
						{ 'bg-muted': !isReady }
					)}
				>
					Continue
				</button>
			</NextButtonContainer>
		</>
	)
}

export const Container = ({ children }: any) => {
	return (
		<div className="h-[200px] md:w-[200px] w-[90vw] cursor-pointer hover:shadow-lg rounded-md overflow-hidden relative">
			{children}
		</div>
	)
}
