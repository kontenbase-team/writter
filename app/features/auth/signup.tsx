import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { Form } from 'remix'

interface SignUpFormProps {}

export const SignUpForm: FunctionComponent<SignUpFormProps> = () => {
  const [show, setShow] = useState(false)
  const handleClickPassword = () => setShow(!show)

  return (
    <Form>
      <InputGroup size="md">
        <Input
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
    </Form>
  )
}

export default SignUpForm
