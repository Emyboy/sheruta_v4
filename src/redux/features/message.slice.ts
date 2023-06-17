import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface messageState {
	show_messaging: boolean
	active_conversation: string | null
}

const initialState: messageState = {
	show_messaging: false,
	active_conversation: null,
}

export const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		setMessagingState: (state: any, action: PayloadAction<any>): any => {
			return { ...state, ...action.payload }
		},
	},
})

export const { setMessagingState } = messageSlice.actions

export default messageSlice.reducer
