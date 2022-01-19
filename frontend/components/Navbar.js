// import Logo from './logo'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Spacer,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from '@chakra-ui/react'

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#000000A0"
      style={{backdropFilter:'blur(5px'}}
      // pl={8} 
      // py={5}
      zIndex={1}
      {...props}
      >
        <Container
        display="flex"
        p={2}
        mawW="container.xl"
        wrap="wrap"
        align="left"
        justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading  as="h1" size="lg"  letterSpacing={4.5} >
              KODAMA
            </Heading>
          </Flex>
          
          <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base:'full', md:'auto'}}
          alignItems={1}
          mt={{base:4, nmd: 0}}
          >
            <Box>
              SEARCHBAR
            </Box>

          </Stack>

          <Box flex={1} align="right">
          {/* <ThemeToggleButton /> */}botao
          <Box ml={2} display={{base:'inline-block', md:'none'}}>
            <Menu>
              <MenuButton 
              as={IconButton} 
              icon={<HamburgerIcon/>}
              variant="outline"
              aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>

              </MenuList>
            </Menu>  
          </Box>
        </Box>
        </Container>
    </Box>
  )
}

export default Navbar