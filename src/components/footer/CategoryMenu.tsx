import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ICategory, ITitleFooter } from '../../interface/interfaces'
import { Link } from 'react-router-dom'
import { scrollTop } from '../../utils/scrollTop'

interface CategoryMenuProps extends ITitleFooter {
	menuItems: ICategory[]
}

const CategoryMenu: FC<CategoryMenuProps> = ({ label, menuItems }) => {
	return (
		<Box component='div' sx={{ flexGrow: 1 }}>
			<Typography variant='subtitle2' sx={{ mb: '20px' }}>
				{label}
			</Typography>
			<Box
				component='div'
				sx={{
					display: 'grid',
					rowGap: '15px',
					gridTemplateColumns: {
						xs: 'repeat(1, 1fr)',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(4, 1fr)',
					},
				}}
			>
				{menuItems.map(item => (
					<Link
						key={item.id}
						to={`blogs?category=${item.name}`}
						onClick={scrollTop}
					>
						<Typography
							variant='button'
							sx={{
								color: '#fff',
								textTransform: 'capitalize',
								'&:hover': {
									color: '#666',
								},
							}}
						>
							{item.name}
						</Typography>
					</Link>
				))}
			</Box>
		</Box>
	)
}

export default CategoryMenu
