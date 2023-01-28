import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getCategory } from '../../../../store/action/categoryAction'
import DeleteRowCategory from './DeleteRowCategory'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import AddRowCategory from './AddRowCategory'

const CrudTableCategory = () => {
	const dispatch = useAppDispatch()
	const { category, isErrorCategory, isLoadCategory } = useAppSelector(
		state => state.category
	)
	const [pageSize, setPageSize] = useState<number>(5)
	const changePageSize = (newPageSize: number) => setPageSize(newPageSize)

	useEffect(() => {
		dispatch(getCategory())
	}, [dispatch])

	const columns = useMemo<GridColumns>(
		() => [
			{
				field: 'id',
				headerName: 'ID',
				minWidth: 150,
				flex: 0.1,
			},
			{
				field: 'name',
				headerName: 'Name',
				minWidth: 150,
				flex: 1,
			},
			{
				field: 'actions',
				type: 'actions',
				headerName: 'Actions',
				width: 100,
				flex: 0.5,
				cellClassName: 'actions',
				getActions: ({ id }) => {
					return [<DeleteRowCategory id={id} />]
				},
			},
		],
		[]
	)

	return (
		<Box
			sx={{
				width: '100%',
				'& .actions': {
					color: 'text.secondary',
				},
				'& .textPrimary': {
					color: 'text.primary',
				},
			}}
		>
			<DataGrid
				autoHeight
				loading={isLoadCategory}
				error={isErrorCategory}
				rows={category}
				columns={columns}
				components={{
					Toolbar: AddRowCategory,
				}}
				pageSize={pageSize}
				onPageSizeChange={changePageSize}
				rowsPerPageOptions={[5, 10, 15]}
				disableSelectionOnClick
			/>
		</Box>
	)
}

export default CrudTableCategory
