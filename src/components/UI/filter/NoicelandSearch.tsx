import { ChangeEvent, FC } from 'react'
import styled from '@mui/material/styles/styled'
import { alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { NavigateOptions, URLSearchParamsInit } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.primary.main, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))

interface INoicelandSearchProps {
	filterState: URLSearchParams
	setFilterState: (
		nextInit?:
			| URLSearchParamsInit
			| ((prev: URLSearchParams) => URLSearchParamsInit)
			| undefined,
		navigateOpts?: NavigateOptions | undefined
	) => void
}

const NoicelandSearch: FC<INoicelandSearchProps> = ({
	filterState,
	setFilterState,
}) => {
	const valueFilter = filterState.get('q') || ''
	const changeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()	
		if (event.target.value.length) {
			filterState.set('q', event.target.value)
		} else {
			filterState.delete('q')
		}
		setFilterState(filterState)
	}

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
				onChange={changeSearchHandler}
				name='q'
				value={valueFilter}
			/>
		</Search>
	)
}

export default NoicelandSearch
