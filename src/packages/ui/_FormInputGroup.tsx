import React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

type Props = {}

export default function _FormInputGroup({}: Props) {
	return (
		<div>
			<label className='text-sm text-dark_lighter'>The Label</label>
			<div className="rounded-md border border-dark_lighter px-2 py-3 flex gap-3 items-center text-dark_lighter">
				<div>
					<HiOutlineUser />
				</div>
				<input className="outline-none bg-none text-sm" placeholder='The Place' />
			</div>
		</div>
	)
}
