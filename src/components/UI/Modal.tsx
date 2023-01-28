import {
	FC,
	ReactElement,
	MouseEvent,
	ReactNode,
	ForwardRefExoticComponent,
	RefAttributes,
	MouseEventHandler,
} from 'react'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from '@mui/material'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import { TransitionProps } from '@mui/material/transitions'

interface ModalProps {
	transition?: ForwardRefExoticComponent<
		TransitionProps & {
			children: ReactElement<any, any>
		} & RefAttributes<unknown>
	>
	open: boolean
	onClose: (event: MouseEvent<HTMLElement>) => void
	children?: ReactNode
	title?: string
	idForm?: string
	disabledSubmit?: boolean
	resetForm?: MouseEventHandler<HTMLButtonElement> | undefined
}

const Modal: FC<ModalProps> = ({
	transition,
	open,
	onClose,
	children,
	title,
	idForm,
	disabledSubmit,
	resetForm,
}) => {
	return (
		<Dialog
			open={open}
			TransitionComponent={transition}
			keepMounted
			onClose={onClose}
			fullWidth
			maxWidth='md'
		>
			<DialogTitle
				sx={{
					textTransform: 'uppercase',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
				component='div'
			>
				<Typography variant='h6' component='div' sx={{ letterSpacing: '1px' }}>
					{title}
				</Typography>
				<IconButton onClick={onClose}>
					<DisabledByDefaultIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent dividers>{children}</DialogContent>
			<DialogActions sx={{ padding: '16px 24px', gap: '10px' }}>
				<Button
					variant='outlined'
					onClick={resetForm}
					disabled={disabledSubmit}
				>
					Reset
				</Button>
				<Button
					variant='contained'
					onClick={onClose}
					type='submit'
					form={idForm}
					disabled={disabledSubmit}
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Modal
