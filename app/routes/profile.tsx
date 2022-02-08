import { FunctionComponent } from 'react'
import { LoaderFunction, MetaFunction, redirect } from 'remix'

import { Container } from '~/components'
import { authenticator } from '~/services/auth.server'

export const meta: MetaFunction = () => ({
  title: 'Redirecting to profile page...',
})

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/',
  })

  if (user?.handle) return redirect(`/${user?.handle}`)
  return redirect(`/`)
}

const Profile: FunctionComponent = () => (
  <Container headingText="Profile">
    <p>Redirecting to profile...</p>
  </Container>
)

export default Profile
