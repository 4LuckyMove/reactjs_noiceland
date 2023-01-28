import {FC} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NoicelandCards from '../UI/card/NoicelandCards'
import { IContent } from '../../interface/interfaces'

const FeaturedPosts: FC<IContent> = ({data, maxCountCard}) => {
	return (
		<Box component='div' sx={{ p: '90px 0' }}>
			<Box component='div' sx={{ mb: '30px' }}>
				<Typography variant='body2' component='p'>
					Featured post
				</Typography>
			</Box>
			<Box
				component='div'
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
					},
					gap: '25px 20px',
				}}
			>
				<NoicelandCards data={data} maxCountCard={maxCountCard} height='387' heightCard='567px' />
			</Box>
		</Box>
	)
}

export default FeaturedPosts