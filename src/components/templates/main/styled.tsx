import tw, { styled } from 'twin.macro'

export const TemplateWrapper = styled.div`
  ${tw`flex flex-col w-full h-full `}
`

export const ContentArea = styled.div`
  min-height: 20rem;
  ${tw`flex flex-wrap justify-center`}
`
