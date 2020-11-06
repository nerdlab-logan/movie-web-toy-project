import { makeAutoObservable } from 'mobx'

import { ImageSecureBaseUrl, ImagePosterSize } from '@core/vender/themoviedb/configuration'

interface MovieModelProperties {
  id: number
  title: string
  overview: string
  voteAverage: number
  isAdult: boolean
  posterPath: string | null
  releaseDate: string
}

class MovieModel implements MovieModelProperties {
  id: number
  isAdult: boolean
  overview: string
  posterPath: string | null
  releaseDate: string
  title: string
  voteAverage: number

  constructor(args: MovieModelProperties) {
    makeAutoObservable(this, { id: false, getPosterImageUrl: false })
    this.id = args.id
    this.isAdult = args.isAdult
    this.overview = args.overview
    this.posterPath = args.posterPath
    this.releaseDate = args.releaseDate
    this.title = args.title
    this.voteAverage = args.voteAverage
  }

  getPosterImageUrl = (size: ImagePosterSize) => {
    return `${ImageSecureBaseUrl}${size}${this.posterPath}`
  }
}

export default MovieModel
