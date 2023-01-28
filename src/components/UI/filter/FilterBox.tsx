import { Dispatch, FC, SetStateAction } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FilterSelect from './FilterSelect'
import { useAppSelector } from '../../../hooks/redux'
import { LimitPostSelect } from '../../content/LimitPostSelect'
import { NavigateOptions, URLSearchParamsInit } from 'react-router-dom'

interface FilterBoxProps {
	filterState: URLSearchParams
	setFilterState: (
		nextInit?:
			| URLSearchParamsInit
			| ((prev: URLSearchParams) => URLSearchParamsInit),
		navigateOpts?: NavigateOptions
	) => void
	limitState: string
	setLimitState: Dispatch<SetStateAction<string>>
}

const FilterBox: FC<FilterBoxProps> = ({
	filterState,
	setFilterState,
	limitState,
	setLimitState,
}) => {
	const { category } = useAppSelector(state => state.category)
	const { author } = useAppSelector(state => state.author)
	const authorList = author.map(item => item.name + ' ' + item.lastName)
	const categoryList = category.map(item => item.name)

	return (
		<Box component='div' sx={{ m: '50px 0' }}>
			<Typography variant='body2'>Filter</Typography>
			<Box
				component='div'
				sx={{
					mt: '20px',
					display: 'flex',
					alignItems: 'center',
					flexWrap: { xs: 'wrap', md: 'nowrap' },
					gap: '20px',
					width: '100%',
				}}
			>
				<LimitPostSelect
					label='Count posts'
					value={limitState}
					setValue={setLimitState}
				/>
				<FilterSelect
					title='category'
					data={categoryList}
					valueFilter={filterState}
					setValueFilter={setFilterState}
				/>
				<FilterSelect
					title='author'
					data={authorList}
					valueFilter={filterState}
					setValueFilter={setFilterState}
				/>
			</Box>
		</Box>
	)
}

export default FilterBox
