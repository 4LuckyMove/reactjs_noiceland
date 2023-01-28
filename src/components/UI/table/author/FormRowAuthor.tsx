import { FC } from 'react'
import { IAuthor, ITextFields } from '../../../../interface/interfaces'
import { FormikProps } from 'formik'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

interface FormRowProps {
	id: string
	formik: FormikProps<IAuthor>
}

const FormRow: FC<FormRowProps> = ({ id, formik }) => {
	const textFields: ITextFields[] = [
		{
			id: 'name',
			label: 'Name',
			multiline: false,
			value: formik.values.name,
			error: formik.errors.name,
			touched: formik.touched.name,
		},
		{
			id: 'lastName',
			label: 'Last Name',
			multiline: false,
			value: formik.values.lastName,
			error: formik.errors.lastName,
			touched: formik.touched.lastName,
		},
		{
			id: 'avatarURL',
			label: 'Avatar URL',
			multiline: false,
			value: formik.values.avatarURL,
			error: formik.errors.avatarURL,
			touched: formik.touched.avatarURL,
		},
	]
	return (
		<Box
			id={id}
			component='form'
			noValidate
			autoComplete='off'
			onSubmit={formik.handleSubmit}
		>
			<Box component='div'>
				{textFields.map(input => (
					<TextField
						key={input.id}
						margin='normal'
						fullWidth
						size='small'
						id={input.id}
						name={input.id}
						label={input.label}
						multiline={input.multiline}
						value={input.value}
						onChange={formik?.handleChange}
						onBlur={formik?.handleBlur}
						error={input.touched && Boolean(input.error)}
						helperText={input.error}
					/>
				))}
			</Box>
		</Box>
	)
}

export default FormRow
