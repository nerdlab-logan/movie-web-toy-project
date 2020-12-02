import { FC } from 'react'
import Link from 'next/link'
import * as S from './styled'

interface Props {
  href: string
}

const LogoButton: FC<Props> = ({ href }) => {
  return (
    <Link passHref={true} href={href}>
      <S.Logo>
        <S.LogoImage src="https://i1.wp.com/www.softwarert.com/wp-content/uploads/2012/06/short-linkedin-url.png?ssl=1" />
      </S.Logo>
    </Link>
  )
}

export default LogoButton
