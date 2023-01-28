import { FC } from 'react'
import { ICategory } from '../../../../interface/interfaces'
import { FormikProps } from 'formik'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface FormRowProps {
	id: string
	formik: FormikProps<ICategory>
}

const FormRowCategory: FC<FormRowProps> = ({ id, formik }) => {
	
	return (
		<Box
			id={id}
			component='form'
			noValidate
			autoComplete='off'
			onSubmit={formik.handleSubmit}
		>
			<Box component='div'>
				<TextField
					margin='normal'
					fullWidth
					size='small'
					id='name'
					name='name'
					label='Title Category'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.errors.name}
				/>
			</Box>
		</Box>
	)
}

export default FormRowCategory
