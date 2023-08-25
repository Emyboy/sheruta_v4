import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ViewState {
	show_login: boolean
	show_left_panel: boolean
	show_upload_menu: boolean
}

const initialState: ViewState = {
	show_login: false,
	show_left_panel: false,
	show_upload_menu: false,
}

export const viewSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		setViewState: (state: any, action: PayloadAction<any>): any => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setViewState } = viewSlice.actions

export default viewSlice.reducer
