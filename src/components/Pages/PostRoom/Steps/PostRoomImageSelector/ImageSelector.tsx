import React, { useRef } from 'react'
import { Container } from './PostRoomImageSelector'
import { RiImageAddFill } from 'react-icons/ri'
import { generateNumberFromRange } from '@/packages/utils/text.utils'

export type ImageSelectorData = {
	id?: string
	url: Blob | string
	description: string
}
type Props = {
	onChange: (data: ImageSelectorData[]) => void
}

const ImageSelector = ({ onChange }: Props) => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files
		if (selectedFiles) {
			const blobArray: Blob[] = []

			for (let i = 0; i < selectedFiles.length; i++) {
				const file = selectedFiles[i]
				const reader = new FileReader()

				reader.onload = (event: ProgressEvent<FileReader>) => {
					if (event.target && event.target.result) {
						const dataUrl = event.target.result as string
						const byteString = atob(dataUrl.split(',')[1])
						const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0]
						const arrayBuffer = new ArrayBuffer(byteString.length)
						const uint8Array = new Uint8Array(arrayBuffer)

						for (let j = 0; j < byteString.length; j++) {
							uint8Array[j] = byteString.charCodeAt(j)
						}

						const blob = new Blob([arrayBuffer], { type: mimeString })
						blobArray.push(blob)

						if (blobArray.length === selectedFiles.length) {
							onChange(
								blobArray.map((data) => ({
									description: '',
									url: data,
									id: String(generateNumberFromRange(1000, 5000)),
								}))
							)
						}
					}
				}

				setTimeout(() => {
					const selector = document.querySelector('#image-selector')
					if (selector) {
						selector.scrollIntoView({ behavior: 'smooth' })
					}
				}, 100)

				reader.readAsDataURL(file)
			}
		}
	}

	return (
		<Container>
			<label htmlFor="image-input" className="cursor-pointer" id='image-selector'>
				<div className="h-full w-full bg-gray-200 border-dashed border-2 rounded-md border-gray-300 text-gray-300 flex items-center justify-center">
					<RiImageAddFill size={50} className="text-gray-400" />
				</div>
			</label>
			<input
				id="image-input"
				type="file"
				multiple
				accept="image/*"
				ref={inputRef}
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
		</Container>
	)
}

export default ImageSelector
