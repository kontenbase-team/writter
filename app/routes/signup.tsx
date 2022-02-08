import { Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useTransition,
} from 'remix'

import { Container, Link } from '~/components'
import { SignUpForm } from '~/features'
import { authenticator } from '~/services/auth.server'

interface SignUpProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign up for a new Writter account',
})

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.authenticate('user-pass', request, {
    successRedirect: '/home',
  })
  return user
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/home',
  })
  return null
}

const SignUp: FunctionComponent<SignUpProps> = () => {
  const transition = useTransition()

  return (
    <Container headingText="Sign Up">
      <Stack p={5} spacing={5}>
        <Heading as="h2" size="lg">
          Create your new Writter account
        </Heading>

        <SignUpForm transition={transition} />

        <Text>
          Already have an account? <Link to="/signin">Sign in</Link>
        </Text>
      </Stack>
    </Container>
  )
}

export default SignUp
