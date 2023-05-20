'use client'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppStore } from '@/interface/index.interface'
import MainLeftNav from './MainLeftNav'
import { setViewState } from '@/redux/features/view.slice'


export default ({ leftComponent }: { leftComponent: any }) => {
	const { show_left_panel } = useSelector((state: AppStore) => state.view)
	const dispatch = useDispatch()

	useEffect(() => {
		if(window && window.innerWidth > 500){
			dispatch(setViewState({ show_left_panel: true }))
		}else {
			dispatch(setViewState({ show_left_panel: false }))
		}
		console.log(window.innerWidth)
	},[])

	return (
		<>
			<aside
				className="border-r border-1  md:w-1/3 justify-end md:z-0 md:relative md:min-h-fit lg:flex  || bg-white min-h-screen bg-red-100- fixed w-72 z-50"
				style={{ left: show_left_panel ? 0 : -500,  }}
			>
				<div className="bg-green-100- md:fixed  h-96 w-ful md:w-60">
					{leftComponent || <MainLeftNav />}
				</div>
			</aside>
			{show_left_panel && (
				<div
					className="visible md:hidden fixed w-screen h-screen bg-dark_transparent animate__animated animate__fadeIn animate__faster"
					onClick={() => dispatch(setViewState({ show_left_panel: false }))}
				/>
			)}
		</>
	)
}
