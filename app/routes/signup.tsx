import { Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container, Link } from '~/components'
import { SignUpForm } from '~/features'
import { useAuthorized } from '~/hooks'

interface SignUpProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign up for a new Writter account',
})

const SignUp: FunctionComponent<SignUpProps> = () => {
  useAuthorized()

  return (
    <Container headingText="Sign Up">
      <Stack p={5} spacing={5}>
        <Heading as="h2" size="lg">
          Create your new Writter account
        </Heading>
        <SignUpForm />
        <Text>
          Already have an account? <Link to="/signin">Sign in</Link>
        </Text>
      </Stack>
    </Container>
  )
}

export default SignUp
