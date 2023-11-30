export const fileToBlob = (file: File): Promise<Blob> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = () => {
			if (reader.result instanceof ArrayBuffer) {
				const blob = new Blob([reader.result], { type: file.type })
				resolve(blob)
			} else {
				reject(new Error('Failed to convert file to Blob.'))
			}
		}

		reader.onerror = (error) => {
			reject(error)
		}

		reader.readAsArrayBuffer(file)
	})
}
