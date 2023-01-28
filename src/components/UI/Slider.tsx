import { FC } from 'react'
// import Swiper core and required modules
import { Pagination, A11y, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ISlider } from '../../interface/interfaces'

const Slider: FC<ISlider> = ({ data }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={20}
			slidesPerView={1}
			navigation
		>
			{data.map(slide => (
				<SwiperSlide key={slide.id} title={slide.title}>
					<Card
						sx={{
							maxHeight: {
								xs: 'min-content',
								md: '468px',
							},
							maxWidth: '100%',
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							alignItems: 'flex-start',
							gap: { xs: '30px', md: '51px' },
							boxShadow: 'none',
							bgcolor: '#fff',
						}}
					>
						<CardMedia
							component='img'
							image={slide.imageURL}
							alt={slide.title}
							sx={{
								mt: { md: 'auto', lg: 'none' },
								mb: { md: 'auto', lg: 'none' },
								maxHeight: { xs: '468px', lg: '100%' },
								maxWidth: { xs: '100%', md: '50%', lg: '721px' },
							}}
						/>
						<CardContent
							sx={{
								maxWidth: { xs: '100%', md: '429px' },
								p: '5px 0',
							}}
						>
							<Typography variant='body2' component='p' sx={{ mb: '18px' }}>
								{slide.category}
							</Typography>
							<Typography
								variant='h1'
								sx={{ mb: '27px', textTransform: 'uppercase' }}
							>
								{slide.title}
							</Typography>
							<Typography
								variant='body1'
								sx={{
									color: '#666',
									mb: { xs: '27px', lg: '53px' },
									maxWidth: { xs: '100%', md: '419px' },
								}}
							>
								{slide.description}
							</Typography>
							<Typography
								variant='caption'
								sx={{ textTransform: 'uppercase' }}
							>{`by ${slide.author}`}</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default Slider
