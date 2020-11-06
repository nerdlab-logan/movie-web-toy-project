import { AxiosRequestConfig } from 'axios'

import ThemoviedbApiClient from '@/apis/external-api/themoviedb/themoviedb-api-client'
import GetNowPlayingRequest from './request/get-now-playing.request'
import GetNowPlayingResponse from './response/get-now-playing.response'

import { ISO_639_1 } from '@core/constants/code/language/ISO-639-1'
import { ISO_3166_1 } from '@core/constants/code/language/ISO_3166_1'

class MovieApi extends ThemoviedbApiClient {
  constructor(apiConfig: AxiosRequestConfig) {
    super(apiConfig)
  }

  async getNowPlaying({
    language = ISO_639_1.ko,
    page = 1,
    region = ISO_3166_1.Korea,
  }: GetNowPlayingRequest): Promise<GetNowPlayingResponse> {
    return await this.get('/movie/now_playing', {
      language: language.code,
      page: page,
      region: region.alpha2,
    })
  }
}

export default new MovieApi({})
