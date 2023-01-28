import { AxiosError } from 'axios'
import { AppDispatch } from '../store'
import baseURL from '../../API/baseURL'
import { IAuthor } from '../../interface/interfaces'
import { authorSlice } from '../slice/authorSlice'

export const getAuthor = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authorSlice.actions.getAuthorLoad())
			const response = await baseURL.get<Array<IAuthor>>('authors')
			dispatch(authorSlice.actions.getAuthor(response.data))
		} catch (err) {
			dispatch(authorSlice.actions.getAuthorError(err as AxiosError<Error>))
		}
	}
}

export const getIdAuthor = (id: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authorSlice.actions.getAuthorLoad())
			const response = await baseURL.get<IAuthor>(`authors/${id}`)
			dispatch(authorSlice.actions.getIdAuthor(response.data))
		} catch (err) {
			dispatch(authorSlice.actions.getAuthorError(err as AxiosError<Error>))
		}
	}
}

export const postAuthor = (data: IAuthor) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authorSlice.actions.getAuthorLoad())
			const response = await baseURL.post<IAuthor>('authors', data)
			dispatch(authorSlice.actions.postAuthor(response.data))
		} catch (err) {
			dispatch(authorSlice.actions.getAuthorError(err as AxiosError<Error>))
		}
	}
}

export const deleteAuthor = (url: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(authorSlice.actions.getAuthorLoad())
			const response = await baseURL.delete<IAuthor>(`authors/${url}`)
			dispatch(authorSlice.actions.deleteAuthor(response.data))
		} catch (err) {
			dispatch(authorSlice.actions.getAuthorError(err as AxiosError<Error>))
		}
	}
}
