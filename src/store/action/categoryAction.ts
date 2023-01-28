import { AxiosError } from 'axios';
import { AppDispatch } from '../store'
import baseURL from '../../API/baseURL'
import { ICategory } from '../../interface/interfaces'
import { categorySlice } from '../slice/categorySlice'


export const getCategory = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(categorySlice.actions.getCategoryLoad())
			const response = await baseURL.get<Array<ICategory>>('categories')
			dispatch(categorySlice.actions.getCategory(response.data))
		} catch (err) {
			dispatch(categorySlice.actions.getCategoryError(err as AxiosError<Error>))
		}
	}
}

export const postCategory = (data: ICategory) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(categorySlice.actions.getCategoryLoad())
			const response = await baseURL.post('categories', data)
			dispatch(categorySlice.actions.getCategory(response.data))
		} catch (err) {
			dispatch(categorySlice.actions.getCategoryError(err as AxiosError<Error>))
		}
	}
}

export const deleteCategory = (url: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(categorySlice.actions.getCategoryLoad())
			const response = await baseURL.delete(`categories/${url}`)
			dispatch(categorySlice.actions.deleteCategory(response.data))
		} catch (err) {
			dispatch(categorySlice.actions.getCategoryError(err as AxiosError<Error>))
		}
	}
}
