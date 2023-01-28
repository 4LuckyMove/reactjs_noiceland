import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../interface/interfaces'
import { AxiosError } from 'axios'

interface BlogsState {
	isLoadBlogs: boolean
	isErrorBlogs: AxiosError<Error> | null
	blogs: IPost[]
	xTotalCount: string | undefined
}

const initialState: BlogsState = {
	isLoadBlogs: false,
	isErrorBlogs: null,
	blogs: [],
	xTotalCount: '0',
}

export const blogsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getBlogsLoad(state) {
			state.isLoadBlogs = true
		},
		getBlogs(state, action: PayloadAction<IPost[]>) {
			state.isLoadBlogs = false
			state.blogs = action.payload
			state.isErrorBlogs = null
		},
		getBlogsError(state, action: PayloadAction<AxiosError<Error>>) {
			state.isLoadBlogs = false
			state.isErrorBlogs = action.payload
		},
		postBlogs(state, action: PayloadAction<IPost>) {
			state.isLoadBlogs = false
			state.blogs.push(action.payload)
			state.isErrorBlogs = null
		},
		deleteBlogs(state, action: PayloadAction<IPost>) {
			state.isLoadBlogs = false
			state.blogs = state.blogs.filter(item => item.id !== action.payload.id)
			state.isErrorBlogs = null
		},
		getXTotalCount(state, action: PayloadAction<string>) {
			state.isLoadBlogs = false
			state.xTotalCount = action.payload
			state.isErrorBlogs = null
		},
	},
})

export default blogsSlice.reducer
