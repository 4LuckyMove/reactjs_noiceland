import { FC } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { IPost, ITextFields } from '../../../interface/interfaces'
import { FormikProps } from 'formik'
import FormHelperText from '@mui/material/FormHelperText'
import { uniqueList } from '../../../utils/uniqueList'

interface NoicelandSelectProps extends ITextFields {
	formik: FormikProps<IPost>
	options: string[]
}

const NoicelandSelect: FC<NoicelandSelectProps> = ({
	id,
	label,
	formik,
	options,
	value,
	error,
	touched,
}) => {
	const uniqueOptions = uniqueList(options || []).map(item => item)

	return (
		<FormControl fullWidth size='small' error={touched && Boolean(error)}>
			<InputLabel id={`${id}-title`}>{label}</InputLabel>
			<Select
				labelId={`${id}-title`}
				id={id}
				name={id}
				label={label}
				value={value}
				onChange={formik.handleChange}
			>
				{uniqueOptions.map(item => (
					<MenuItem key={item} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
			<FormHelperText>{error}</FormHelperText>
		</FormControl>
	)
}

export default NoicelandSelect
