import { FC, RefObject } from 'react'
import { observer } from 'mobx-react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as S from './styled'
import MovieCarouselCard from '@ui/molecules/cards/movie-carousel-card'

import MovieModel from '@store/movie/model/movie.model'

interface Props {
  title: string
  movies: MovieModel[]
  slidesPerView?: number
}

const MainCarousel: FC<Props> = observer(({ title, movies, slidesPerView }) => {
  const MovieCarousel = ({ movies }: { movies: MovieModel[] }) => {
    const [sliderRef] = useKeenSlider({ slidesPerView: slidesPerView || 5, spacing: 12 })

    return (
      <div ref={sliderRef as RefObject<HTMLDivElement>} className="keen-slider" style={{ paddingBottom: '10px' }}>
        {movies.map((movie) => (
          <MovieCarouselCard
            key={movie.id}
            className={'keen-slider__slide'}
            title={movie.title}
            releaseDate={movie.releaseDate}
            voteAverage={movie.voteAverage}
            posterImagePath={movie.getPosterImageUrl('w500')}
          />
        ))}
      </div>
    )
  }

  return (
    <S.Container>
      <S.TitleArea>
        <S.Title>{title}</S.Title>
      </S.TitleArea>
      <S.ContentArea>
        <MovieCarousel movies={movies} />
      </S.ContentArea>
    </S.Container>
  )
})

export default MainCarousel
