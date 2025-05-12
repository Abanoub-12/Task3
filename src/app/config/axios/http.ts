import appConfig from 'constants/appConfig'
import axios from 'axios'
import { decamelizeKeys } from 'humps'
import { interceptors } from './interseptors'

export const http = axios.create({
  baseURL: appConfig.api.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(async config => {
  config.params = decamelizeKeys(config.params)

  if (config.data && config.headers['Content-Type'] === 'application/json') {
    config.data = decamelizeKeys(config.data)
  }

  config.headers = Object.assign(config.headers)

  return config
})

http.interceptors.response.use(interceptors.onSuccess, interceptors.onError)
