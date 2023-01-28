import { FC } from 'react'
import { IPost } from '../../interface/interfaces'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import moment from 'moment'

interface DetailPostProps {
	data: IPost
}

const DetailPost: FC<DetailPostProps> = ({ data }) => {
	const createPost = () => {
		if (moment().diff(data.dateCreate, 'days') > 1) {
			return moment(data.dateCreate).format('DD MMM YYYY, h:mm:ss a')
		} else {
			return moment(data.dateCreate).fromNow()
		}
	}
	const updatePost = () => {
		if (data.dateUpdate) {
			if (moment(data.dateUpdate).diff(data.dateCreate, 'days') > 1) {
				return moment(data.dateUpdate).format('DD MMM YYYY, h:mm:ss a')
			} else {
				return moment(data.dateUpdate).fromNow()
			}
		} else {
			return createPost()
		}
	}

	return (
		<Box component='div'>
			<Card
				sx={{
					maxHeight: {
						xs: 'min-content',
						md: 'auto',
					},
					maxWidth: '100%',
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					alignItems: 'flex-start',
					gap: { xs: '30px', md: '51px' },
					boxShadow: 'none',
					bgcolor: '#fff',
				}}
			>
				<CardMedia
					component='img'
					image={data.imageURL}
					alt={data.title}
					sx={{
						mt: { md: 'auto', lg: 'none' },
						mb: { md: 'auto', lg: 'none' },
						maxHeight: { xs: '468px', lg: 'auto' },
						maxWidth: { xs: '100%', md: '50%', lg: 'auto' },
						objectFit: 'contain',
					}}
				/>
				<Box component='div'>
					<CardContent
						sx={{
							maxWidth: { xs: '100%', md: 'auto' },
							p: '5px 0',
						}}
					>
						<Typography variant='body2' component='p' sx={{ mb: '18px' }}>
							{data.category}
						</Typography>
						<Typography
							variant='h1'
							sx={{ mb: '27px', textTransform: 'uppercase' }}
						>
							{data.title}
						</Typography>
						<Typography
							variant='body1'
							sx={{
								color: '#666',
								mb: '27px',
								maxWidth: { xs: '100%', md: 'auto' },
							}}
						>
							{data.description}
						</Typography>
						<Typography
							variant='caption'
							sx={{ textTransform: 'uppercase' }}
						>{`by ${data.author}`}</Typography>
						<Box
							component='div'
							sx={{
								mt: '27px',
								display: 'flex',
								justifyContent: 'space-between',
								gap: '20px',
							}}
						>
							<Typography
								variant='caption'
								component='div'
								sx={{
									display: 'flex',
									gap: '10px',
									textTransform: 'uppercase',
								}}
							>
								Date Create:{' '}
								<Typography variant='body2' component='p'>
									{createPost()}
								</Typography>
							</Typography>
							<Typography
								variant='caption'
								component='div'
								sx={{
									display: 'flex',
									gap: '10px',
									textTransform: 'uppercase',
								}}
							>
								Date Update:{' '}
								<Typography variant='body2' component='p'>
									{updatePost()}
								</Typography>
							</Typography>
						</Box>
					</CardContent>
					<CardActions
						sx={{ gap: '20px', justifyContent: 'flex-end', mt: '40px' }}
					>
						<Link to={'edit'}>
							<Button
								size='small'
								startIcon={<EditIcon />}
								sx={{
									p: '10px 15px',
									fontSize: 14,
									lineHeight: 1.2,
									letterSpacing: 1,
									minWidth: '90px',
								}}
							>
								Edit
							</Button>
						</Link>
						<Link to={'delete'}>
							<Button
								size='small'
								startIcon={<DeleteIcon />}
								sx={{
									p: '10px 15px',
									fontSize: 14,
									lineHeight: 1.2,
									letterSpacing: 1,
									minWidth: '90px',
								}}
							>
								Delete
							</Button>
						</Link>
					</CardActions>
				</Box>
			</Card>
		</Box>
	)
}

export default DetailPost
