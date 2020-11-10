import React, { useEffect, useState } from 'react'
import { useLocalObservable, observer } from 'mobx-react'

import MainTemplate from '@template/main'
import MainCarousel from '@ui/organisms/movie/main-carousel'

import NowPlayingMovieStore from '@store/movie/NowPlayingMovie.store'
import PopularMovieStore from '@store/movie/PopularMovie.store'

const IndexPage = observer(() => {
  const popularMovieStore = useLocalObservable(() => new PopularMovieStore())
  const nowPlayingMovieStore = useLocalObservable(() => new NowPlayingMovieStore())
  const [isFetchNowPlayingMovie, setIsFetchNowPlayingMovie] = useState<boolean>(true)
  const [isFetchPopularMovie, setIsFetchPopularMovie] = useState<boolean>(true)

  useEffect(() => {
    nowPlayingMovieStore.fetch().then((value) => {
      setIsFetchNowPlayingMovie(false)
    })

    popularMovieStore.fetch().then(() => {
      setIsFetchPopularMovie(false)
    })
  }, [])

  return (
    <MainTemplate
      MovieCarousels={[
        <MainCarousel
          key="popular"
          title="인기 있는 영화"
          slidesPerView={6}
          movies={popularMovieStore.movieList}
          isLoading={isFetchPopularMovie}
        />,
        <MainCarousel
          key="nowPlaying"
          title="현재 상영 영화"
          slidesPerView={6}
          movies={nowPlayingMovieStore.movieList}
          isLoading={isFetchNowPlayingMovie}
        />,
      ]}
    />
  )
})
export default IndexPage
