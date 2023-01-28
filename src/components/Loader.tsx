import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => {
	return (
		<Box
			sx={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	)
}

export default Loader
