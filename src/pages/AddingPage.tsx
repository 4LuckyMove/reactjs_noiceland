import { FC, SyntheticEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NamePage from '../components/content/NamePage'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SubscribeTable from '../components/UI/table/subscribe/SubscribeTable'
import CrudTableAuthor from '../components/UI/table/author/CrudTableAuthor'
import CrudTableCategory from '../components/UI/table/category/CrudTableCategory'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Box component='div'>{children}</Box>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const AddingPage: FC = () => {
	const [valueTab, setValueTab] = useState(0)

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValueTab(newValue)
	}
	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<NamePage name='Adding: author, category and subscribe' />
				<Box sx={{ width: '100%', pt: '40px' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={valueTab} onChange={handleChange}>
							<Tab label='Subscribe' {...a11yProps(0)} />
							<Tab label='Category' {...a11yProps(1)} />
							<Tab label='Author' {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={valueTab} index={0}>
						<SubscribeTable />
					</TabPanel>
					<TabPanel value={valueTab} index={1}>
						<CrudTableCategory />
					</TabPanel>
					<TabPanel value={valueTab} index={2}>
						<CrudTableAuthor />
					</TabPanel>
				</Box>
			</Container>
		</Box>
	)
}

export default AddingPage
