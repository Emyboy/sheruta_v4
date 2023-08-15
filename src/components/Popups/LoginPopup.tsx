'use client'
import React from 'react'
import dynamic from 'next/dynamic'
// const _Modal = dynamic(() => import('@/packages/ui/_Modal'))
import _Modal from '@/packages/ui/_Modal'
import LoginForm from '../Pages/Authentication/LoginForm'
import { useSelector } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import { useDispatch } from 'react-redux'
import { setViewState } from '@/redux/features/view.slice'

type Props = {}

export default function LoginPopup({}: Props) {
	const { show_login } = useSelector((state: AppStore) => state.view)
	const dispatch = useDispatch()
	return (
		<_Modal
			size="lg"
			show={show_login}
			onClose={() => dispatch(setViewState({ show_login: false }))}
		>
			<LoginForm />
		</_Modal>
	)
}
