import React from 'react'
import _FormInputGroup from '@/packages/ui/_FormInputGroup'
import { HiOutlineEnvelope, HiOutlineKey } from 'react-icons/hi2'
import Link from 'next/link'

type Props = {}

export default function LoginForm({}: Props) {
	return (
		<form className="flex flex-col gap-5">
			<div className="flex flex-col gap-1">
				<h1 className="text-lg font-semibold">Login To your Account </h1>
				<p className="text-sm text-dark_lighter">
					Login to the community and find your roommate.
				</p>
			</div>
			<_FormInputGroup
				placeholder="JohnDoe@mail.com"
				label="Email"
				onChange={(e) => console.log(e.target.value)}
				name="email"
				leftAddon={<HiOutlineEnvelope size={20} />}
			/>
			<_FormInputGroup
				placeholder="* * * * * * *"
				label="Password"
				onChange={(e) => console.log(e.target.value)}
				name="password"
				type="password"
				leftAddon={<HiOutlineKey size={20} />}
			/>
			<div className="flex items-center">
				<input
					id="default-checkbox"
					type="checkbox"
					value=""
					className="w-4 h-4 text-theme bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					htmlFor="default-checkbox"
					className="ml-2 text-sm  text-dark_lighter"
				>
					Remember Me
				</label>
			</div>
			<button className="bg-theme text-white rounded-md px-2 py-3 w-full hover:bg-theme_light">
				Login
			</button>
			<span className="text-sm">
				{`Don't have an account?`}{' '}
				<Link href={`/register`} className="text-theme">
					Register
				</Link>{' '}
			</span>
		</form>
	)
}
