import { User } from '@/interface/auth.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'





export const authAPI = createApi({
	reducerPath: 'auth_api',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.PUBLIC_NEXT_API_URL }),
	endpoints: (builder) => ({
		registerUser: builder.mutation<User, Partial<User>>({
			query: (data) => ({
				url: '/auth/local/register',
				method: 'POST',
				body: data,
			}),
		}),
	}),
})

export const { useRegisterUserMutation } = authAPI
