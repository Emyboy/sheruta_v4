import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Wallet } from '@/interface/Wallet.interface'

// Define a type for the slice state
export interface WalletState {
	wallet: Wallet | null
}

// Define the initial state using that type
const initialState: WalletState = {
	wallet: null,
}

export const walletSlice = createSlice({
	name: 'wallet',
	initialState,
	reducers: {
		setWalletState: (state, action: PayloadAction<any>) => {
			return { ...state, ...action.payload }
		},
		
	},
})

export const { setWalletState } = walletSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default walletSlice.reducer
