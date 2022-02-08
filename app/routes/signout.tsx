import { Button, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix'

import { Container } from '~/components'
import { authenticator } from '~/services/auth.server'
import { getUserName } from '~/utils'

interface SignOutProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign out from Writter',
})

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' })
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/',
  })
  return json({ user })
}

const SignOut: FunctionComponent<SignOutProps> = () => {
  const { user } = useLoaderData()

  return (
    <Container headingText="Sign Out">
      <Form method="post" action="/signout">
        <Stack p={5}>
          <Text>
            Are you sure to sign out{' '}
            <b>
              {getUserName(user)} ({user.email})
            </b>{' '}
            from Writter?
          </Text>
          <Button type="submit" colorScheme="red">
            Sign out
          </Button>
        </Stack>
      </Form>
    </Container>
  )
}

export default SignOut
