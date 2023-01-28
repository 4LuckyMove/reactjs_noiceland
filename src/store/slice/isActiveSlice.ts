import { createSlice } from '@reduxjs/toolkit'

interface ActiveState {
	isShowBurger: boolean
	isShowModal: boolean
}

const initialState: ActiveState = {
	isShowBurger: false,
	isShowModal: false,
}

export const activeSlice = createSlice({
	name: 'isActive',
	initialState,
	reducers: {
		isOpenAndCloseBurger(state) {
			state.isShowBurger = !state.isShowBurger
		},
		isOpenBurger(state) {
			state.isShowBurger = true
		},
		isCloseBurger(state) {
			state.isShowBurger = false
		},
		isOpenModal(state) {
			state.isShowModal = true
		},
		isCloseModal(state) {
			state.isShowModal = false
		},
	},
})

export const {
	isOpenAndCloseBurger,
	isOpenBurger,
	isCloseBurger,
	isOpenModal,
	isCloseModal,
} = activeSlice.actions
export default activeSlice.reducer
