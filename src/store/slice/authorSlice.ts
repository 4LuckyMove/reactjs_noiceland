import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthor } from '../../interface/interfaces'
import { AxiosError } from 'axios'

interface AuthorState {
	isLoadAuthor: boolean
	isErrorAuthor: AxiosError<Error> | null
	author: IAuthor[]
	idAuthor: IAuthor | null
}

const initialState: AuthorState = {
	isLoadAuthor: false,
	isErrorAuthor: null,
	author: [],
	idAuthor: null,
}

export const authorSlice = createSlice({
	name: 'author',
	initialState,
	reducers: {
		getAuthorLoad(state) {
			state.isLoadAuthor = true
		},
		getAuthor(state, action: PayloadAction<IAuthor[]>) {
			state.isLoadAuthor = false
			state.author = action.payload
			state.isErrorAuthor = null
		},
		getIdAuthor(state, action: PayloadAction<IAuthor>) {
			state.isLoadAuthor = false
			state.idAuthor = action.payload
			state.isErrorAuthor = null
		},
		getAuthorError(state, action: PayloadAction<AxiosError<Error>>) {
			state.isLoadAuthor = false
			state.isErrorAuthor = action.payload
		},
		postAuthor(state, action: PayloadAction<IAuthor>) {
			state.isLoadAuthor = false
			state.author.push(action.payload)
			state.isErrorAuthor = null
		},
		deleteAuthor(state, action: PayloadAction<IAuthor>) {
			state.isLoadAuthor = false
			state.author = state.author.filter(
				author => author.id !== action.payload.id
			)
			state.isErrorAuthor = null
		},
	},
})

export default authorSlice.reducer
