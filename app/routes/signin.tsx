import { Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  useTransition,
} from 'remix'

import { Container, Link } from '~/components'
import { SignInForm } from '~/features'
import { authenticator } from '~/services/auth.server'

interface SignInProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign in to your Writter account',
})

export const action: ActionFunction = async ({ request }) => {
  // Use `authenticator.authenticate method`
  // we call the method with the name of the strategy we want to use and the
  // request object, optionally we pass an object with the URLs we want the user
  // to be redirected to after a success or a failure
  const resultAction = await authenticator.authenticate('user-pass', request, {
    successRedirect: '/home',
    failureRedirect: '/signin',
  })
  return resultAction
}

export const loader: LoaderFunction = async ({ request }) => {
  // Check if the user is authenticated with `authenticator.isAuthenticated`
  // and redirect if it is or return null if it's not
  // If the user is already authenticated redirect directly
  const resultLoader = await authenticator.isAuthenticated(request, {
    successRedirect: '/signin',
  })
  return resultLoader
}

const SignIn: FunctionComponent<SignInProps> = () => {
  const transition = useTransition()

  return (
    <Container headingText="Sign In">
      <Stack p={5} spacing={5}>
        <Heading as="h2" size="lg">
          Sign in to your Writter account
        </Heading>

        <SignInForm transition={transition} />

        <Text>
          New here? <Link to="/signup">Sign up</Link>
        </Text>
      </Stack>
    </Container>
  )
}

export default SignIn
