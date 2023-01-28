import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import blogsSlice from './slice/blogsSlice'
import isActiveSlice from './slice/isActiveSlice'
import categorySlice from './slice/categorySlice'
import authorSlice from './slice/authorSlice'
import blogsDetailSlice from './slice/blogsDetailSlice'
import subscribeSlice from './slice/subscribeSlice'

export const store = configureStore({
	reducer: {
		blogs: blogsSlice,
		blogDetail: blogsDetailSlice,
		isActive: isActiveSlice,
		category: categorySlice,
		author: authorSlice,
		subscribe: subscribeSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
