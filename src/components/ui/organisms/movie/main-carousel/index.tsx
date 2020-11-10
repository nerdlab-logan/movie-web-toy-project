import React from 'react'
import { observer } from 'mobx-react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as S from './styled'
import MovieCarouselCard from '@ui/molecules/cards/movie-carousel-card'

import MovieModel from '@store/movie/model/movie.model'

interface Props {
  title: string
  isLoading: boolean
  movies: MovieModel[]
  slidesPerView?: number
}

const MainCarousel = observer(({ title, isLoading, movies, slidesPerView }: Props) => {
  const MovieCarousel = ({ movies }: { movies: MovieModel[] }) => {
    const [sliderRef] = useKeenSlider({ slidesPerView: slidesPerView || 5, spacing: 12 })

    return (
      <div ref={sliderRef as React.RefObject<HTMLDivElement>} className="keen-slider" style={{ paddingBottom: '10px' }}>
        {movies.map((movie) => (
          <MovieCarouselCard
            key={movie.id}
            className={'keen-slider__slide'}
            title={movie.title}
            releaseDate={movie.releaseDate}
            voteAverage={movie.voteAverage}
            posterImagePath={movie.getPosterImageUrl('w185')}
          />
        ))}
      </div>
    )
  }

  return (
    <S.Container>
      <div style={{ height: '100%' }}>
        <S.TitleArea>
          <S.Title>{title}</S.Title>
        </S.TitleArea>
        <S.ContentArea>{isLoading ? <div>로딩중</div> : <MovieCarousel movies={movies} />}</S.ContentArea>
      </div>
    </S.Container>
  )
})

export default MainCarousel
