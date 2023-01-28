import { forwardRef, ReactElement, Ref, useEffect, MouseEvent } from 'react'
import { Button, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import AddIcon from '@mui/icons-material/Add'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { isCloseModal, isOpenModal } from '../../store/slice/isActiveSlice'
import Modal from '../UI/Modal'
import NoicelandForm from '../UI/form/NoicelandForm'
import { FormikProps, useFormik } from 'formik'
import { IPost } from '../../interface/interfaces'
import moment from 'moment'
import { schema } from '../../utils/validationForm'
import { postBlogs } from '../../store/action/blogsAction'
import { getCategory } from '../../store/action/categoryAction'
import { getAuthor } from '../../store/action/authorAction'
import { generateUUID } from '../../utils/generateUUID'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>
	},
	ref: Ref<unknown>
) {
	return <Slide direction='left' ref={ref} {...props} />
})

const AddPostModal = () => {
	const idForm = 'form-post'
	const dispatch = useAppDispatch()
	const { isShowModal } = useAppSelector(state => state.isActive)
	const { category } = useAppSelector(state => state.category)
	const { author } = useAppSelector(state => state.author)
	const handleClickOpen = () => dispatch(isOpenModal())
	const handleClose = () => dispatch(isCloseModal())
	const resetForm = (
		values: MouseEvent<HTMLButtonElement> | FormikProps<IPost>
	) => formik.handleReset(values)

	useEffect(() => {
		dispatch(getCategory())
		dispatch(getAuthor())
	}, [dispatch])



	const initialValues: IPost = {
		id: generateUUID(),
		title: '',
		description: '',
		imageURL: '',
		author: '',
		category: '',
		dateCreate: String(moment().format()),
		dateUpdate: null,
		isSlide: false,
		isFeatured: false,
	}

	const addPost = (data: IPost) => {
		dispatch(postBlogs(data))
		formik.resetForm()
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: schema,
		onSubmit: values => {
			addPost(values)
			formik.handleReset(values)
		},
	})

	return (
		<div className='add-post'>
			<Button
				onClick={handleClickOpen}
				className='add-post__button'
				startIcon={<AddIcon />}
				variant='outlined'
			>
				Add post
			</Button>
			<Modal
				transition={Transition}
				open={isShowModal}
				onClose={handleClose}
				title='Add post'
				idForm={idForm}
				disabledSubmit={!(formik.isValid && formik.dirty)}
				resetForm={resetForm}
			>
				<NoicelandForm id={idForm} formik={formik} dataAuthors={author} dataCategory={category} />
			</Modal>
		</div>
	)
}

export default AddPostModal
