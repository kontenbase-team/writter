/* eslint-disable no-console */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Form, useNavigate } from 'remix'

import { kontenbaseClient } from '~/lib'

interface SignInFormProps {}

export const SignInForm: FunctionComponent<SignInFormProps> = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [transition, setTransition] = useState('idle')

  /**
   * Kontenbase auth.login
   */
  const handleSignIn = async (event: SyntheticEvent) => {
    try {
      setTransition('loading')
      event.preventDefault()
      const target = event.target as typeof event.target & {
        email: { value: string }
        password: { value: string }
      }
      const { user, error } = await kontenbaseClient.auth.login({
        email: target.email.value,
        password: target.password.value,
      })
      if (error) {
        toast({
          title: 'Failed to sign in',
          description: error.message,
          status: 'error',
        })
      } else if (user) {
        toast({ title: 'Signed in', status: 'success' })
        navigate('/home', { replace: true })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setTransition('idle')
    }
  }

  return (
    <Form method="post" action="/signin" onSubmit={handleSignIn}>
      <Stack>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input name="email" type="email" placeholder="yourname@domain.com" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            name="password"
            pr="4.5rem"
            type="password"
            placeholder="Enter password"
          />
        </FormControl>

        <Spacer />

        <Button
          type="submit"
          colorScheme="red"
          isLoading={transition === 'loading'}
          loadingText="Signing in..."
        >
          Sign In
        </Button>
      </Stack>
    </Form>
  )
}
