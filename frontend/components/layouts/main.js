import Head from 'next/head'
import Navbar from '../navbar.js'
import Sidebar from '../sidebar.js'
import { Box, Container } from '@chakra-ui/react'


const Main = ({ children, router}) =>{
    return(
        <Box pb={8}>
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
            <Box mx={24} pt={24}>
                {children}
            </Box>
            
        </Box>
    )
}

export default Main