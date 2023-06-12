import React, { useState } from 'react'
import _FormInputGroup from '@/packages/ui/_FormInputGroup'
import {
	HiOutlineEnvelope,
	HiOutlineEye,
	HiOutlineEyeSlash,
	HiOutlineLockClosed,
	HiOutlinePhone,
	HiOutlineUser,
} from 'react-icons/hi2'
import Link from 'next/link'
import _Button from '@/packages/ui/_Button'

type Props = {}

export default function LoginForm({}: Props) {
	const [show, setShow] = useState(false)
	const [loading, setLoading] = useState(false)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [first_name, setFirstName] = useState('')
	const [last_name, setLastName] = useState('')
	const [phone_number, setPhoneNumber] = useState<number>()

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const data = {
				email,
				password,
				first_name,
				last_name,
				phone_number
			}
			console.log(data)
		} catch (error) {
			return Promise.reject(error)
		}
	}

	return (
		<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
			<div className="flex flex-col gap-1">
				<h1 className="text-lg font-semibold">Register your Account </h1>
				<p className="text-sm text-dark_lighter">
					Join the community and find your Paddy
				</p>
			</div>

			<_FormInputGroup
				required
				name="first_name"
				id="first_name"
				placeholder="John"
				label="First Name"
				onChange={(e) =>
					setFirstName(e.target.value.toLowerCase().split(' ')[0].trim())
				}
				leftAddon={<HiOutlineUser size={20} />}
			/>

			<_FormInputGroup
				required
				name="last_name"
				id="last_name"
				placeholder="Doe"
				label="Last Name"
				onChange={(e) =>
					setLastName(e.target.value.toLowerCase().split(' ')[0].trim())
				}
				leftAddon={<HiOutlineUser size={20} />}
			/>
			<_FormInputGroup
				required
				placeholder="JohnDoe@mail.com"
				label="Email"
				onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
				name="email"
				id="email"
				leftAddon={<HiOutlineEnvelope size={20} />}
			/>
			<_FormInputGroup
				required
				placeholder="+234 12345...."
				label="Phone Number"
				type="number"
				name="phone_number"
				id="phone_number"
				onChange={(e) => setPhoneNumber(parseInt(e.target.value.trim()))}
				leftAddon={<HiOutlinePhone size={20} />}
			/>
			<_FormInputGroup
				required
				placeholder="* * * * * * *"
				label="Password"
				name="password"
				id="password"
				type={show ? 'text' : 'password'}
				onChange={(e) => setPassword(e.target.value)}
				rightAddon={
					<span onClick={() => setShow(!show)} className="cursor-pointer">
						{show ? (
							<HiOutlineEyeSlash size={20} />
						) : (
							<HiOutlineEye size={20} />
						)}
					</span>
				}
				leftAddon={<HiOutlineLockClosed size={20} />}
			/>
			<_Button isLoading={loading}>
				Register
			</_Button>
			<p className="text-xs text-dark_lighter">
				Already have an account?{' '}
				<Link href={`/login`} className="text-theme font-bold">
					Login
				</Link>
			</p>
		</form>
	)
}
