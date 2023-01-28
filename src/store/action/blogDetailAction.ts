import { AppDispatch } from '../store'
import baseURL from '../../API/baseURL'
import { IPost } from '../../interface/interfaces'
import { blogDetailSlice } from '../slice/blogsDetailSlice'
import { blogsSlice } from '../slice/blogsSlice'
import { AxiosError } from 'axios'


export const getBlogDetail = (url: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogDetailSlice.actions.getBlogLoad())
			const response = await baseURL.get<IPost>(`posts/${url}`)
			dispatch(blogDetailSlice.actions.getBlog(response.data))
		} catch (err) {
			dispatch(blogDetailSlice.actions.getBlogError(err as AxiosError<Error>))
		}
	}
}

export const updateBlogDetail = (url: string, data: IPost) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogDetailSlice.actions.getBlogLoad())
			const response = await baseURL.put<IPost>(`posts/${url}`, data)
			dispatch(blogDetailSlice.actions.updateBlog(response.data))
		} catch (err) {
			dispatch(blogDetailSlice.actions.getBlogError(err as AxiosError<Error>))
		}
	}
}

export const deleteBlogs = (url: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogsSlice.actions.getBlogsLoad())
			const response = await baseURL.delete<IPost>(`posts/${url}`)
			dispatch(blogsSlice.actions.deleteBlogs(response.data))
		} catch (err) {
			dispatch(blogsSlice.actions.getBlogsError(err as AxiosError<Error>))
		}
	}
}

export const getBlogCategory = (url: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(blogDetailSlice.actions.getBlogLoad())
			const response = await baseURL.get<IPost>(`posts/?category_like=${url}`)
			dispatch(blogDetailSlice.actions.getBlog(response.data))
		} catch (err) {
			dispatch(blogDetailSlice.actions.getBlogError(err as AxiosError<Error>))
		}
	}
}