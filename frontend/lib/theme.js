import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f9f5d7', '#282828')(props),
      color: mode('#282828', '#f9f5d7')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
        
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#8f3f71','#b16286')(props),
      textUnderlineOffset: 2
    })
  }
}

const fonts = {
  heading: "'Roboto'"
}

const colors = {
  gYellow: '#fabd2f'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config, styles, components, fonts, colors
})

export default theme