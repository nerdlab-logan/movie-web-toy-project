import { FC } from 'react'
import { observer } from 'mobx-react'
import * as S from './styled'
import ReactLoading from 'react-loading'

import Header from './elements/header'
import Footer from './elements/footer'
import { useGlobalStore } from '@core/hooks/use-global-stores'

const MainLayout: FC = observer(({ children }) => {
  const { LayoutStore } = useGlobalStore()

  return (
    <S.RootWrapper>
      <S.MainContainer>
        <Header />
        <S.Content isLoading={LayoutStore.contentLoadingToggle}>
          {LayoutStore.contentLoadingToggle ? <ReactLoading type={'spinningBubbles'} color={'#fa7b7b'} /> : children}
        </S.Content>
        <Footer />
      </S.MainContainer>
    </S.RootWrapper>
  )
})

export default MainLayout
