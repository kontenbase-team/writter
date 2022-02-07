import { Box } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useParams,
} from 'remix'

import { Container } from '~/components'
import { UserProfile } from '~/features'
import { kontenbaseServer } from '~/lib'
import { getUserName } from '~/utils'

interface UserHandlePageProps {}

export const meta: MetaFunction = ({ data, params }) => {
  if (data.user) {
    return {
      title: `${getUserName(data?.user)} (@${data?.user?.handle}) / Writter`,
    }
  }
  return { title: `User @${params.userHandle} not found` }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { data: users, error } = await kontenbaseServer.service('Users').find({
    where: { handle: params?.userHandle as string },
  })
  const user = users?.[0]

  if (error) return json({ error }, { status: 404 })
  if (!user) return json({ error: 'User not found' }, { status: 404 })
  return json({ user: users?.[0], error })
}

const UserHandlePage: FunctionComponent<UserHandlePageProps> = () => {
  const { user, error } = useLoaderData()
  const { userHandle } = useParams()

  return (
    <Container headingText={user ? getUserName(user) : `@${userHandle}`}>
      {user && <UserProfile user={user} />}
      {error && (
        <Box p={3}>
          <p>Error: {JSON.stringify(error, null, 2)}</p>
        </Box>
      )}
    </Container>
  )
}

export default UserHandlePage
