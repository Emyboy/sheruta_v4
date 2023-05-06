import React from 'react'

type Props = {}

export default function ProfileAbout({}: Props) {
	return (
		<section className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<h6 className='text-lg'>About Me</h6>
				<p className='text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ex
					sapiente inventore tempore repellendus aliquam corrupti incidunt
					accusamus ducimus quidem tempora ab quod iusto ratione voluptates illo
					nostrum maxime. Tempora.
				</p>
			</div>
			<div className="flex flex-wrap gap-3">
				{new Array(8).fill(null).map((val) => {
					return (
						<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
							Default
						</span>
					)
				})}
			</div>
		</section>
	)
}
