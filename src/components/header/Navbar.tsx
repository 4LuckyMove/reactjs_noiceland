import { FC, MouseEvent } from 'react'
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'
import { INavMenu } from '../../interface/interfaces'
import AddPostModal from './AddPostModal'

interface NavbarProps {
	title: string
	navItems: INavMenu[]
	onClick: (event: MouseEvent<HTMLElement>) => void
}

const Navbar: FC<NavbarProps> = ({ title, navItems, onClick }) => (
	<AppBar component='nav' color={'secondary'}>
		<Container maxWidth='lg' sx={{ p: { lg: '0' } }}>
			<Toolbar sx={{ gap: { xs: '20px', sm: '40px' }, p: { lg: '0' } }}>
				<IconButton
					aria-label='open drawer'
					edge='start'
					onClick={onClick}
					sx={{ mr: 'auto', display: { sm: 'none' } }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					variant='inherit'
					component='div'
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					className='header__logo'
				>
					{title}
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
					{navItems.map(item => (
						<NavLink key={item.name} to={item.link} className='nav-link'>
							<Button
								sx={{
									'&:hover': { boxShadow: 'none' },
								}}
								className='nav-link__item'
							>
								{item.name}
							</Button>
						</NavLink>
					))}
				</Box>
				<AddPostModal />
			</Toolbar>
		</Container>
	</AppBar>
)

export default Navbar
