import { Box, Text, Link as ChakraLink } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface AboutProps {}

export const meta: MetaFunction = () => ({
  title: 'About - Writter',
})

const About: FunctionComponent<AboutProps> = () => (
  <Container headingText="About">
    <Box p={5}>
      <Text>
        Writter is a Twitter clone made with{' '}
        <ChakraLink isExternal color="brand.500" href="https://remix.run">
          Remix
        </ChakraLink>{' '}
        and{' '}
        <ChakraLink isExternal color="brand.500" href="https://kontenbase.com">
          Kontenbase
        </ChakraLink>
      </Text>
    </Box>
  </Container>
)

export default About
