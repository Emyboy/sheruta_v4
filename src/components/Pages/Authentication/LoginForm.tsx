'use client'
import React, { useState, useEffect } from 'react'
import _FormInputGroup from '@/packages/ui/SFormInputGroup'
import { HiOutlineEnvelope, HiOutlineKey } from 'react-icons/hi2'
import Link from 'next/link'
import { useLoginMutation } from '@/redux/services/auth.service'
import _Button from '@/packages/ui/SButton'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setAuthState } from '@/redux/features/auth.slice'
import { useRouter } from 'next/navigation'
import VerifyEmail from './VerifyEmail'
import { NewUser } from './SignupForm'
import { UserInfoService } from '@/services/user-info.service'
import SSpinner from '@/packages/ui/SSpinner'
import { setWalletState } from '@/redux/features/wallet.slice'

type Props = {}

export default function LoginForm({}: Props) {
	const [identifier, setIdentifier] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()
	const dispatch = useDispatch()
	const [loginUser, { isLoading, error }] = useLoginMutation()
	const [verify, setVerify] = useState(false)
	const [newUser, setNewUser] = useState<NewUser | null>(null)
	const [loading, setLoading] = useState(false)

	let getAuthDependencies = async (user: any) => {
		try {
			setLoading(true)
			let dep = await UserInfoService.getAuthDependencies()
			let { user_info, email_setting, wallet } = await dep.data

			dispatch(
				setAuthState({
					user,
					user_info,
					email_setting,
				})
			)
			dispatch(
				setWalletState({
					wallet,
				})
			)
			router.push('/')
		} catch (error) {
			getAuthDependencies(user)
		}
	}

	let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		let data = {
			identifier: identifier.toLowerCase().trim(),
			password: password.trim(),
		}
		let res: any = await loginUser(data)
		if ('data' in res) {
			setNewUser(res.data)
			if (!res.data.user.confirmed) {
				setVerify(true)
			} else {
				const { user, jwt } = res.data
				Cookies.set('sheruta_auth', jwt)

				await getAuthDependencies(user)
			}
		}
	}

	useEffect(() => {
		if (error) {
			let err: any = error
			toast.error(
				err?.data?.error?.message?.replace('or Username', ' ') ||
					'Error, please try again'
			)
		}
	}, [error])

	if (verify && newUser) {
		return <VerifyEmail newUser={newUser} count={1} />
	}

	if (loading) {
		return (
			<center>
				<SSpinner size={30} />
			</center>
		)
	}

	return (
		<form className="flex flex-col gap-5" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-1">
				<h1 className="text-lg font-semibold">Login To your Account </h1>
				<p className="text-sm text-dark_lighter">
					Login to the community and find your roommate.
				</p>
			</div>
			<_FormInputGroup
				placeholder="JohnDoe@mail.com"
				label="Email"
				onChange={(e) => setIdentifier(e.target.value)}
				name="email"
				leftAddon={<HiOutlineEnvelope size={20} />}
			/>
			<_FormInputGroup
				placeholder="* * * * * * *"
				label="Password"
				onChange={(e) => setPassword(e.target.value)}
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
			<_Button
				className="bg-theme text-white rounded-md px-2 py-3 w-full hover:bg-theme_light"
				isLoading={isLoading}
			>
				Login
			</_Button>
			<span className="text-sm">
				{`Don't have an account?`}{' '}
				<Link href={`/register`} className="text-theme">
					Register
				</Link>{' '}
			</span>
		</form>
	)
}
