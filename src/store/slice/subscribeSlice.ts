import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ISubscribe } from '../../interface/interfaces'

interface SubscribeState {
	isLoadSubscribe: boolean
	isErrorSubscribe: AxiosError<Error> | null
	subscribes: ISubscribe[]
}

const initialState: SubscribeState = {
	isLoadSubscribe: false,
	isErrorSubscribe: null,
	subscribes: []
}

export const subscribeSlice = createSlice({
	name: 'subscribe',
	initialState,
	reducers: {
		getSubscribeLoad(state) {
			state.isLoadSubscribe = true
		},
		getSubscribes(state, action: PayloadAction<ISubscribe[]>) {
			state.isLoadSubscribe = false
			state.subscribes = action.payload
			state.isErrorSubscribe = null
		},
		getSubscribeError(state, action: PayloadAction<AxiosError<Error>>) {
			state.isLoadSubscribe = false
			state.isErrorSubscribe = action.payload
		},
		postSubscribe(state, action: PayloadAction<ISubscribe>) {
			state.isLoadSubscribe = false
			state.subscribes.push(action.payload)
			state.isErrorSubscribe = null
		},
		deleteSubscribe(state, action: PayloadAction<ISubscribe>) {
			state.isLoadSubscribe = false
			state.subscribes = state.subscribes.filter(item => item.id !== action.payload.id)
			state.isErrorSubscribe = null
		},
	},
})

export default subscribeSlice.reducer