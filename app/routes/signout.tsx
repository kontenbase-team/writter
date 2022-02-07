import { Button, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { ActionFunction, Form, MetaFunction } from 'remix'

import { Container } from '~/components'
import { authenticator } from '~/services/auth.server'

interface SignOutProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign out from Writter',
})

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' })
}

const SignOut: FunctionComponent<SignOutProps> = () => (
  <Container headingText="Sign Out">
    <Form method="post" action="/signout">
      <Stack p={5}>
        <Text>Are you sure to sign out from Writter?</Text>
        <Button type="submit" colorScheme="red">
          Sign out
        </Button>
      </Stack>
    </Form>
  </Container>
)

export default SignOut
