import { FC } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IAuthor } from '../../../interface/interfaces'

interface CardAboutProps {
	item: IAuthor
	height?: string
	heightCard?: string
}

const CardAbout: FC<CardAboutProps> = ({ item, height, heightCard }) => {
	return (
		<Card
			key={item.id}
			sx={{
				height: { xs: 'max-content', sm: '100%', lg: heightCard },
				boxShadow: 'none',
			}}
		>
			<CardMedia
				component='img'
				height={height}
				image={item.avatarURL}
				alt={`${item.name} ${item.lastName}`}
				sx={{ mb: '25px' }}
			/>
			<CardContent sx={{ p: '0 16px', textAlign: 'center' }}>
				<Typography variant='subtitle1' component='div'>
					{`${item.name} ${item.lastName}`}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default CardAbout
