import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ViewState {
	show_login: boolean
	show_left_panel: boolean
}

const initialState: ViewState = {
	show_login: false,
	show_left_panel: false,
}

export const viewSlice = createSlice({
	name: 'view',
	initialState,
	reducers: {
		setViewState: (state: any, action: PayloadAction<any>): any => {
			return action.payload
		},
	},
})

export const { setViewState } = viewSlice.actions

export default viewSlice.reducer
