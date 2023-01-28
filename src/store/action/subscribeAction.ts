import { AppDispatch } from '../store'
import baseURL from '../../API/baseURL'
import { AxiosError } from 'axios'
import { ISubscribe } from '../../interface/interfaces'
import { subscribeSlice } from '../slice/subscribeSlice'

export const postSubscribe = (data: ISubscribe) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(subscribeSlice.actions.getSubscribeLoad())
			const response = await baseURL.post('subscribe', data)
			dispatch(subscribeSlice.actions.postSubscribe(response.data))
		} catch (err) {
			dispatch(
				subscribeSlice.actions.getSubscribeError(err as AxiosError<Error>)
			)
		}
	}
}

export const getSubscribe = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(subscribeSlice.actions.getSubscribeLoad())
			const response = await baseURL.get<Array<ISubscribe>>('subscribe')
			dispatch(subscribeSlice.actions.getSubscribes(response.data))
		} catch (err) {
			dispatch(
				subscribeSlice.actions.getSubscribeError(err as AxiosError<Error>)
			)
		}
	}
}

export const deleteSubscribe = (url: string[]) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(subscribeSlice.actions.getSubscribeLoad())
			const response = await baseURL.delete<ISubscribe>(`subscribe/${url}`)
			dispatch(subscribeSlice.actions.deleteSubscribe(response.data))
		} catch (err) {
			dispatch(
				subscribeSlice.actions.getSubscribeError(err as AxiosError<Error>)
			)
		}
	}
}
