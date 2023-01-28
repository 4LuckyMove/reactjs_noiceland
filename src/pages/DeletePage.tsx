import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBlogs, getBlogDetail } from '../store/action/blogDetailAction'

const DeletePage = () => {
	const { id } = useParams<'id'>()
	const dispatch = useAppDispatch()
	const { blog } = useAppSelector(state => state.blogDetail)
	const navigate = useNavigate()
	const backToHome = () => navigate('/')
	const deleteCurrentPost = () => {
		dispatch(deleteBlogs(id!)) 
		backToHome()
	}

	useEffect(() => {
		dispatch(getBlogDetail(id!))
	}, [dispatch, id])

	return (
		<Box component='div' sx={{ pt: '50px', pb: '90px' }}>
			<Container maxWidth='lg' sx={{ pr: { lg: '0' }, pl: { lg: '0' } }}>
				<Box component='div'>
					<Typography
						variant='subtitle1'
						component='div'
						sx={{
							letterSpacing: '1px',
							textTransform: 'uppercase',
							color: '#999',
						}}
					>
						Delete post
					</Typography>
				</Box>
				<Box component='div' sx={{ mt: '40px' }}>
					<Typography
						variant='subtitle1'
						component='div'
						sx={{
							letterSpacing: '1px',
						}}
					>
						Are you sure you want to delete the{' '}
						<Typography
							variant='subtitle1'
							component='span'
							sx={{ color: '#f44336' }}
						>
							{blog?.title}
						</Typography>{' '}
						?
					</Typography>
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px',
						mt: '40px',
					}}
				>
					<Button variant='contained' type='button' onClick={deleteCurrentPost}>
						Delete post
					</Button>
					<Button type='button' onClick={backToHome}>
						back to home
					</Button>
				</Box>
			</Container>
		</Box>
	)
}

export default DeletePage