import classNames from 'classnames'
import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

type Props = {
	children: any
	navHeading?: string
	heading: string
	subHeading: string
	currentIndex: number
	length: number
	back: () => void
}

export default function UploadRequestLayout({
	children,
	currentIndex,
	length,
	navHeading,
	back,
	heading,
	subHeading,
}: Props) {
	const progressPercentage = (currentIndex / (length - 1)) * 100

	return (
		<form className="min-h-screen flex flex-col" onSubmit={(e) => e.preventDefault()}>
			<div className="flex flex-col fixed md:relative left-0 right-0 z-50">
				<div className="h-[60px] border w-full flex-row justify-between items-center md:px-8 px-2  flex bg-white ">
					<span
						className="flex gap-3 items-center text-dark_lighter cursor-pointer"
						onClick={back}
					>
						<HiArrowLongLeft size={26} />
						<p className="font-bold md:text-lg text-xs text-muted">
							{currentIndex === 0 ? 'Exit' : 'Go Back'}
						</p>
					</span>
					<div className="flex items-center gap-3">
						<span className="bg-muted_light text-muted font-bold rounded-md p-1">
							{currentIndex + 1}/{length}
						</span>
						{navHeading && (
							<p className="font-bold md:text-lg text-xs hidden md:block">
								{navHeading}
							</p>
						)}
					</div>
					<span
						className={classNames(
							'flex gap-3 items-center  cursor-pointer',
							{ 'text-muted': currentIndex > 0 },
							{ 'text-gray-200': currentIndex === 0 }
						)}
					>
						<p className="font-bold md:text-lg text-xs">Forward</p>
						<HiArrowLongRight size={26} />
					</span>
				</div>
				<div className="h-1 w-full bg-green-100">
					<div
						className={`h-full bg-theme_light`}
						style={{ width: `${progressPercentage}%` }}
					></div>
				</div>
			</div>
			<div className="bg-gray-100 flex-1 flex flex-col justify-center items-center py-[15vh] lg:py-5 gap-[100px]">
				<div className="flex flex-col items-center gap-3 w-[90vw] md:w-[460px]">
					<h2 className="text-[27px] font-bold capitalize text-center">{heading}</h2>
					<p className="text-muted  text-center">{subHeading}</p>
				</div>
				{children}
			</div>
		</form>
	)
}
