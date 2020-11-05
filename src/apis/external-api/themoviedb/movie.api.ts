import { AxiosRequestConfig } from 'axios'

import ThemoviedbApiClient from '@/apis/external-api/themoviedb/themoviedb-api-client'

class MovieApi extends ThemoviedbApiClient {
  constructor(apiConfig: AxiosRequestConfig) {
    super(apiConfig)
  }

  getNowPlaying(): Promise<any> {
    return this.get('/movie/now_playing')
  }
}
