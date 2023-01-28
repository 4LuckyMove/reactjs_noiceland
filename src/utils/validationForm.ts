import * as yup from 'yup'

// eslint-disable-next-line
export const websiteRegExp =
	// eslint-disable-next-line
	/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi

export const schema = yup.object().shape({
	title: yup
		.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Title Required'),
	description: yup
		.string()
		.min(2, 'Too Short!')
		.max(500, 'Too Long!')
		.required('Description Required'),
	imageURL: yup
		.string()
		.matches(websiteRegExp, 'Image URL is not valid')
		.required('Image URL Required'),
	author: yup.string().required('Author Required').nullable(),
	category: yup.string().required('Category Required').nullable(),
	isSlide: yup.boolean(),
	isFeatured: yup.boolean(),
})

export const subscribeSchema = yup.object().shape({
	email: yup
		.string()
		.email('Email is not valid'),
})

export const authorSchema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Name Required'),
	lastName: yup
		.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Last Name Required'),
	avatarURL: yup
		.string()
		.matches(websiteRegExp, 'Avatar URL is not valid')
		.required('Avatar URL Required'),
})

export const categorySchema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Too Short!')
		.max(100, 'Too Long!')
		.required('Name Required'),
})