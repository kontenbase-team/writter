import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { UserProfile } from '~/features'
import { kontenbaseServer } from '~/lib'
import { getUserName } from '~/utils'

interface UserHandlePageProps {}

export const meta: MetaFunction = ({ data }) => ({
  title: `${getUserName(data?.user)} (@${data?.user?.handle}) / Writter`,
})

export const loader: LoaderFunction = async ({ params }) => {
  const { data: users, error } = await kontenbaseServer.service('Users').find({
    where: { handle: params?.userHandle as string },
  })

  if (error) return json({ error }, { status: 404 })
  return json({ user: users?.[0], error })
}

const UserHandlePage: FunctionComponent<UserHandlePageProps> = () => {
  const { user, error } = useLoaderData()

  return (
    <Container headingText={getUserName(user)}>
      {user && <UserProfile user={user} />}
      {error && (
        <Box p={3}>
          <p>Error: User Profile {error?.message}</p>
        </Box>
      )}
    </Container>
  )
}

export default UserHandlePage
