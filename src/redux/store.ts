import { configureStore } from '@reduxjs/toolkit'
import viewSlice from './features/view.slice'
import authSlice from './features/auth.slice'
import messageSlice from './features/message.slice'

export const store = configureStore({
	reducer: {
		view: viewSlice,
		auth: authSlice,
		message: messageSlice
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
