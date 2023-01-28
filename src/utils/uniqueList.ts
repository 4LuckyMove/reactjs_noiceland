export const uniqueList = (list: string[]) => {
	const unique = list.filter((item: string, index: number) => {
		return list.indexOf(item) === index
	})
	return unique
}
