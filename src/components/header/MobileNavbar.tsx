import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { MouseEvent, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { INavMenu } from '../../interface/interfaces'

interface MobileNavbarProps {
	container: (() => HTMLElement) | undefined
	open: boolean
	onClose: (event: MouseEvent<HTMLElement>) => void
	drawerWidth: number | undefined
	navItems: INavMenu[]
	title: string
}

const MobileNavbar: FC<MobileNavbarProps> = ({container, open, onClose, drawerWidth, navItems, title}) => {
	return (
		<Box component='nav'>
			<Drawer
				container={container}
				variant='temporary'
				open={open}
				onClose={onClose}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: drawerWidth,
					},
				}}
			>
				<Box onClick={onClose} sx={{ textAlign: 'center' }}>
					<Typography variant='h2' sx={{ my: 2 }}>
						{title}
					</Typography>
					<Divider />
					<List>
						{navItems.map(item => (
							<NavLink key={item.name} to={item.link} className='nav-link'>
								<ListItem disablePadding>
									<ListItemButton
										sx={{ textAlign: 'center', justifyContent: 'center' }}
									>
										<ListItemText
											primary={item.name}
											className='nav-link__item'
										/>
									</ListItemButton>
								</ListItem>
							</NavLink>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	)
}

export default MobileNavbar