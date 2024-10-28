import axios from 'axios'
import { getItem } from '@/helpers/persistanceStorage'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use((config) => {
  let token = getItem('accessToken')
  let authToken = token ? `Token ${token}` : ''
  config.headers.Authorization = authToken
  return config
})

export default axios
