import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'

interface ProfileProps {}

export const meta: MetaFunction = () => ({
  title: 'Redirecting to profile page...',
})

const Profile: FunctionComponent<ProfileProps> = () => (
  <Container headingText="Profile">
    <p>Redirecting to profile page...</p>
  </Container>
)

export default Profile
