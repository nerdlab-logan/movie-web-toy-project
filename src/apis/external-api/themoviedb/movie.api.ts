import { AxiosRequestConfig } from 'axios'

import ThemoviedbApiClient from '@/apis/external-api/themoviedb/themoviedb-api-client'
import GetNowPlayingMoviesRequest from 'src/apis/external-api/themoviedb/request/get-now-playing-movies.request'
import GetNowPlayingResponse from './response/get-now-playing.response'

import { ISO_639_1 } from '@core/constants/code/language/ISO-639-1'
import { ISO_3166_1 } from '@core/constants/code/language/ISO_3166_1'
import GetPopularMoviesRequest from '@api/external-api/themoviedb/request/get-popular.request'
import GetPopularMoviesResponse from '@api/external-api/themoviedb/response/get-popular.response'

class MovieApi extends ThemoviedbApiClient {
  constructor(apiConfig: AxiosRequestConfig) {
    super(apiConfig)
  }

  async getNowPlayingMovies({
    language = ISO_639_1.ko,
    page = 1,
    region = ISO_3166_1.Korea,
  }: GetNowPlayingMoviesRequest): Promise<GetNowPlayingResponse> {
    return await this.get('/movie/now_playing', {
      language: language.code,
      page: page,
      region: region.alpha2,
    })
  }

  async getPopularMovies({
    language = ISO_639_1.ko,
    page = 1,
    region = ISO_3166_1.Korea,
  }: GetPopularMoviesRequest): Promise<GetPopularMoviesResponse> {
    return await this.get('/movie/popular', {
      language: language.code,
      page: page,
      region: region.alpha2,
    })
  }
}

export default new MovieApi({})
