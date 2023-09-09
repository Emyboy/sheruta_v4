import { backend_url } from '@/constants/app.constrant'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

export let APICall = ({
	path,
	options,
	isAuth,
}: {
	path: string
	options: AxiosRequestConfig
	isAuth?: boolean
}): Promise<AxiosResponse> => {
	// console.log('API CALL::', backend_url+path)
	return axios(backend_url + path, {
		...options,
		headers: isAuth
			? {
					authorization: `Bearer ${Cookies.get('sheruta_auth')}`,
			  }
			: {},
	})
}
