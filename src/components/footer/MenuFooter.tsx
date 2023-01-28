import { FC } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { ITitleFooter } from '../../interface/interfaces'

interface MenuFooterProps extends ITitleFooter {
	menuItems: {
		label: string
		link: string
		target?: boolean
	}[]
}

const MenuFooter: FC<MenuFooterProps> = ({ label, menuItems }) => {
	return (
		<Box component='div' sx={{ width: '225px' }}>
			<Typography variant='subtitle2' sx={{ mb: '20px' }}>
				{label}
			</Typography>
			<Box
				component='div'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
				}}
			>
				{menuItems.map(menu => (
					// eslint-disable-next-line
					<a key={menu.label} href={menu.link.toLowerCase()} target={menu.target ? '_blank' : ''}>
						<Typography
							variant='button'
							sx={{
								color: '#fff',
								textTransform: 'capitalize',
								'&:hover': {
									color: '#666',
								},
							}}
						>
							{menu.label}
						</Typography>
					</a>
				))}
			</Box>
		</Box>
	)
}

export default MenuFooter
