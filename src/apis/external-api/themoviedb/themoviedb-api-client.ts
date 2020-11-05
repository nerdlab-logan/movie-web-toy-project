import { AxiosInstance, AxiosRequestConfig } from 'axios'
import HttpClient from '@core/library/http-client'

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_THE_MOVIE_DB_V3_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export default class ThemoviedbApiClient extends HttpClient {
  constructor(apiConfig: AxiosRequestConfig) {
    super({ ...defaultConfig, ...apiConfig })
  }

  onResponseError(error: any, _axios: AxiosInstance): any {
    console.error(error)
    return Promise.reject(error)
  }
}
