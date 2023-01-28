import { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { getAuthor } from '../../../../store/action/authorAction'
import Avatar from '@mui/material/Avatar'
import DeleteRowAuthor from './DeleteRowAuthor'
import AddRowAuthor from './AddRowAuthor'

const CrudTableAuthor = () => {
	const dispatch = useAppDispatch()
	const { author, isErrorAuthor, isLoadAuthor } = useAppSelector(state => state.author)
	const [pageSize, setPageSize] = useState<number>(10)
	const changePageSize = (newPageSize: number) => setPageSize(newPageSize)

	useEffect(() => {
		dispatch(getAuthor())
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
				field: 'avatarURL',
				headerName: 'Avatar',
				minWidth: 150,
				flex: 0.3,
				sortable: false,
				filterable: false,
				renderCell: params => {
					return <Avatar src={params.value} />
				},
			},
			{
				field: 'name',
				headerName: 'Name',
				minWidth: 150,
				flex: 1,
			},
			{
				field: 'lastName',
				headerName: 'Last Name',
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
					return [<DeleteRowAuthor id={id} />]
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
				loading={isLoadAuthor}
				error={isErrorAuthor}
				rows={author}
				columns={columns}
				components={{
					Toolbar: AddRowAuthor,
				}}
				pageSize={pageSize}
				onPageSizeChange={changePageSize}
				rowsPerPageOptions={[10, 15]}
				disableSelectionOnClick
			/>
		</Box>
	)
}

export default CrudTableAuthor
