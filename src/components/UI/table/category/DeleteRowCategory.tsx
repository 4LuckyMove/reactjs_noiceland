import { FC } from 'react'
import { GridActionsCellItem, GridRowId } from '@mui/x-data-grid'
import { useAppDispatch } from '../../../../hooks/redux'
import { deleteCategory, getCategory } from '../../../../store/action/categoryAction'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'

interface DeleteAuthorProps {
	id: GridRowId
}

const DeleteRowCategory: FC<DeleteAuthorProps> = ({ id }) => {
	const dispatch = useAppDispatch()
	const handleDeleteClick = (id: any) => () => {
		dispatch(deleteCategory(id))
		dispatch(getCategory())
	}
	return (
		<GridActionsCellItem
			icon={<DeleteIcon />}
			label='Delete'
			onClick={handleDeleteClick(id)}
			color='inherit'
		/>
	)
}

export default DeleteRowCategory
