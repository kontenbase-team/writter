import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { WreetsTimeline } from '~/features'
import { kontenbaseServer } from '~/lib'
import { authenticator } from '~/services/auth.server'

interface HomeProps {}

export const meta: MetaFunction = () => ({
  title: 'Home / Writter',
})

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/',
  })

  const { data: wreets, error } = await kontenbaseServer
    .service('wreets')
    .find()

  if (error) {
    return json({ error })
  }
  return json({ user, wreets })
}

const Home: FunctionComponent<HomeProps> = () => {
  const { wreets, error } = useLoaderData()

  return (
    <Container headingText="Home Timeline">
      {wreets && <WreetsTimeline wreets={wreets} />}
      {error && (
        <Box p={3}>
          <p>Error retrieving wreets.</p>
        </Box>
      )}
    </Container>
  )
}

export default Home
