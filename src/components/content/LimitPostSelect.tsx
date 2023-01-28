import {Dispatch, FC, SetStateAction} from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface LimitPostSelectProps {
	label: string
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

export const LimitPostSelect: FC<LimitPostSelectProps> = ({label, value, setValue}) => {
	const listLimits = ['3', '6', '9', '12']
	const changeHandler = (event: SelectChangeEvent<string>) =>
		setValue(event.target.value)

	return (
		<Box component='div' sx={{ minWidth: '120px' }}>
			<FormControl fullWidth size='small'>
				<InputLabel
					id={`${label}-select-label`}
					sx={{ textTransform: 'capitalize' }}
				>
					{label}
				</InputLabel>
				<Select
					labelId={`${label}-select-label`}
					id={`${label}-select`}
					value={value}
					label={label}
					onChange={changeHandler}
				>
					{listLimits.map(item => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}
