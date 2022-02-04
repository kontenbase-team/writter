import { Box, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface SignInProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign in to your Writter account',
})

const SignUp: FunctionComponent<SignInProps> = () => (
  <Container headingText="Sign In">
    <Box p={5}>
      <Text>Sign in to your Writter account</Text>
    </Box>
  </Container>
)

export default SignUp
