import { FC } from 'react'
import { FormikProps } from 'formik'
import Box from '@mui/material/Box'
import { IAuthor, ITextFields, ICategory, IPost } from '../../../interface/interfaces'
import NoicelandSelect from './NoicelandSelect'
import NoicelandInput from './NoicelandInput'
import NoicelandCheckbox from './NoicelandCheckbox'

interface FormProps {
	id: string
	formik: FormikProps<IPost>
	dataAuthors: IAuthor[]
	dataCategory: ICategory[]
}

const NoicelandForm: FC<FormProps> = ({
	id,
	formik,
	dataAuthors,
	dataCategory,
}) => {
	const textFields: ITextFields[] = [
		{
			id: 'title',
			label: 'Title',
			multiline: false,
			value: formik.values.title,
			error: formik.errors.title,
			touched: formik.touched.title,
		},
		{
			id: 'description',
			label: 'Description',
			multiline: true,
			value: formik.values.description,
			error: formik.errors.description,
			touched: formik.touched.description,
		},
		{
			id: 'imageURL',
			label: 'Image URL',
			multiline: false,
			value: formik.values.imageURL,
			error: formik.errors.imageURL,
			touched: formik.touched.imageURL,
		},
	]

	const authors = dataAuthors.map(item => item.name + ' ' + item.lastName)
	const categories = dataCategory.map(item => item.name)

	return (
		<Box
			id={id}
			component='form'
			noValidate
			autoComplete='off'
			onSubmit={formik.handleSubmit}
		>
			<Box component='div'>
				{textFields.map(input => (
					<NoicelandInput
						key={input.id}
						formik={formik}
						id={input.id}
						label={input.label}
						multiline={input.multiline}
						value={input.value}
						touched={input.touched}
						error={input.error}
					/>
				))}
			</Box>
			<Box
				component='div'
				sx={{
					mt: { xs: '16px' },
					display: 'flex',
					alignItems: 'center',
					justifyContent: { sm: 'space-between' },
					flexWrap: { xs: 'wrap', sm: 'nowrap' },
					gap: { xs: '24px' },
				}}
			>
				<NoicelandSelect
					formik={formik}
					id='author'
					label='Author'
					options={authors}
					value={formik.values.author}
					error={formik.errors.author}
					touched={formik.touched.author}
				/>
				<NoicelandSelect
					formik={formik}
					id='category'
					label='Category'
					options={categories}
					value={formik.values.category}
					error={formik.errors.category}
					touched={formik.touched.category}
				/>
			</Box>
			<Box
				component='div'
				sx={{
					mt: '24px',
					mb: '16px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					flexWrap: { xs: 'wrap', sm: 'nowrap' },
					gap: '24px',
				}}
			>
				<NoicelandCheckbox
					id='isSlide'
					label='Slide post'
					onChange={formik.handleChange}
					checked={formik.values.isSlide}
				/>
				<NoicelandCheckbox
					id='isFeatured'
					label='Featured post'
					onChange={formik.handleChange}
					checked={formik.values.isFeatured}
				/>
			</Box>
		</Box>
	)
}

export default NoicelandForm
