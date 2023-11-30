import React from 'react'
import { HiCheckCircle, HiInformationCircle } from 'react-icons/hi2'
import _Button from '@/packages/ui/SButton'
import Link from 'next/link'
import AuthLayout from '@/components/Layouts/AuthLayout/AuthLayout'
import axios from 'axios'
import { backend_url } from '@/constants/app.constrant'
import { redirect } from 'next/navigation'

export default async function page({ params }: any) {
	let { confirmation_token } = params

	try {
		let result = await axios(backend_url + `/user-info/verify/email`, {
			method: 'POST',
			data: {
				confirmationToken: confirmation_token,
			},
		})
	} catch (error: any) {
		console.log('CONFIRM ERROR:::', error)
		if (error?.response?.status === 404) {
			redirect('/')
		} else {
			return (
				<AuthLayout backgroundURL="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80">
					<div className="flex flex-col gap-[60px]">
						<div className="flex flex-col gap-5">
							<center className="text-danger">
								<HiInformationCircle size={90} />
							</center>
							<div className="flex flex-col items-center text-center">
								<h5 className="text-xl font-bold">
									Verification Error!
								</h5>
								<p className="text-sm text-dark_lighter">
									Please try again, or try to login instead.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-3">
							{/* <p>Didn’t receive any email? </p> */}

							<Link href={'/login'} className="font-bold text-theme">
								Login
							</Link>
						</div>
					</div>
				</AuthLayout>
			)
		}
	}

	return (
		<AuthLayout backgroundURL="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80">
			<div className="flex flex-col gap-[60px]">
				<div className="flex flex-col gap-5">
					<center className="text-theme">
						<HiCheckCircle size={90} />
					</center>
					<div className="flex flex-col items-center text-center">
						<h5 className="text-xl font-bold">Your email has been verified.</h5>
						<p className="text-sm text-dark_lighter">
							Click on the button bellow to login
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center gap-3">
					{/* <p>Didn’t receive any email? </p> */}

					<Link href={'/login'} className="font-bold text-theme">
						Login
					</Link>
				</div>
			</div>
		</AuthLayout>
	)
}
