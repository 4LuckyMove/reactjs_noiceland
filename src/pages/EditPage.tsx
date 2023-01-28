import { FC, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { getBlogDetail, updateBlogDetail } from '../store/action/blogDetailAction'
import { useNavigate, useParams } from 'react-router-dom'
import { IPost } from '../interface/interfaces'
import { useFormik } from 'formik'
import { schema } from '../utils/validationForm'
import NoicelandForm from '../components/UI/form/NoicelandForm'
import { getCategory } from '../store/action/categoryAction'
import { getAuthor } from '../store/action/authorAction'
import moment from 'moment'

interface IUpdatePostProps {
	url: string
	data: IPost
}

const EditPage: FC = () => {
	const { id } = useParams<'id'>()
	const dispatch = useAppDispatch()
	const { blog } = useAppSelector(state => state.blogDetail)
	const { category } = useAppSelector(state => state.category)
	const { author } = useAppSelector(state => state.author)
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(getBlogDetail(id!))
		dispatch(getCategory())
		dispatch(getAuthor())
	}, [dispatch, id])

	const initialValues: IPost = {
		id: String(blog?.id),
		title: String(blog?.title),
		description: String(blog?.description),
		imageURL: String(blog?.imageURL),
		author: String(blog?.author),
		category: String(blog?.category),
		dateCreate: String(blog?.dateCreate),
		dateUpdate: String(moment().format()),
		isSlide: Boolean(blog?.isSlide),
		isFeatured: Boolean(blog?.isFeatured),
	}

	const updatePost = ({url, data}: IUpdatePostProps) => {
		dispatch(updateBlogDetail(url, data))
		navigate(-1)
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: schema,
		onSubmit: values => {
			updatePost({ url: id!, data: values })
		},
	})

	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container maxWidth='lg' sx={{ pr: { lg: '0' }, pl: { lg: '0' } }}>
				<Box component='div'>
					<Typography
						variant='subtitle1'
						component='div'
						sx={{
							letterSpacing: '1px',
							textTransform: 'uppercase',
							color: '#999',
						}}
					>
						Edit post
					</Typography>
				</Box>
				<Box component='div'>
					<NoicelandForm
						id='form-edit'
						formik={formik}
						dataAuthors={author}
						dataCategory={category}
					/>
				</Box>
				<Box component='div' sx={{textAlign: 'center'}}>
					<Button
						variant='contained'
						type='submit'
						form='form-edit'
						disabled={!(formik.isValid && formik.dirty)}
					>
						Update post
					</Button>
				</Box>
			</Container>
		</Box>
	)
}

export default EditPage
