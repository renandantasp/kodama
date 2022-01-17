import { url_parser } from '../utils.js'
import { GameCard } from '../components/game_card.js'
import { Container, SimpleGrid, Box } from '@chakra-ui/react'

export const getServerSideProps = async (ctx)  => {
  const url = url_parser(ctx)
  const res = await fetch(url)
  const data = await res.json()
 
  return {
    props: {games:data.results}
  }
}

const Page = ( {games} ) => {
    return(
      <Box>
        <SimpleGrid   columns={[1,1,1,1,3,4]} gap={6}>
        {games.map(game =>(
          <GameCard game={game} />
        ))} 
        </SimpleGrid>
      </Box>
  )

}

export default Page