import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EmailSettings, PersonalInfo, User } from '@/interface/auth.interface'
import Cookies from 'js-cookie'

// Define a type for the slice state
export interface AuthState {
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
	initialState,
	reducers: {
		setAuthState: (state, action: PayloadAction<any>) => {
			return { ...state, ...action.payload }
		},
		logout: () => {
			localStorage.clear();
			sessionStorage.clear();
			Cookies.remove('sheruta_auth')
			// return {...initialState}
		}
	},
})

export const { setAuthState, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default authSlice.reducer
