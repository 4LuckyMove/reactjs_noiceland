import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategory } from '../../interface/interfaces'
import { AxiosError } from 'axios'

interface CategoryState {
	isLoadCategory: boolean
	isErrorCategory: AxiosError<Error> | null
	category: ICategory[]
}

const initialState: CategoryState = {
	isLoadCategory: false,
	isErrorCategory: null,
	category: [],
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		getCategoryLoad(state) {
			state.isLoadCategory = true
		},
		getCategory(state, action: PayloadAction<ICategory[]>) {
			state.isLoadCategory = false
			state.category = action.payload
			state.isErrorCategory = null
		},
		getCategoryError(state, action: PayloadAction<AxiosError<Error>>) {
			state.isLoadCategory = false
			state.isErrorCategory = action.payload
		},
		postCategory(state, action: PayloadAction<ICategory>) {
			state.isLoadCategory = false
			state.category.push(action.payload)
			state.isErrorCategory = null
		},
		deleteCategory(state, action: PayloadAction<ICategory>) {
			state.isLoadCategory = false
			state.category = state.category.filter(
				category => category.id !== action.payload.id
			)
			state.isErrorCategory = null
		},
	},
})

export default categorySlice.reducer
