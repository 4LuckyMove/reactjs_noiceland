import { ChangeEvent, FC } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'

interface NoicelandCheckboxProps {
	id: string
	onChange: {
		(e: ChangeEvent<any>): void
		<T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
			? void
			: (e: string | ChangeEvent<any>) => void
	}
	label: string
	checked?: boolean
}

const NoicelandCheckbox: FC<NoicelandCheckboxProps> = ({
	id,
	onChange,
	label,
	checked,
}) => {
	return (
		<FormGroup sx={{ width: { xs: '100%', sm: '50%' } }}>
			<FormControlLabel
				control={
					<Checkbox id={id} name={id} onChange={onChange} checked={checked} />
				}
				label={label}
			/>
		</FormGroup>
	)
}

export default NoicelandCheckbox
