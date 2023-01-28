import { useEffect, useMemo } from 'react'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { DataGrid, GridColumns, GridActionsCellItem } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import {
	deleteSubscribe,
	getSubscribe,
} from '../../../../store/action/subscribeAction'
import moment from 'moment'

const SubscribeTable = () => {
	const dispatch = useAppDispatch()
	const { subscribes, isLoadSubscribe, isErrorSubscribe } = useAppSelector(
		state => state.subscribe
	)

	useEffect(() => {
		dispatch(getSubscribe())
	}, [dispatch])

	const handleDeleteClick = (id: any) => () => {
		dispatch(deleteSubscribe(id))
		dispatch(getSubscribe())
	}

	const columns = useMemo<GridColumns>(
		() => [
			{ field: 'id', headerName: 'ID', minWidth: 150, flex: 1 },
			{
				field: 'email',
				headerName: 'E-mail',
				minWidth: 150,
				hidable: true,
				flex: 1,
			},
			{
				field: 'dataCreate',
				headerName: 'Date Create',
				type: 'date',
				valueGetter: ({ value }) =>
					value && moment(value).format('DD MMMM YYYY'),
				minWidth: 150,
				flex: 0.45,
			},
			{
				field: 'actions',
				type: 'actions',
				headerName: 'Action',
				minWidth: 150,
				flex: 0.2,
				cellClassName: 'action',
				getActions: ({ id }) => {
					return [
						<GridActionsCellItem
							icon={<DeleteIcon />}
							label='Delete'
							onClick={handleDeleteClick(id)}
							color='inherit'
						/>,
					]
				},
			},
		],
		// eslint-disable-next-line
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
				loading={isLoadSubscribe}
				error={isErrorSubscribe}
				rows={subscribes}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
				experimentalFeatures={{ newEditingApi: true }}
				disableSelectionOnClick
			/>
		</Box>
	)
}

export default SubscribeTable
