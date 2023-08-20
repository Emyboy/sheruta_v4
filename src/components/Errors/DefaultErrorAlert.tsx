'use client'

import { Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'

type Props = {
    content: any;
}

export default function DefaultErrorAlert({ content}:Props) {
	return (
		<Alert
			additionalContent={content}
			color="danger"
			icon={HiInformationCircle}
		>
			<span>
				<p>
					<span className="font-medium">Info alert!</span>
					Change a few things up and try submitting again.
				</p>
			</span>
		</Alert>
	)
}
