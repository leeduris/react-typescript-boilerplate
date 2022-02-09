import axios from 'axios'
import config from 'config'

axios.defaults.baseURL = config.service.baseURL || ''
axios.defaults.timeout = 2500

axios.interceptors.request.use((axios_config: any) => {
    axios_config.headers.token = localStorage.getItem('token')
    return axios_config
}, (error) => {
    return Promise.reject(error)
})

export default axios



