import {FC} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface INamePageProps {
	name: string
}

const NamePage: FC<INamePageProps> = ({ name }) => {
	return (
		<Box component='div'>
			<Typography
				variant='subtitle1'
				component='div'
				sx={{
					letterSpacing: '1px',
					textTransform: 'uppercase',
					color: '#999',
				}}
			>
				{name}
			</Typography>
		</Box>
	)
}

export default NamePage