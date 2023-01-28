import {useEffect} from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NamePage from '../components/content/NamePage'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import CardAbout from '../components/UI/card/CardAbout'
import { getAuthor } from '../store/action/authorAction'
import Loader from '../components/Loader'
import NoicelandError from '../components/NoicelandError'

const AboutPage = () => {
	const dispatch = useAppDispatch()
	const { isLoadAuthor, isErrorAuthor, author } = useAppSelector(
		state => state.author
	)

	useEffect(() => {
		dispatch(getAuthor())
	}, [dispatch])
	

	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			{isLoadAuthor && <Loader />}
			{isErrorAuthor && <NoicelandError err={isErrorAuthor} />}
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<NamePage name='About' />
				<Box component='div'>
					<Typography variant='h2' sx={{ py: '50px' }}>
						Our authors
					</Typography>
					<Box
						component='div'
						sx={{
							display: 'grid',
							gap: '25px 20px',
							gridTemplateColumns: {
								xs: 'repeat(1, 1fr)',
								sm: 'repeat(2, 1fr)',
								md: 'repeat(3, 1fr)',
								lg: 'repeat(4, 1fr)',
							},
						}}
					>
						{author.map(item => (
							<CardAbout key={item.id} item={item} height='300' />
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default AboutPage
