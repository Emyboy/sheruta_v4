import React from 'react'
import { Container } from './PostRoomImageSelector'
import { HiOutlineTrash } from 'react-icons/hi2'
import { ImageSelectorData } from './ImageSelector'

interface SelectedImage {
	removeImage: () => void
	data: ImageSelectorData
}

function SelectedImage({ data, removeImage }: SelectedImage) {
	let src;

	if (data.url instanceof Blob) {
		src = URL.createObjectURL(data.url)
	} else {
		src = data.url
	}

	return (
		<Container>
			<div
				className="p-2 text-muted rounded-md shadow-md bg-white absolute left-2 top-2 z-10 "
				onClick={removeImage}
			>
				<HiOutlineTrash size={20} />
			</div>
			<div
				className="h-full w-full relative bg-img animate__animated animate__fadeInDown animate__faster"
				style={{
					backgroundImage: `url(${src})`,
				}}
			/>
		</Container>
	)
}

export default React.memo(SelectedImage)
