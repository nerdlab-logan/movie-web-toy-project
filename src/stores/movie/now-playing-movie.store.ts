import { makeAutoObservable, runInAction } from 'mobx'

import MovieApi from '@api/external-api/themoviedb/movie.api'

import MovieModel from './model/movie.model'
import { ISO_3166_1 } from '@core/constants/code/language/ISO_3166_1'
import { ISO_639_1 } from '@core/constants/code/language/ISO-639-1'

class NowPlayingMovieStore {
  movieList: MovieModel[] = []
  currentPage = 0
  totalPage = 0
  totalCount = 0
  isFetching = false

  constructor() {
    makeAutoObservable(this)
  }

  fetch = async () => {
    if (this.isFetching) return

    this.isFetching = true

    try {
      const responseData = await MovieApi.getNowPlayingMovies({
        language: ISO_639_1.ko,
        page: 1,
        region: ISO_3166_1.Korea,
      })

      const movies = responseData.results.map<MovieModel>(
        (data) =>
          new MovieModel({
            id: data.id,
            isAdult: data.adult,
            overview: data.overview,
            posterPath: data.poster_path,
            releaseDate: data.release_date,
            title: data.title,
            voteAverage: data.vote_average,
          }),
      )

      runInAction(() => {
        this.movieList = movies
        this.totalCount = responseData.total_results
        this.totalPage = responseData.total_pages
        this.currentPage = responseData.page
      })
    } catch (e) {
      console.error(e)
    } finally {
      runInAction(() => {
        this.isFetching = false
      })
    }
  }
}

export default NowPlayingMovieStore
