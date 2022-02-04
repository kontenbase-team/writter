import { Box, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface SignUpProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign up for a new Writter account',
})

const SignUp: FunctionComponent<SignUpProps> = () => (
  <Container headingText="Sign Up">
    <Box p={5}>
      <Text>Create your new Writter account</Text>
    </Box>
  </Container>
)

export default SignUp
