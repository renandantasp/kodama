import { SimpleGrid } from "@chakra-ui/react"
import { GameCard } from "./GameCard.js"


export const Grid = ({items}) => {
  return (
    <SimpleGrid columns={[1,1,1,1,3,4]} gap={6}>
        {items.map( game =>(
          <GameCard key={game.id} game={game} />
          ))} 
    </SimpleGrid>
  )
}
