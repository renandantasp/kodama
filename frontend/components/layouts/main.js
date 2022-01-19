import Head from 'next/head'
import Navbar from '../Navbar.js'
import Sidebar from '../Sidebar.js'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router}) =>{
    return(
        <Box as="main" pb={8}>
            <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <title>Kodama</title>
            </Head>
            <Navbar path={router.asPath} />
            {/* <Sidebar path={router.asPath} /> */}
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            
        </Box>
    )
}

export default Main