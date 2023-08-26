import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Wallet } from '@/interface/Wallet.interface'

// Define a type for the slice state
export interface UploadState {
	type: 'private-room' | 'shared-room' | 'entire-space' | null
}

// Define the initial state using that type
const initialState: UploadState = {
	type: null,
}

export const uploadSlice = createSlice({
	name: 'upload',
	initialState,
	reducers: {
		setUploadState: (state, action: PayloadAction<any>) => {
			return { ...state, ...action.payload }
		},
		
	},
})

export const { setUploadState } = uploadSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default uploadSlice.reducer
