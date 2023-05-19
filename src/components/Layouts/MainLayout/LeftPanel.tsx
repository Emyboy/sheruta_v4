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
				className="border-r border-1 z-50 md:z-0 justify-end lg:flex  bg-white md:bg-none  md:h-auto h-screen w-72 shadow-lg md:shadow-none md:w-1/3"
				style={{ left: show_left_panel ? 0 : -500,  }}
			>
				<div className="bg-green-100- fixed  h-96 w-60">
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
