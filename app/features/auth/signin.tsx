import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Stack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Form } from 'remix'

interface SignInFormProps {}

export const SignInForm: FunctionComponent<SignInFormProps> = () => (
  <Form method="post" action="/signin">
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
        // isLoading={true}
        loadingText="Signing in..."
      >
        Sign In
      </Button>
    </Stack>
  </Form>
)
