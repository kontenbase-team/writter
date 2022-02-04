import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'
import { SignUpForm } from '~/features'

interface SignUpProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign up for a new Writter account',
})

const SignUp: FunctionComponent<SignUpProps> = () => (
  <Container headingText="Sign Up">
    <Stack p={5} spacing={5}>
      <Heading as="h2" size="lg">
        Create your new Writter account
      </Heading>
      <SignUpForm />
    </Stack>
  </Container>
)

export default SignUp
