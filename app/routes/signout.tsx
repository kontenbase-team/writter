import { Button, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface SignOutProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign out from Writter',
})

const SignUp: FunctionComponent<SignOutProps> = () => (
  <Container headingText="Sign Out">
    <Stack p={5}>
      <Text>Sign out from Writter</Text>
      <Button colorScheme="red">Sign out</Button>
    </Stack>
  </Container>
)

export default SignUp
