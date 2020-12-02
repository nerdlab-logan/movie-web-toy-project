import { FC, HTMLAttributes } from 'react'
import * as S from './styled'

interface BaseProps {
  posterImagePath: string
  title: string
  releaseDate: string
  voteAverage: number
}

export type Props = BaseProps & Omit<HTMLAttributes<any>, 'type' | 'onClick'>

const MovieCarouselCard: FC<Props> = ({ posterImagePath, releaseDate, title, voteAverage, ...rest }) => {
  return (
    <S.MovieCard {...rest}>
      <S.Poster src={posterImagePath} />
      <S.InfoArea>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>{releaseDate}</S.ReleaseDate>
        <S.VoteAverage>★ {voteAverage}</S.VoteAverage>
      </S.InfoArea>
    </S.MovieCard>
  )
}

export default MovieCarouselCard
