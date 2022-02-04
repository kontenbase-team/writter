import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container, Link } from '~/components'
import { SignInForm } from '~/features'

interface SignInProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign in to your Writter account',
})

const SignUp: FunctionComponent<SignInProps> = () => (
  <Container headingText="Sign In">
    <Stack p={5} spacing={5}>
      <Heading as="h2" size="lg">
        Sign in to your Writter account
      </Heading>
      <SignInForm />
      <Text>
        New here? <Link to="/signup">Sign up</Link>
      </Text>
    </Stack>
  </Container>
)

export default SignUp
