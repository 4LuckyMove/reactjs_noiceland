import { AppDispatch } from '../store'
import baseURL from '../../API/baseURL'
import { IPost } from '../../interface/interfaces'
import { blogsSlice } from './../slice/blogsSlice'
import { AxiosError } from 'axios'

interface ISearchProps {
	title?: string | null | undefined
	category?: string | null | undefined
	author?: string | null | undefined
	limit?: number | null | undefined
	page?: number | null | undefined
}

export const getBlogs = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogsSlice.actions.getBlogsLoad())
			const response = await baseURL.get<Array<IPost>>('posts')
			dispatch(blogsSlice.actions.getBlogs(response.data))
		} catch (err) {
			dispatch(blogsSlice.actions.getBlogsError(err as AxiosError<Error>))
		}
	}
}

export const getSearchBlogs = ({
	title,
	category,
	author,
	limit,
	page,
}: ISearchProps) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogsSlice.actions.getBlogsLoad())
			if (title || category || author || limit || page) {
				const response = await baseURL.get<Array<IPost>>('posts', {
					params: {
						title_like: title,
						category_like: category,
						author_like: author,
						_limit: limit,
						_page: page,
					},
				})
				dispatch(blogsSlice.actions.getBlogs(response.data))
				dispatch(
					blogsSlice.actions.getXTotalCount(
						response.headers['x-total-count'] || '0'
					)
				)
			} else {
				const response = await baseURL.get<Array<IPost>>('posts')
				dispatch(blogsSlice.actions.getBlogs(response.data))
			}
		} catch (err) {
			dispatch(blogsSlice.actions.getBlogsError(err as AxiosError<Error>))
		}
	}
}

export const postBlogs = (data: IPost) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogsSlice.actions.getBlogsLoad())
			const response = await baseURL.post('posts', data)
			dispatch(blogsSlice.actions.postBlogs(response.data))
		} catch (err) {
			dispatch(blogsSlice.actions.getBlogsError(err as AxiosError<Error>))
		}
	}
}
