import { FC, ReactElement } from 'react'
import * as S from './styled'

import MainLayout from '@layout/main'

interface Props {
  MovieCarousels: ReactElement[]
}

const MainTemplate: FC<Props> = ({ MovieCarousels }) => {
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
