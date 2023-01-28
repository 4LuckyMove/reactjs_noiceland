import { FC, useState } from 'react'
import { ISubscribe, ITitleFooter } from '../../interface/interfaces'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { generateUUID } from '../../utils/generateUUID'
import moment from 'moment'
import { useFormik } from 'formik'
import { subscribeSchema } from '../../utils/validationForm'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { postSubscribe } from '../../store/action/subscribeAction'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

export interface StateSnackbar extends SnackbarOrigin {
	open: boolean
}

const Subscribe: FC<ITitleFooter> = ({ label }) => {
	const [stateSnackbar, setStateSnackbar] = useState<StateSnackbar>({
		open: false,
		vertical: 'top',
		horizontal: 'right',
	})
	const { vertical, horizontal, open } = stateSnackbar
	const dispatch = useAppDispatch()
	const { isErrorSubscribe } = useAppSelector(state => state.subscribe)
	const initValues: ISubscribe = {
		id: generateUUID(),
		email: '',
		dataCreate: String(moment().format()),
	}

	const addSubscribe = (data: ISubscribe) => {
		dispatch(postSubscribe(data))
		formik.resetForm({ values: initValues })
	}

	const formik = useFormik({
		initialValues: initValues,
		validationSchema: subscribeSchema,
		onSubmit: values => {
			addSubscribe(values)
		},
	})

	const handleClickSnackbar = (newState: SnackbarOrigin) => () => {
		setStateSnackbar({ open: true, ...newState })
	}
	const handleCloseSnackbar = () => {
		setStateSnackbar({ ...stateSnackbar, open: false })
	}

	return (
		<Box component='div' sx={{ maxWidth: '300px' }}>
			<Typography variant='subtitle2' sx={{ mb: '20px' }}>
				{label}
			</Typography>
			<Box
				component='form'
				sx={{ height: '48px' }}
				noValidate
				autoComplete='off'
				onSubmit={formik.handleSubmit}
			>
				<TextField
					id='email'
					name='email'
					label='Email address'
					type='email'
					variant='filled'
					color='primary'
					sx={{ bgcolor: '#fff', ':active': { borderColor: '#e6e6e6' } }}
					size='small'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.errors.email}
				/>
				<Button
					variant='contained'
					sx={{
						height: '100%',
						':disabled': { color: '#fff', borderColor: '#fff' },
					}}
					type='submit'
					disabled={!(formik.isValid && formik.dirty)}
					onClick={handleClickSnackbar({
						vertical: 'top',
						horizontal: 'right',
					})}
				>
					Send
				</Button>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					autoHideDuration={6000}
					onClose={handleCloseSnackbar}
					message={
						isErrorSubscribe
							? isErrorSubscribe.message
							: 'subscription successfully'
					}
					key={vertical + horizontal}
					sx={{ bottom: '80%' }}
				/>
			</Box>
		</Box>
	)
}

export default Subscribe
