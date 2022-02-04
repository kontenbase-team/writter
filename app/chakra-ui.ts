import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    50: '#fff0ee',
    100: '#ffe6e2',
    200: '#fdd8d3',
    300: '#fac7be',
    400: '#f3b0a2',
    500: '#ea9280',
    600: '#e54d2e',
    700: '#db4324',
    800: '#ca3214',
    900: '#341711',
  },
}

export const theme = extendTheme({
  config,
  colors,
})
