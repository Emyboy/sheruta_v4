import { configureStore } from '@reduxjs/toolkit'
import viewSlice from './features/view.slice'
import authSlice from './features/auth.slice'
import { authAPI } from './services/auth.service'

export const store = configureStore({
	reducer: {
		view: viewSlice,
		auth: authSlice,
		[authAPI.reducerPath]: authAPI.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
