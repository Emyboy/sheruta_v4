import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EmailSettings, PersonalInfo, User } from '@/interface/auth.interface'

// Define a type for the slice state
interface AuthState {
	user: User | null
	personal_info: PersonalInfo | null
	email_settings: EmailSettings | null
}

// Define the initial state using that type
const initialState: AuthState = {
	user: null,
	personal_info: null,
	email_settings: null,
}

export const authSlice = createSlice({
	name: 'auth',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setAuthState: (state, action: PayloadAction) => {
			return action.payload
		},
	},
})

export const { setAuthState } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer
