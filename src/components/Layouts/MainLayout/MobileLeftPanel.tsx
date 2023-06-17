'use client'
import { AppStore } from '@/interface/index.interface'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLeftNav from './MainLeftNav'
import { setViewState } from '@/redux/features/view.slice'

export default function MobileLeftPanel() {
	const { show_left_panel } = useSelector((state: AppStore) => state.view)
	const dispatch = useDispatch()

	return (
		<>
			<div
				style={{
					zIndex: 100,
					width: '75vw',
					height: '100vh',
					left: show_left_panel ? 0 : -500,
				}}
				className="fixed bg-white pt-16 shadow-lg"
			>
				<MainLeftNav />
			</div>
			{show_left_panel && (
				<div
					className="bg-dark_transparent p-20 fixed top-0 left-0 right-0 bottom-0"
					style={{ zIndex: 95 }}
					onClick={() => dispatch(setViewState({ show_left_panel: false }))}
				/>
			)}
		</>
	)
}
