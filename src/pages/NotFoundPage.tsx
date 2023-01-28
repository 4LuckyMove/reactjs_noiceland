import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: FC = () => {
	const navigate = useNavigate()
	const returnHomepage = () => navigate('/')
	return (
		<Box
			component='div'
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography
				variant='h1'
				component='div'
				sx={{
					textTransform: 'uppercase',
					fontSize: { xs: '86px', sm: '148px', md: '236px' },
					position: 'relative',
				}}
			>
				Oops!
				<Typography
					variant='h2'
					sx={{
						fontSize: { xs: '16px', sm: '28px' },
						bgcolor: '#fff',
						p: '10px 5px',
						position: 'absolute',
						bottom: '0',
						left: '50%',
						textAlign: 'center',
						transform: {
							xs: 'translate(-50%, 0%)',
							md: 'translate(-50%, -100%)',
						},
						display: 'inline',
						width: 'max-content',
						borderRadius: '5px',
					}}
				>
					The Page can't be found
				</Typography>
			</Typography>
			<Button variant='contained' onClick={returnHomepage}>
				Go to Homepage
			</Button>
		</Box>
	)
}

export default NotFoundPage
