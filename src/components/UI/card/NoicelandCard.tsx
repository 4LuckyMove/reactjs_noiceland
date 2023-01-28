import { FC } from 'react'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IPost } from '../../../interface/interfaces'

interface NoicelandCardProps {
	item: IPost
	height?: string
	heightCard?: string
}

const NoicelandCard: FC<NoicelandCardProps> = ({
	item,
	height,
	heightCard,
}) => {
	return (
		<CardActionArea key={item.id}>
			<Card
				sx={{
					height: { xs: 'max-content', sm: '100%', lg: heightCard },
					boxShadow: 'none',
				}}
			>
				<CardMedia
					component='img'
					height={height}
					image={item.imageURL}
					alt={item.title}
					sx={{ mb: '25px' }}
				/>
				<CardContent sx={{ p: '0 16px' }}>
					<Typography
						gutterBottom
						variant='body2'
						component='p'
						sx={{ mb: '18px' }}
					>
						{item.category}
					</Typography>
					<Typography variant='subtitle1' component='div' sx={{ mb: '40px' }}>
						{item.title}
					</Typography>
					<Typography
						variant='caption'
						sx={{ textTransform: 'uppercase' }}
					>{`by ${item.author}`}</Typography>
				</CardContent>
			</Card>
		</CardActionArea>
	)
}

export default NoicelandCard
