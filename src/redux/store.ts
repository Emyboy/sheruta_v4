import { configureStore } from '@reduxjs/toolkit'
import viewSlice from './features/view.slice'
import authSlice from './features/auth.slice'

export const store = configureStore({
	reducer: {
        view: viewSlice,
        auth: authSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
