import React from 'react'
import * as S from './styled'

import Header from './elements/header'
import Footer from './elements/footer'

const MainLayout: React.FC = ({ children }) => {
  return (
    <S.RootWrapper>
      <S.MainContainer>
        <Header />
        <S.Content>{children}</S.Content>
        <Footer />
      </S.MainContainer>
    </S.RootWrapper>
  )
}

export default MainLayout
