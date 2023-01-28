import { FC } from 'react'
import Box from '@mui/material/Box'
import { IContent } from '../../interface/interfaces'
import NoicelandCards from '../UI/card/NoicelandCards'

const LastPosts: FC<IContent> = ({ data, maxCountCard }) => {
	return (
		<Box component='div' sx={{ p: '65px 0' }}>
			<Box
				component='div'
				sx={{
					display: 'grid',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					},
					gap: '25px 20px',
				}}
			>
				<NoicelandCards data={data} maxCountCard={maxCountCard} height='254' heightCard='481px' />
			</Box>
		</Box>
	)
}

export default LastPosts
