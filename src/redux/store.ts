import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './features/auth.slice'
import viewSlice from './features/view.slice'
import messageSlice from './features/message.slice'

import {
	Action,
	combineReducers,
	configureStore,
	ThunkAction,
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from './services/auth.service'
import { userInfoApi } from './services/user-info.service'
import walletSlice from './features/wallet.slice'
import uploadSlice from './features/upload.slice'
import optionSlice from './features/option.slice'
import { requestApi } from './services/request.service'

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	auth: authSlice,
	message: messageSlice,
	wallet: walletSlice,
	option: optionSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store: any = configureStore({
	reducer: {
		app: persistedReducer,
		view: viewSlice,
		// upload: uploadReducer,
		// category: categoryReducer,
		[authApi.reducerPath]: authApi.reducer,
		[userInfoApi.reducerPath]: userInfoApi.reducer,
		[requestApi.reducerPath]: requestApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat([authApi.middleware, userInfoApi.middleware, requestApi.middleware]),
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export const persistor = persistStore(store)
