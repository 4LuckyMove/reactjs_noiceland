import { FC } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { IContent } from '../../interface/interfaces'
import NoicelandCards from '../UI/card/NoicelandCards'

const LatestPosts: FC<IContent> = ({ data, maxCountCard }) => {
	return (
		<Box component='div' sx={{ p: '90px 0' }}>
			<Box component='div' sx={{ mb: '30px' }}>
				<Typography variant='body2' component='p'>
					Latest post
				</Typography>
			</Box>
			<Box
				component='div'
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(3, 1fr)',
						lg: 'repeat(4, 1fr)',
					},
					gap: '25px 20px',
				}}
			>
				<NoicelandCards data={data} maxCountCard={maxCountCard} height='187' heightCard='443px' />
			</Box>
			<Box component={'div'} sx={{ mt: '65px', textAlign: 'center' }}>
				<Link to='blogs'>
					<Button
						variant='outlined'
						sx={{
							p: '21px 26px',
							fontSize: 10,
							lineHeight: 1.2,
							letterSpacing: 1,
						}}
					>
						View all latest posts
					</Button>
				</Link>
			</Box>
		</Box>
	)
}

export default LatestPosts
