import { backend_url } from '@/constants/app.constrant'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: backend_url }),
	tagTypes: ['Auth'],
	endpoints: (builder) => ({
		register: builder.mutation<any, any>({
			query: (body) => ({
				url: `/auth/local/register`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			}),
			invalidatesTags: ['Auth'],
		}),
		resendVerificationEmail: builder.mutation<any, any>({
			query: (body) => ({
				url: `/user-info/verify/email/resend`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			}),
			invalidatesTags: ['Auth'],
		}),
		login: builder.mutation<any, any>({
			query: (body) => ({
				url: `/auth/local`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: body,
			}),
			invalidatesTags: ['Auth'],
		}),
	}),
})

export const {
	useRegisterMutation,
	useResendVerificationEmailMutation,
	useLoginMutation
} = authApi
