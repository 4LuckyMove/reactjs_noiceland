import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPost } from '../../interface/interfaces'
import { AxiosError } from 'axios'

interface BlogDetailState {
	isLoadDetail: boolean
	isErrorDetail: AxiosError<Error> | null
	blog: IPost | null
	updateBlog: IPost[]
}

const initialState: BlogDetailState = {
	isLoadDetail: false,
	isErrorDetail: null,
	blog: null,
	updateBlog: [],
}

export const blogDetailSlice = createSlice({
	name: 'detailBlog',
	initialState,
	reducers: {
		getBlogLoad(state) {
			state.isLoadDetail = true
		},
		getBlog(state, action: PayloadAction<IPost>) {
			state.isLoadDetail = false
			state.blog = action.payload
			state.isErrorDetail = null
		},
		getBlogError(state, action: PayloadAction<AxiosError<Error>>) {
			state.isLoadDetail = false
			state.isErrorDetail = action.payload
		},
		updateBlog(state, action: PayloadAction<IPost>) {
			state.isLoadDetail = false
			const index = state.updateBlog.findIndex(
				(post: IPost) => post.id === action.payload.id
			)
			state.updateBlog[index] = {
				...state.updateBlog[index],
				...action.payload,
			}
			state.isErrorDetail = null
		},
	},
})

export default blogDetailSlice.reducer
