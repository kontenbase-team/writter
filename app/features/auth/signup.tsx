/* eslint-disable no-nested-ternary */
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { Form } from 'remix'

interface SignUpFormProps {
  transition: any
}

export const SignUpForm: FunctionComponent<SignUpFormProps> = ({
  transition,
}) => {
  const [show, setShow] = useState(false)
  const handleClickPassword = () => setShow(!show)

  return (
    <Form method="post" action="/signup">
      <input type="hidden" name="_method" value="signup" />
      <Stack>
        <Stack direction={['column', 'row']}>
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input name="firstName" type="text" placeholder="Ally" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input name="lastName" type="text" placeholder="Gator" />
          </FormControl>
        </Stack>

        <FormControl isRequired>
          <FormLabel htmlFor="handle">Handle / Username</FormLabel>
          <Input name="handle" type="text" placeholder="allygator" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input name="email" type="email" placeholder="yourname@domain.com" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              name="password"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClickPassword}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Spacer />

        <Button
          type="submit"
          colorScheme="green"
          isLoading={
            transition.state === 'submitting'
              ? true
              : transition.state === 'loading'
          }
          loadingText={
            transition.state === 'submitting'
              ? 'Creating account...'
              : transition.state === 'loading'
              ? 'Created account!'
              : 'Create account'
          }
        >
          Create Account
        </Button>
      </Stack>
    </Form>
  )
}
