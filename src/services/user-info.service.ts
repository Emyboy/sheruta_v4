import { APICall } from './index.service'

export class UserInfoService {
	static async getAuthDependencies() {
		try {
			let result = await APICall({
				isAuth: true,
				path: `/user-info/auth/dependencies`,
				options: { method: 'GET' },
			})
			return result
		} catch (error) {
			return Promise.reject(error)
		}
	}

	static async getAuthData() {
		try {
			let result = await APICall({
				isAuth: true,
				path: `/users/me`,
				options: { method: 'GET' },
			})
			return result
		} catch (error) {
			return Promise.reject(error)
		}
	}

	static async getAppDependencies() {
		try {
			let result = await APICall({
				isAuth: false,
				path: `/user-info/app/dependencies`,
				options: { method: 'GET' },
			})
			return result
		} catch (error) {
			return Promise.reject(error)
		}
	}
}
