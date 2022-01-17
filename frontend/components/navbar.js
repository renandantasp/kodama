// import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box>

      <Heading 
      pl={8} 
      py={5}
      position="fixed"
      as="nav"
      w="100%"
      bg="#000000A0"
      style={{backdropFilter:'blur(5px'}}
      zIndex={1}
      fontSize={24} 
      letterSpacing={4.5}>
        KODAMA
      </Heading>
    </Box>
  )
}

export default Navbar