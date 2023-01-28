import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import NamePage from '../components/content/NamePage'
import Typography from '@mui/material/Typography'

const TermsPage = () => {
	return (
		<Box component='div' sx={{ pt: '50px', pb: '65px' }}>
			<Container
				maxWidth='lg'
				sx={{
					pr: { lg: '0' },
					pl: { lg: '0' },
				}}
			>
				<NamePage name='Terms' />
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
					<Typography variant='h2' sx={{ py: '50px' }}>
						The Benefits of Having a Terms and Conditions Agreement
					</Typography>
					<Typography variant='body1'>
						We can't stress this enough - a T&C isn't mandatory, but you should
						treat it like it is. <strong>Here's why</strong>.
						<br /> <br />
						<li className='terms__li'>
							You can decide which country's laws apply to govern the agreement.
							This is otherwise known as choosing the jurisdiction. You will
							generally choose the country where the website, or business, is
							based.
						</li>
						<li className='terms__li'>
							You can <strong>remove or delete abusive accounts</strong>. For
							example, say you run a social media platform and explain that
							people who post inflammatory, abusive, or explicit content will be
							blocked from the service. Someone posts abusive content. You can
							block their account without worry, because you can rely on your
							Terms and Conditions agreement.
						</li>
						<li className='terms__li'>
							You can <strong>limit your responsibility</strong>. You can
							include disclaimer clauses in your agreement that say you're not
							liable for third party content, and you don't endorse it. You can
							also say that you're not responsible for mistakes and typos, or
							content uploaded by users which other users may find offensive.
						</li>
						<li className='terms__li'>
							You can <strong>manage a user's expectations</strong> of your
							website or platform. When the terms are clear, users know what
							they can and cannot expect from you.
						</li>
						<li className='terms__li'>
							You can set your{' '}
							<strong>own site rules and the consequences for violating</strong>{' '}
							these rules, within legal limits. You can't contract out of
							certain rules such as the law of negligence.
						</li>
						<li className='terms__li'>
							It's vital that you protect your{' '}
							<strong>intellectual property rights</strong>. By setting out what
							your rights are in the Terms and Conditions agreement, you can
							take action against users who infringe your rights. It should be
							clear that the logo, brand, and content belong to you.
						</li>
					</Typography>
					<Typography variant='h2' sx={{ py: '50px' }}>
						Conclusion
					</Typography>
					<Typography variant='body1'>
						Although a Terms and Conditions agreement is not mandatory, it is
						something that virtually all websites have and you should treat it
						as a legal requirement because it's that beneficial to have.
						<br />
						<br />
						The aim of a Terms and Conditions is to:
						<li className='terms__li'>Limit your liability</li>
						<li className='terms__li'>
							Set and manage user rules and restrictions
						</li>
						<li className='terms__li'>
							Outline important terms your users need to know and that you need
							to declare
						</li>
						<br />
						Every Terms and Conditions should have, at minimum:
						<li className='terms__li'>A termination clause</li>
						<li className='terms__li'>A clause limiting liability</li>
						<li className='terms__li'>
							A clause that outlines prohibited activities
						</li>
						<li className='terms__li'>
							A clause explaining that you are not responsible for third party
							content or activities
						</li>
						<br />
						With a carefully crafted Terms and Conditions agreement you can
						reduce your time spent on consumer enquiries and avoid legal
						misunderstandings. However, you must also ensure that users{' '}
						<strong>know</strong> they are bound by these Terms, or else you
						can't enforce them.
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default TermsPage