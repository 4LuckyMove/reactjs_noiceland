import { FC } from 'react'
import { scrollTop } from '../../utils/scrollTop'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import NoicelandCard from '../UI/card/NoicelandCard'
import { IPost } from '../../interface/interfaces'

interface IBlogsCardsProps {
	posts: IPost[]
}

const BlogsCards: FC<IBlogsCardsProps> = ({ posts }) => {
	return (
		<Box
			component='div'
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					xs: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
				},
				gap: '25px 20px',
			}}
		>
			{posts.map(post => (
				<Link key={post.id} to={post.id} onClick={scrollTop}>
					<NoicelandCard item={post} height='287' heightCard='500px' />
				</Link>
			))}
		</Box>
	)
}

export default BlogsCards
