import tw, { styled } from 'twin.macro'

export const Container = styled.div`
  ${tw`flex flex-col w-full`};
`
export const TitleArea = styled.div`
  ${tw`relative flex w-full`}
  ${tw`border-b-2 border-gray-600`}
`

export const Title = styled.span`
  ${tw`flex text-2xl font-bold`}
`

export const ContentArea = styled.div`
  ${tw`relative flex flex-row w-full p-2`}
`
