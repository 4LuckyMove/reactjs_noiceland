import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NamePage from '../components/content/NamePage'
import Typography from '@mui/material/Typography'

const ImageLicenseInfo = () => {
	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<NamePage name='Image License Info' />
				<Box component='div'>
					<Typography variant='h2' sx={{ py: '50px' }}>
						What's a Terms and Conditions Agreement?
					</Typography>
					<Typography variant='body1'>
						Note that you'll sometimes see this agreement referred to as a Terms
						of Use, User Agreement or Terms of Service agreement. These terms
						are interchangeable and refer to the same type of agreement.
						<br /> <br />
						The purpose of a Terms and Conditions agreement is to{' '}
						<strong>prevent misunderstandings</strong> between the business
						owner (you), and the consumer. The agreement helps you:{' '}
						<li className='terms__li'>Protect your intellectual property</li>
						<li className='terms__li'>Avoid website abuse</li>
						<li className='terms__li'>
							Define the limits of your legal obligations to the consumer
						</li>
						<br />
						Essentially, the T&C helps you run your business{' '}
						<strong>more effectively</strong> and with greater peace of mind.
						<br /> <br />
						This agreement forms the basis of an enforceable legal relationship.
						It tells anyone browsing your website, whether they are a casual
						visitor or an active client, what their{' '}
						<strong>legal responsibilities and rights</strong> are.
						<br /> <br />
						It also gives you, as the business owner and service provider,
						authority over certain undesirable things that a consumer may do on
						your website. However, let's consider the specific reasons why
						business owners should always include a Terms and Conditions
						agreement on their website.
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default ImageLicenseInfo
