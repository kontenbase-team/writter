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
  const user = await authenticator.authenticate('user-pass', request, {
    successRedirect: '/home',
    failureRedirect: '/signin',
  })
  return user
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/home',
  })
  return null
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
