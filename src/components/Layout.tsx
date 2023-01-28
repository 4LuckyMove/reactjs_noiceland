import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useAppSelector } from '../hooks/redux'
import NoicelandError from './NoicelandError'
import Loader from './Loader'

const Layout = () => {
	const { isErrorBlogs, isLoadBlogs } = useAppSelector(state => state.blogs)
	
	if (isErrorBlogs) return <NoicelandError err={isErrorBlogs} />

	return (
		<>
			<Header />
			{isLoadBlogs && <Loader />}
			<main className='content'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
