import React, { useEffect, useState } from 'react'
import { useLocalObservable, observer } from 'mobx-react'

import MainTemplate from '@template/main'
import MainCarousel from '@ui/organisms/movie/main-carousel'

import NowPlayingMovieStore from '@store/movie/NowPlayingMovie.store'

const IndexPage = observer(() => {
  const nowPlayingMovieStore = useLocalObservable(() => new NowPlayingMovieStore())
  const [isFetchNowPlayingMovie, setIsFetchNowPlayingMovie] = useState<boolean>(true)

  useEffect(() => {
    nowPlayingMovieStore.fetch().then((value) => {
      setIsFetchNowPlayingMovie(false)
    })
  }, [])

  return (
    <MainTemplate
      MovieCarousels={[
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
