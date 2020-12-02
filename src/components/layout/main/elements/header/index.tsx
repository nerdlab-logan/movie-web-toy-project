import { FC } from 'react'
import * as S from './styled'
import LogoButton from '@ui/atoms/buttons/logo-button'

const Header: FC = () => {
  return (
    <S.Header>
      <S.LogoArea>
        <LogoButton href="/" />
      </S.LogoArea>
    </S.Header>
  )
}

export default Header
