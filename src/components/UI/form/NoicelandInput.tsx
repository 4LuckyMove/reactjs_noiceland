import { FC } from 'react'
import TextField from '@mui/material/TextField'
import { IPost, ITextFields } from '../../../interface/interfaces'
import { FormikProps } from 'formik'

interface NoicelandInputProps extends ITextFields {
	formik: FormikProps<IPost> | undefined
}

const NoicelandInput: FC<NoicelandInputProps> = ({
	id,
	label,
	multiline,
	value,
	formik,
	touched,
	error,
}) => {
	return (
		<>
			<TextField
				margin='normal'
				fullWidth
				size='small'
				id={id}
				name={id}
				label={label}
				multiline={multiline}
				value={value}
				onChange={formik?.handleChange}
				onBlur={formik?.handleBlur}
				error={touched && Boolean(error)}
				helperText={error}
			/>
		</>
	)
}

export default NoicelandInput