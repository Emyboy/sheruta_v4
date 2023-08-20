import { AuthState } from '@/redux/features/auth.slice'
import { messageState } from '@/redux/features/message.slice'
import { ViewState } from '@/redux/features/view.slice'
import { WalletState } from '@/redux/features/wallet.slice'

export interface AppStore {
	view: ViewState
	app: {
		auth: AuthState
		message: messageState
		wallet: WalletState
	}
}
