import { useEffect } from 'react'
import { NextPage } from 'next'
import { observer, useLocalObservable } from 'mobx-react'

import MainTemplate from '@template/main'
import MainCarousel from '@ui/organisms/movie/main-carousel'

import NowPlayingMovieStore from '@store/movie/now-playing-movie.store'
import PopularMovieStore from '@store/movie/popular-movie.store'
import { useGlobalStore } from '@core/hooks/use-global-stores'

const IndexPage: NextPage = observer(() => {
  const { LayoutStore } = useGlobalStore()
  const popularMovieStore = useLocalObservable(() => new PopularMovieStore())
  const nowPlayingMovieStore = useLocalObservable(() => new NowPlayingMovieStore())

  useEffect(() => {
    LayoutStore.contentLoadingOn()
    Promise.all([popularMovieStore.fetch(), nowPlayingMovieStore.fetch()]).then(() => LayoutStore.contentLoadingOff())
  }, [])

  return (
    <MainTemplate
      MovieCarousels={[
        <MainCarousel key="popular" title="인기 있는 영화" slidesPerView={6} movies={popularMovieStore.movieList} />,
        <MainCarousel
          key="nowPlaying"
          title="현재 상영 영화"
          slidesPerView={6}
          movies={nowPlayingMovieStore.movieList}
        />,
      ]}
    />
  )
})
export default IndexPage
