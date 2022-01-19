import { Box, Heading, Image, Badge, GridItem } from '@chakra-ui/react'

export const GameCard = ({game}) => {
  return (
    <GridItem borderRadius='lg' overflow='hidden' bg="#202020" height='350px' p={5}>
      <Heading  fontSize={14} align="center">
        {game.name}
      </Heading>
    </GridItem>
  )
}