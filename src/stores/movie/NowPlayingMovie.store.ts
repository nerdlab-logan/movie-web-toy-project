import { makeAutoObservable } from 'mobx'

import MovieApi from '@api/external-api/themoviedb/movie.api'

import MovieModel from './model/movie.model'
import { ISO_3166_1 } from '@core/constants/code/language/ISO_3166_1'
import { ISO_639_1 } from '@core/constants/code/language/ISO-639-1'

class NowPlayingMovieStore {
  movieList: MovieModel[] = []
  isFetching = false

  constructor() {
    makeAutoObservable(this)
  }

  fetch = async () => {
    const responseData = await MovieApi.getNowPlaying({ language: ISO_639_1.ko, page: 1, region: ISO_3166_1.Korea })
    console.log(responseData)
  }
}

export default NowPlayingMovieStore
