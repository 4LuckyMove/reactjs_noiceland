import { FC, MouseEvent } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { uniqueList } from '../../../utils/uniqueList'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import { Box } from '@mui/material'

interface FilterSelectProps {
	title: string
	data: string[]
	valueFilter: URLSearchParams
	setValueFilter: Function
}

const FilterSelect: FC<FilterSelectProps> = ({
	title,
	data,
	valueFilter,
	setValueFilter,
}) => {
	const uniqueOptions = uniqueList(data || []).map(item => item)
	const valueSelect = valueFilter.get(title) || ''

	const changeHandler = (event: SelectChangeEvent<string>) => {
		event.preventDefault()
		valueFilter.set(title, event.target.value)
		setValueFilter(valueFilter)
	}

	const handleClearClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		valueFilter.delete(title)
		setValueFilter(valueFilter)
	}

	return (
		<Box
			component='div'
			sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: '10px' }}
		>
			<FormControl fullWidth size='small'>
				<InputLabel
					id={`${title}-select-label`}
					sx={{ textTransform: 'capitalize' }}
				>
					{title}
				</InputLabel>
				<Select
					labelId={`${title}-select-label`}
					id={`${title}-select`}
					name={title}
					value={valueSelect}
					label={title}
					onChange={changeHandler}
				>
					{uniqueOptions.map(item => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			{valueSelect && (
				<IconButton onClick={handleClearClick} size='small'>
					<ClearIcon />
				</IconButton>
			)}
		</Box>
	)
}

export default FilterSelect
