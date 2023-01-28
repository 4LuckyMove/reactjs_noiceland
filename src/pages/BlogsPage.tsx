import { useEffect, useState, ChangeEvent } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getSearchBlogs } from '../store/action/blogsAction'
import NamePage from '../components/content/NamePage'
import BlogsCards from '../components/content/BlogsCards'
import { useDebounce } from '../hooks/debounce'
import NoicelandSearch from '../components/UI/filter/NoicelandSearch'
import SearchNotFound from '../components/UI/filter/SearchNotFound'
import FilterBox from '../components/UI/filter/FilterBox'
import { useSearchParams } from 'react-router-dom'
import { scrollTop } from '../utils/scrollTop'

const BlogsPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const dispatch = useAppDispatch()
	const { blogs, xTotalCount } = useAppSelector(state => state.blogs)

	const [limit, setLimit] = useState<string>('6')
	const [page, setPage] = useState<number>(1)
	const changePageHandler = (event: ChangeEvent<unknown>, value: number) => {
		scrollTop()
		setPage(value)
	}
	const countPage = Math.ceil(Number(xTotalCount) / Number(limit))

	const categoryFilter = searchParams.get('category') || ''
	const authorFilter = searchParams.get('author') || ''
	const searchFilter = searchParams.get('q') || ''
	const debounce = useDebounce<string>(searchFilter, 500)

	useEffect(() => {
		dispatch(
			getSearchBlogs({
				page: page,
				limit: Number(limit),
				title: debounce.length >= 3 ? debounce : null,
				category: categoryFilter ? categoryFilter : null,
				author: authorFilter ? authorFilter : null,
			})
		)
		if (countPage < page) {
			setPage(1)
		}
	}, [dispatch, debounce, categoryFilter, authorFilter, limit, page, countPage])

	const renderFilteredPosts = () => {
		if (blogs.length) {
			return <BlogsCards posts={blogs} />
		} else {
			return <SearchNotFound />
		}
	}

	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<Box
					component='div'
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: { xs: '20px', sm: '0' },
						flexWrap: { xs: 'wrap', md: 'nowrap' },
					}}
				>
					<NamePage name='Blogs' />
					<NoicelandSearch
						filterState={searchParams}
						setFilterState={setSearchParams}
					/>
				</Box>
				<FilterBox
					filterState={searchParams}
					setFilterState={setSearchParams}
					limitState={limit}
					setLimitState={setLimit}
				/>
				{renderFilteredPosts()}
				<Box
					component='div'
					sx={{
						mt: '30px',
						display: 'flex',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Pagination
						count={countPage}
						shape='rounded'
						page={page}
						onChange={changePageHandler}
						variant='outlined'
						size='large'
					/>
				</Box>
			</Container>
		</Box>
	)
}

export default BlogsPage
