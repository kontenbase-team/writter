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

interface SignUpFormProps {}

export const SignUpForm: FunctionComponent<SignUpFormProps> = () => {
  const [show, setShow] = useState(false)
  const handleClickPassword = () => setShow(!show)

  return (
    <Form>
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

        <Button type="submit" colorScheme="red">
          Create Account
        </Button>
      </Stack>
    </Form>
  )
}
