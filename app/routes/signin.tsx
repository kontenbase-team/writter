/* eslint-disable no-console */
import { Heading, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { ActionFunction, json, MetaFunction } from 'remix'

import { Container, Link } from '~/components'
import { SignInForm } from '~/features'
import { kontenbaseServer } from '~/lib'

interface SignInProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign in to your Writter account',
})

/**
 * POST /signin
 */
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const { user, token, error } = await kontenbaseServer.auth.login({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })
  console.info({ user, token, error })

  if (error) {
    console.error(error)
    return json(null)
  }
  return json(null)
}

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
