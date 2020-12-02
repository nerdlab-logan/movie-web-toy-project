import { ISO_639_1_Type } from '@core/constants/code/language/ISO-639-1'
import { ISO_3166_1_Type } from '@core/constants/code/language/ISO_3166_1'

export default interface GetPopularMoviesRequest {
  language?: ISO_639_1_Type
  page?: number
  region?: ISO_3166_1_Type
}
