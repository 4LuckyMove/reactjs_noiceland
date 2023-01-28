import { FC } from 'react'
import { GridActionsCellItem } from '@mui/x-data-grid/components'
import { GridRowId } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import { useAppDispatch } from '../../../../hooks/redux'
import { deleteAuthor, getAuthor } from '../../../../store/action/authorAction'

interface DeleteAuthorProps {
	id: GridRowId
}

const DeleteRowAuthor: FC<DeleteAuthorProps> = ({ id }) => {
	const dispatch = useAppDispatch()
	const handleDeleteClick = (id: any) => () => {
		dispatch(deleteAuthor(id))
		dispatch(getAuthor())
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

export default DeleteRowAuthor
