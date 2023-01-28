import { FC } from 'react'
import { Box } from '@mui/material'
import { INavMenu } from '../../interface/interfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { isOpenAndCloseBurger } from '../../store/slice/isActiveSlice'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

interface HeaderProps {
	window?: () => Window
}

const drawerWidth = 240
const navItems: INavMenu[] = [
	{ name: 'home', link: '/' },
	{ name: 'blogs', link: 'blogs' },
	{ name: 'about', link: 'about' },
	{ name: 'adding', link: 'adding' },
]

const Header: FC<HeaderProps> = props => {
	const { window } = props
	const dispatch = useAppDispatch()
	const { isShowBurger } = useAppSelector(state => state.isActive)
	const handleDrawerToggle = () => dispatch(isOpenAndCloseBurger())

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box
			sx={{ display: 'flex', minHeight: '64px' }}
			className='header'
			component='header'
		>
			<Navbar
				title='Noiceland'
				navItems={navItems}
				onClick={handleDrawerToggle}
			/>
			<MobileNavbar
				title='Noiceland'
				container={container}
				open={isShowBurger}
				onClose={handleDrawerToggle}
				drawerWidth={drawerWidth}
				navItems={navItems}
			/>
		</Box>
	)
}

export default Header
