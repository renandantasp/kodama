import { url_parser } from '../utils.js'
// import { GameCard } from '../components/GameCard.js'
import { Container, SimpleGrid, Box } from '@chakra-ui/react'

import { Grid } from '../components/Grid.js'


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
      <Grid items={games} />
  )

}

export default Page