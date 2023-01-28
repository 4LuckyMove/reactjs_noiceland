import { FC, useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TopFooter from './TopFooter'
import MenuFooter from './MenuFooter'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getCategory } from '../../store/action/categoryAction'
import CategoryMenu from './CategoryMenu'
import Subscribe from './Subscribe'

const Footer: FC = () => {
	const dispatch = useAppDispatch()
	const { category } = useAppSelector(state => state.category)

	useEffect(() => {
		dispatch(getCategory())
	}, [dispatch])

	const listMenus = {
		categories: [...category],
		information: [
			{ label: 'about', link: 'about' },
			{ label: 'contact', link: 'contact' },
			{ label: 'terms', link: 'terms' },
		],
		followUs: [
			{ label: 'instagram', link: 'https://www.instagram.com/', target: true },
			{ label: 'facebook', link: 'https://www.facebook.com/', target: true },
			{ label: 'twitter', link: 'https://twitter.com/', target: true },
		],
		template: [
			{ label: 'Image License Info', link: 'image-license-info' },
			{
				label: 'Powered by Web Flow',
				link: 'https://webflow.com/',
				target: true,
			},
		],
	}
	return (
		<Box
			component='footer'
			className='footer'
			sx={{ bgcolor: '#141414', p: '90px 0' }}
		>
			<Container maxWidth='lg' sx={{ p: { lg: '0' } }}>
				<TopFooter title='Noiceland' />
				<Box
					component='div'
					sx={{
						mb: '55px',
						display: 'flex',
						flexWrap: { xs: 'wrap', md: 'nowrap' },
						gap: { xs: '20px', md: '0' },
					}}
				>
					<CategoryMenu label='Categories' menuItems={listMenus.categories} />
					<Subscribe label='Subscribe to newsletter' />
				</Box>
				<Box
					component='div'
					sx={{
						display: 'flex',
						columnGap: { xs: '0.1%', md: '0.1%' },
						rowGap: { xs: '20px', md: '0' },
						flexWrap: { xs: 'wrap', md: 'nowrap' },
					}}
				>
					<MenuFooter label='Information' menuItems={listMenus.information} />
					<MenuFooter label='Follow us' menuItems={listMenus.followUs} />
					<MenuFooter label='Template' menuItems={listMenus.template} />
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
