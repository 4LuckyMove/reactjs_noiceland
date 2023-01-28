import { FormikErrors, FormikTouched } from "formik"
import { ReactNode } from "react"

export interface IPost {
	id: string
	title: string
	description: string
	category: string
	author: string
	imageURL: string
	dateCreate: string
	dateUpdate: string | null
	isSlide: boolean
	isFeatured: boolean
}

export interface INavMenu {
	link: string
	name: string
}

export interface ITextFields {
	id: string
	label: string
	multiline?: boolean
	value: string | IPost | undefined
	error: string | (FormikErrors<IPost> & ReactNode) | undefined
	touched: boolean | FormikTouched<IPost> | undefined
}

export interface ISlider {
	data: IPost[]
}

export interface IContent extends ISlider {
	maxCountCard?: number
}

export interface IAuthor {
	id: string
	name: string
	lastName: string
	avatarURL: string
}

export interface ICategory {
	id: string
	name: string
}

export interface ITitleFooter {
	label: string
}

export interface ISubscribe {
	id: string
	email: string
	dataCreate: string
}