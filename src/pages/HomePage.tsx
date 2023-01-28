import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getBlogs } from '../store/action/blogsAction'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Slider from '../components/UI/Slider'
import MainPosts from '../components/content/MainPosts'
import LatestPosts from '../components/content/LatestPosts'
import FeaturedPosts from '../components/content/FeaturedPosts'


const Home = () => {
	const dispatch = useAppDispatch()
	const { blogs } = useAppSelector(state => state.blogs)

	const isSlidePosts = blogs.filter(item => item.isSlide && item)
	const descSortDateCreate = blogs
		.filter(item => item.dateCreate && item)
		.sort((a, b) => b.dateCreate.localeCompare(a.dateCreate))
	const isFeaturedPosts = blogs.filter(item => item.isFeatured && item)

	useEffect(() => {
		dispatch(getBlogs())
	}, [dispatch])

	return (
		<Box
			component='div'
			className='homepage'
			sx={{ pt: { xs: '30px', sm: '50px' }, }}
		>
			<Container maxWidth='lg' sx={{ p: { lg: '0' } }}>
				<Slider data={isSlidePosts} />
				<MainPosts data={descSortDateCreate} maxCountCard={6} />
				<Divider />
				<LatestPosts data={blogs} maxCountCard={8} />
				<Divider />
				<FeaturedPosts data={isFeaturedPosts} maxCountCard={4} />
			</Container>
		</Box>
	)
}

export default Home
