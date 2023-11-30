import { backend_url } from '@/constants/app.constrant'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const requestApi = createApi({
	reducerPath: 'requestApi',
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
		requestAtRoom: builder.mutation<any, { data: any }>({
			query: (data) => ({
				url: `/room-request/request/flat`,
				method: 'POST', 
				body: data, 
			}),
		}),
	}),
})

export const {  } = requestApi
