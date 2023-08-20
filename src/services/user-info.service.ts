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
			this.getAuthDependencies()
			return Promise.reject(error)
		}
	}
}
