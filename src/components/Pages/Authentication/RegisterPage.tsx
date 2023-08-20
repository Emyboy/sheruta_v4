'use client'
import React, { useState } from 'react'
import RegisterForm, { NewUser } from './SignupForm'
import VerifyEmail from './VerifyEmail'

export default function RegisterPage() {
	const [newUser, setNewUser] = useState<NewUser | null>(null)
	return (
		<div className="px-4 flex justify-center my-10">
			{newUser ? (
				<VerifyEmail newUser={newUser} />
			) : (
				<RegisterForm onRegister={(data) => setNewUser(data)} />
			)}
		</div>
	)
}
