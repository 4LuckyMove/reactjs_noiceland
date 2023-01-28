import { FC, ReactElement, Ref, forwardRef, MouseEvent, useState } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import { useAppDispatch } from '../../../../hooks/redux'
import { FormikProps, useFormik } from 'formik'
import { ICategory } from '../../../../interface/interfaces'
import { generateUUID } from '../../../../utils/generateUUID'
import { postCategory } from '../../../../store/action/categoryAction'
import { categorySchema } from '../../../../utils/validationForm'
import { GridToolbarContainer } from '@mui/x-data-grid/components'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import FormRowCategory from './FormRowCategory'
import Modal from '../../Modal'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>
	},
	ref: Ref<unknown>
) {
	return <Slide direction='left' ref={ref} {...props} />
})

const AddRowCategory: FC = () => {
	const ID_FORM = 'form-add-category-row'
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const handleClickOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)
	const resetForm = (
		values: MouseEvent<HTMLButtonElement> | FormikProps<ICategory>
	) => formik.handleReset(values)

	const initValues: ICategory = {
		id: generateUUID(),
		name: '',
	}

	const addCategory = (data: ICategory) => {
		dispatch(postCategory(data))
		formik.resetForm({ values: initValues })
	}

	const formik = useFormik({
		initialValues: initValues,
		validationSchema: categorySchema,
		onSubmit: values => {
			addCategory(values)
		},
	})

	return (
		<GridToolbarContainer
			sx={{
				borderBottom: '1px solid #000',
				pb: '10px',
				justifyContent: 'flex-end',
			}}
		>
			<Button color='primary' startIcon={<AddIcon />} onClick={handleClickOpen}>
				Add category
			</Button>
			<Modal
				transition={Transition}
				open={isOpen}
				onClose={handleClose}
				title='Add category'
				idForm={ID_FORM}
				disabledSubmit={!(formik.isValid && formik.dirty)}
				resetForm={resetForm}
			>
				<FormRowCategory id={ID_FORM} formik={formik} />
			</Modal>
		</GridToolbarContainer>
	)
}

export default AddRowCategory
