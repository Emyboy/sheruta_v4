import React, { useEffect, useState } from 'react'
import { NewUser } from './SignupForm'
import { HiCheckCircle } from 'react-icons/hi2'
import _Button from '@/packages/ui/SButton'
import { useResendVerificationEmailMutation } from '@/redux/services/auth.service'
import toast from 'react-hot-toast'

type Props = {
	newUser: NewUser,
	count?: number
}

export default function VerifyEmail({newUser, count}: Props) {
    const number =
			process.env.NODE_ENV !== 'production' ? count || 5 : count || 30
	const [countdown, setCountdown] = useState(number)
    const [resendEmail, {isLoading, error,}] = useResendVerificationEmailMutation()

	useEffect(() => {
		if (countdown > 0) {
			const timer = setTimeout(() => {
				setCountdown(countdown - 1)
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [countdown])

    const sendEmail = async () => {
        const res:any = await resendEmail({ email: newUser.user.email})
        if('data' in res){
            setCountdown(30)
            toast.success("Email has been sent")
        }
    }

	useEffect(() => {
		if(error){
			toast.error("Error, please try again")
		}
	},[error])

	return (
		<div className="flex flex-col gap-[60px]">
			<div className="flex flex-col gap-5">
				<center className="text-theme">
					<HiCheckCircle size={90} />
				</center>
				<div className="flex flex-col items-center text-center">
					<h5 className="text-xl font-bold">Kindly check your email.</h5>
					<p className="text-sm text-dark_lighter">
						We have sent you an email, kindly click on the
						<br /> link to verify your email.
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center gap-3">
				<p>Didn’t receive any email? </p>
				{countdown > 0 ? (
					<div className="flex gap-3">
						<span className="bg-gray-200 rounded-lg px-3 py-1 text-sm">
							<i>Wait for </i>
							{countdown} seconds
						</span>{' '}
					</div>
				) : (
					<_Button variant="dark" onClick={sendEmail} isLoading={isLoading}>Resend Link</_Button>
				)}
			</div>
		</div>
	)
}
