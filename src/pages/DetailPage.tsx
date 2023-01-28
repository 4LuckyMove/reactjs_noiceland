import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getBlogDetail } from '../store/action/blogDetailAction'
import Box from '@mui/material/Box'
import Loader from '../components/Loader'
import Container from '@mui/material/Container'
import DetailPost from '../components/content/DetailPost'
import NoicelandError from '../components/NoicelandError'

const DetailPage = () => {
	const { id } = useParams<'id'>()
	const dispatch = useAppDispatch()
	const { blog, isErrorDetail, isLoadDetail } = useAppSelector(state => state.blogDetail)

	useEffect(() => {
		dispatch(getBlogDetail(id!))
	}, [dispatch, id])
	
	return (
		<Box component='div' sx={{ pt: '50px', pb: '90px' }}>
			<Container maxWidth='lg' sx={{ pr: { lg: '0' }, pl: { lg: '0' } }}>
				{isLoadDetail && <Loader />}
				{isErrorDetail && <NoicelandError err={isErrorDetail} />}
				{blog && <DetailPost data={blog} />}
			</Container>
		</Box>
	)
}

export default DetailPage
