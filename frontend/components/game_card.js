import { Box, Heading, Image, Badge } from '@chakra-ui/react'

export const GameCard = ({game}) => {
  return (
    <Box borderRadius='lg' overflow='hidden' bg="#202020" height='350px' p={5}>
      <Heading  fontSize={14} color="gray.200" align="center">
        {game.name}
      </Heading>
    </Box>
  )
}