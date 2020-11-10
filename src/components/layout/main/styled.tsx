import tw, { styled } from 'twin.macro'

export const RootWrapper = styled.div`
  ${tw`relative w-full h-full bg-gray-300`}
  ${tw`overflow-hidden`}
`

export const MainContainer = styled.div`
  ${tw`flex flex-col w-full min-h-screen`}
`

export const Content = styled.div`
  ${tw`flex flex-col px-12 w-full h-full`}
`
