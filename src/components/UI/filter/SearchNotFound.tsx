import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SearchNotFound = () => {
	return (
		<Box component='div'>
			<Typography
				variant='subtitle1'
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textTransform: 'uppercase',
					color: '#333333',
				}}
			>
				Post Not Found!
			</Typography>
		</Box>
	)
}

export default SearchNotFound