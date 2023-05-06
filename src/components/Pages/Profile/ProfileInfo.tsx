import React from 'react'

type Props = {}

export default function ProfileInfo({}: Props) {
	return (
		<section className="flex flex-col gap-2">
			<h6 className='text-lg'>Additional Information</h6>
			<div className="flex flex-wrap gap-4 md:gap-4 justify-between">
				{new Array(8).fill(null).map((val) => {
					return <EachInfo />
				})}
			</div>
		</section>
	)
}

const EachInfo = () => {
	return (
		<div className="flex flex-col">
			<h6 className="fw-bold">Preferred Location</h6>
			<h6 className="text-dark_lighter font-light">Lekki, Phase 1</h6>
		</div>
	)
}
