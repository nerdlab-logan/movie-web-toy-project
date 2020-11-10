import tw, { styled } from 'twin.macro'

export const MovieCard = styled.div`
  ${tw`relative flex flex-col`}
  ${tw`rounded-lg shadow-lg`}
`

export const Poster = styled.img`
  ${tw`flex-none`}
`

export const InfoArea = styled.div`
  ${tw`relative flex flex-col flex-shrink-0`}
`

export const Title = styled.h3`
  text-overflow: ellipsis;
  word-wrap: normal;
  ${tw`text-xl font-bold whitespace-no-wrap overflow-hidden`}
`

export const ReleaseDate = styled.div`
  ${tw`text-sm`}
`

export const VoteAverage = styled.div`
  ${tw`text-base text-red-300`}
`
