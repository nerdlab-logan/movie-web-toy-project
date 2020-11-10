import React from 'react'
import * as S from './styled'

import MainLayout from '@layout/main'

interface Props {
  MovieCarousels: React.ReactElement[]
}

const MainTemplate = ({ MovieCarousels }: Props) => {
  return (
    <MainLayout>
      <S.TemplateWrapper>
        {MovieCarousels.map((component, index) => (
          <S.ContentArea key={index}>{component}</S.ContentArea>
        ))}
      </S.TemplateWrapper>
    </MainLayout>
  )
}

export default MainTemplate
