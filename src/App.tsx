import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom'
import Home from './pages/HomePage'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage'
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import BlogsPage from './pages/BlogsPage'
import DetailPage from './pages/DetailPage'
import EditPage from './pages/EditPage'
import DeletePage from './pages/DeletePage'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import ImageLicenseInfo from './pages/ImageLicenseInfo'
import AboutPage from './pages/AboutPage'
import AddingPage from './pages/AddingPage'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
			<Route path='blogs'>
				<Route index element={<BlogsPage />} />
				<Route path=':id'>
					<Route index element={<DetailPage />} />
					<Route path='edit' element={<EditPage />} />
					<Route path='delete' element={<DeletePage />} />
				</Route>
			</Route>
			<Route path='about' element={<AboutPage />} />
			<Route path='adding' element={<AddingPage />} />
			<Route path='contact' element={<ContactPage />} />
			<Route path='terms' element={<TermsPage />} />
			<Route path='image-license-info' element={<ImageLicenseInfo />} />
			<Route path='*' element={<NotFoundPage />} />
		</Route>
	)
)

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
