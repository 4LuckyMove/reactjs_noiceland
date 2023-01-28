import { FC } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

interface TopFooterProps {
	title: string
}

const TopFooter: FC<TopFooterProps> = ({ title }) => {
	return (
		<>
			<Box
				component='div'
				sx={{
					display: 'flex',
					gap: '15px',
					alignItems: 'flex-end',
					flexWrap: { xs: 'wrap', md: 'nowrap' },
				}}
			>
				<Typography
					variant='inherit'
					component='p'
					color='#fff'
					className='header__logo'
					sx={{ lineHeight: '1' }}
				>
					{title}
				</Typography>
				<Typography
					component='p'
					color='#666'
					sx={{
						fontSize: 10,
						lineHeight: 1.2,
						letterSpacing: 1,
						textTransform: 'uppercase',
					}}
				>
					© 2023 {title}™, all rights reserved
				</Typography>
			</Box>
			<Box component='div' sx={{ p: '60px 0' }}>
				<Divider sx={{ borderColor: '#4D4D4D' }} />
			</Box>
		</>
	)
}

export default TopFooter
