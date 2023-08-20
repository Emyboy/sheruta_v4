import { backend_url } from '@/constants/app.constrant'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const userInfoApi = createApi({
	reducerPath: 'userInfoApi',
	baseQuery: fetchBaseQuery({
		baseUrl: backend_url,
		prepareHeaders: (headers, { getState }) => {
			const token = Cookies.get('sheruta_auth')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['UserInfo'],
	endpoints: (builder) => ({
		getAuthDependencies: builder.query<any, any>({
			query: () => ({
				url: `/user-info/auth/dependencies`,
				method: 'GET',
			}),
			providesTags: ['UserInfo'],
		}),
	}),
})

export const { useGetAuthDependenciesQuery } = userInfoApi
