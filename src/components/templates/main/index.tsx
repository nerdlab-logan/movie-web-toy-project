import React from 'react'
import * as S from './styled'

import MainLayout from '@layout/main'

interface Props {
  CountComponent: React.ReactElement
}

const MainTemplate = ({ CountComponent }: Props) => {
  return (
    <MainLayout>
      <S.TemplateWrapper>
        <S.ContentArea>{CountComponent}</S.ContentArea>
      </S.TemplateWrapper>
    </MainLayout>
  )
}

export default MainTemplate
