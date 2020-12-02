import { FC } from 'react'
import * as S from './styled'

interface Props {
  count: number
  onIncreaseButtonClick: () => void
  onDecreaseButtonClick: () => void
}

const CounterCard: FC<Props> = ({ count, onIncreaseButtonClick, onDecreaseButtonClick }) => {
  return (
    <>
      <S.CounterCard>
        <S.ResultArea>
          <S.ResultTitle>Count</S.ResultTitle>
          <S.ResultValue>{count}</S.ResultValue>
        </S.ResultArea>
        <S.ActionArea>
          <S.DecreaseButton type="danger" onClick={onDecreaseButtonClick}>
            -
          </S.DecreaseButton>
          <S.IncreaseButton type="primary" onClick={onIncreaseButtonClick}>
            +
          </S.IncreaseButton>
        </S.ActionArea>
      </S.CounterCard>
    </>
  )
}

export default CounterCard
