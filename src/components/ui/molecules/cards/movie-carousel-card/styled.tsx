import tw, { styled } from 'twin.macro'

export const MovieCard = styled.div`
  ${tw`relative flex flex-col`}
  ${tw`bg-white rounded-lg shadow-lg`}
`

export const Poster = styled.img`
  ${tw`flex-none`}
`

export const InfoArea = styled.div`
  ${tw`relative flex flex-col flex-shrink-0 pt-2 pl-2`}
`

export const Title = styled.h3`
  text-overflow: ellipsis;
  word-wrap: normal;
  ${tw`text-base font-bold whitespace-no-wrap overflow-hidden`}
`

export const ReleaseDate = styled.div`
  ${tw`text-xs`}
`

export const VoteAverage = styled.div`
  ${tw`text-sm text-red-500`}
`
