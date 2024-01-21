import axios from 'axios'

const httpClient = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
})

export default httpClient
