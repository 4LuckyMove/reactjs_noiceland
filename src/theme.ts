import createTheme from '@mui/material/styles/createTheme'
import type {} from '@mui/x-data-grid/themeAugmentation'

const theme = createTheme({
	palette: {
		primary: {
			main: '#000000',
			light: '#333333',
			dark: '#141414',
		},
		secondary: {
			main: '#ffffff',
		},
		error: {
			main: '#f44336',
		},
		success: {
			main: '#66bb6a',
		},
		text: {
			primary: '#000000',
			secondary: '#333333',
			disabled: '#999999',
		},
		divider: '#e6e6e6',
		background: {
			default: '#ffffff',
			paper: '#fafafa',
		},
	},
	typography: {
		fontSize: 16,
		fontWeightLight: 400,
		fontFamily: 'Libre Franklin',
		h1: {
			fontSize: 36,
			fontWeight: 400,
			fontFamily: 'Tenor Sans',
		},
		h2: {
			fontSize: 18,
			fontWeight: 700,
			textTransform: 'uppercase',
			letterSpacing: '1px',
		},
		subtitle1: {
			fontFamily: 'Tenor Sans',
			fontSize: 20,
			lineHeight: 1.2,
		},
		subtitle2: {
			fontSize: 10,
			lineHeight: 1.2,
			letterSpacing: 1,
			color: '#666',
			textTransform: 'uppercase',
		},
		body1: {
			fontSize: 16,
			lineHeight: 1.5,
		},
		button: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 1.71,
		},
		caption: {
			fontSize: 10,
			lineHeight: 1.2,
			fontWeight: 700,
			letterSpacing: 1,
		},
		body2: {
			fontSize: 10,
			lineHeight: 1.2,
			letterSpacing: 1,
			color: '#999',
			textTransform: 'uppercase',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': { boxShadow: '0 0 5px 2px rgba(0, 0, 0, .8)' },
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: '#000',
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					color: '#f44336',
				},
			},
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					fontSize: '14px',
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontSize: '16px',
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontSize: 16,
					fontWeightLight: 400,
					fontFamily: 'Libre Franklin',
					lineHeight: 1,
				},
			},
		},
		MuiDataGrid: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontSize: 16,
					fontWeightLight: 400,
					fontFamily: 'Libre Franklin',
					lineHeight: 1,
					color: '#000',
				},
				columnHeaders: {
					borderBottom: '1px solid #000',
				},
				columnHeader: {
					':focus-within': { outline: 'none' },
					':focus': { outline: 'none' },
				},
				cell: {
					':focus-within': { outline: 'none' },
					':focus': { outline: 'none' },
				},
				row: {
					':hover': { backgroundColor: 'rgba(0, 0, 0, .2)' },
					':active': { backgroundColor: 'rgba(0, 0, 0, .2)' },
					borderBottom: '1px solid #000',
				},
				editInputCell: {
					fontSize: 16,
					fontWeightLight: 400,
					fontFamily: 'Libre Franklin',
					lineHeight: 1,
					color: 'rgba(0, 0, 0, .6)',
					':focus-within': { outline: 'none', },
					':focus': { outline: 'none', },
				},
			},
		},
	},
})

export default theme
