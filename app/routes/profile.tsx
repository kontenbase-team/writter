import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface ProfileProps {}

export const meta: MetaFunction = () => ({
  title: 'Redirecting to profile page...',
})

const Profile: FunctionComponent<ProfileProps> = () => (
  <Container headingText="Profile">
    <Box p={5}>
      <p>Redirecting to profile page is in progress...</p>
    </Box>
  </Container>
)

export default Profile
