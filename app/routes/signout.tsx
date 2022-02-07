/* eslint-disable no-console */
import { Button, Stack, Text, useToast } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction, useNavigate } from 'remix'

import { Container } from '~/components'
import { useNotAuthorized } from '~/hooks'
import { kontenbaseClient } from '~/lib'

interface SignOutProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign out from Writter',
})

const SignOut: FunctionComponent<SignOutProps> = () => {
  useNotAuthorized()

  const toast = useToast()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const { user, error } = await kontenbaseClient.auth.logout()
    if (user) {
      toast({ title: 'Signed out', status: 'info' })
      navigate('/', { replace: true })
    } else if (error) {
      toast({ title: 'Failed to sign out', status: 'error' })
      console.error(error)
    }
  }

  return (
    <Container headingText="Sign Out">
      <Stack p={5}>
        <Text>Sign out from Writter</Text>
        <Button colorScheme="red" onClick={handleSignOut}>
          Sign out
        </Button>
      </Stack>
    </Container>
  )
}

export default SignOut
