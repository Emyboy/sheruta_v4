import React from 'react'
import _FormInputGroup from '@/packages/ui/_FormInputGroup'

type Props = {}

export default function LoginForm({}: Props) {
	return (
		<div className="w-screen lg:w-1/2 flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<h1 className="text-lg font-semibold">Create your Account </h1>
				<p className="text-sm text-dark_lighter">
					Join the community and find your Paddy
				</p>
			</div>
			<form className="flex flex-col gap-3">
				<_FormInputGroup />
				<_FormInputGroup />
				<_FormInputGroup />
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
				<button className="bg-theme text-white rounded-md p-2 w-full hover:bg-theme_light">
					Login
				</button>
			</form>
		</div>
	)
}
