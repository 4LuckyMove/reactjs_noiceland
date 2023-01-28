import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NamePage from '../components/content/NamePage'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'

const ContactPage = () => {
	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<NamePage name='Contact' />
				<Box component='div'>
					<Typography variant='h2' sx={{ py: '50px' }}>
						Are you a customer who needs help? That’s what the Noiceland is for.
					</Typography>
					<Typography variant='body1'>
						If you’re wondering about an order, our products, or our website,
						shoot them an email at{' '}
						<Link
							underline='hover'
							href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNvwJwWPHgGSfwmqDLfSjXlQstbXMPkgnCWHPwNdSmXtJXTTZZxHWpzHbjxBkhzKxPNtnV'
						>
							support@noiceland.com
						</Link>{' '}
						— the answer might be there already!
					</Typography>
					<Typography variant='body1' sx={{ py: '20px' }}>
						For everything else...
					</Typography>
					<Typography variant='body1'>
						Business + Partnerships:{' '}
						<Link
							underline='hover'
							href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNvwJwWPHgGSfwmqDLfSjXlQstbXMPkgnCWHPwNdSmXtJXTTZZxHWpzHbjxBkhzKxPNtnV'
						>
							brand@noiceland.com
						</Link>
					</Typography>
					<Typography variant='body1' sx={{ py: '20px' }}>
						Press:{' '}
						<Link
							underline='hover'
							href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNvwJwWPHgGSfwmqDLfSjXlQstbXMPkgnCWHPwNdSmXtJXTTZZxHWpzHbjxBkhzKxPNtnV'
						>
							press@noiceland.com
						</Link>
					</Typography>
					<Typography variant='body1'>
						HQ Address: 233 Spring Street, East 10th Floor, New York, NY 10013,
						US
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default ContactPage