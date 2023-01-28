import { FC, ReactElement, Ref, forwardRef, MouseEvent, useState } from 'react'
import { TransitionProps } from '@mui/material/transitions'
import Slide from '@mui/material/Slide'
import { FormikProps, useFormik } from 'formik'
import { GridToolbarContainer } from '@mui/x-data-grid/components'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { useAppDispatch } from '../../../../hooks/redux'
import { IAuthor } from '../../../../interface/interfaces'
import { generateUUID } from '../../../../utils/generateUUID'
import { postAuthor } from '../../../../store/action/authorAction'
import { authorSchema } from '../../../../utils/validationForm'
import Modal from '../../Modal'
import FormRow from './FormRowAuthor'


const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>
	},
	ref: Ref<unknown>
) {
	return <Slide direction='left' ref={ref} {...props} />
})

const AddRowAuthor: FC = () => {
	const ID_FORM = 'form-add-row'
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const handleClickOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)
	const resetForm = (
		values: MouseEvent<HTMLButtonElement> | FormikProps<IAuthor>
	) => formik.handleReset(values)

	const initValues: IAuthor = {
		id: generateUUID(),
		avatarURL: '',
		name: '',
		lastName: '',
	}

	const addAuthor = (data: IAuthor) => {
		dispatch(postAuthor(data))
		formik.resetForm({ values: initValues })
	}

	const formik = useFormik({
		initialValues: initValues,
		validationSchema: authorSchema,
		onSubmit: values => {
			addAuthor(values)
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
				Add author
			</Button>
			<Modal
				transition={Transition}
				open={isOpen}
				onClose={handleClose}
				title='Add author'
				idForm={ID_FORM}
				disabledSubmit={!(formik.isValid && formik.dirty)}
				resetForm={resetForm}
			>
				<FormRow id={ID_FORM} formik={formik} />
			</Modal>
		</GridToolbarContainer>
	)
}

export default AddRowAuthor
