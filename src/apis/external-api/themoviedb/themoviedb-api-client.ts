import { AxiosInstance, AxiosRequestConfig } from 'axios'
import HttpClient from '@core/library/http-client'

const defaultConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_THE_MOVIE_DB_V3_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_THE_MOVIE_DB_AUTH_BEARER}`,
  },
  withCredentials: false,
}

export default class ThemoviedbApiClient extends HttpClient {
  constructor(apiConfig: AxiosRequestConfig) {
    super({ ...defaultConfig, ...apiConfig })
  }

  onResponseError(error: any, _axios: AxiosInstance): any {
    return super.onResponseError(error, _axios)
  }
}
