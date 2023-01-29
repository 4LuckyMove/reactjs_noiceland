import axios from 'axios'

export default axios.create({
	baseURL: 'https://json-server-noiceland.herokuapp.com/',
	headers: { 'X-Custom-Header': 'noiceland' },
})
