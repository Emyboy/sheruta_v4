'use client'
import { setAuthState } from '@/redux/features/auth.slice'
import { setOptionState } from '@/redux/features/option.slice'
import { setViewState } from '@/redux/features/view.slice'
import { setWalletState } from '@/redux/features/wallet.slice'
import { UserInfoService } from '@/services/user-info.service'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function MasterControl() {
	const dispatch = useDispatch()

	let getAppDependencies = async () => {
		try {
			let authDep = await UserInfoService.getAppDependencies()
            let data = await authDep.data
            dispatch(
                setOptionState({
                    ...data
                })
            )
		} catch (error) {
			return Promise.reject(error)
		}
	}

	let getAuthDependencies = async () => {
		try {
			let authToken = Cookies.get('sheruta_auth')
			if (authToken) {
				let appDep = await UserInfoService.getAuthDependencies()
				let userData = await UserInfoService.getAuthData()
				let { user_info, email_setting, wallet } = await appDep.data
				
				dispatch(
					setAuthState({
						user: userData.data,
						user_info,
						email_setting,
					})
				)
				dispatch(
					setWalletState({
						wallet,
					})
				)
			} else {
				return Promise.resolve()
			}
		} catch (error) {
			return Promise.reject(error)
		}
	}

	let getDependencies = async () => {
		try {
			dispatch(setViewState({ app_loading: true }))
			await getAppDependencies()
			await getAuthDependencies()
			dispatch(setViewState({ app_loading: false }))
		} catch (error) {
			getDependencies()
			return Promise.reject(error)
		}
	}

	useEffect(() => {
		getDependencies()
	}, [])

	return <></>
}
