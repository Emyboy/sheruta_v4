import React from 'react'
import dynamic from 'next/dynamic'
const _Modal = dynamic(() => import('@/packages/ui/_Modal'))
import LoginForm from '../Pages/Authentication/LoginForm'

type Props = {}

export default function LoginPopup({}: Props) {
  return (
    <_Modal size='lg' show>
        <LoginForm />
    </_Modal>
  )
}
