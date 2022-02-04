import { Container } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, useLoaderData } from 'remix'

import { kontenbase } from '~/lib'

interface UserProfileProps {}

export const loader: LoaderFunction = async ({ params }) => {
  const { data, error } = await kontenbase.service('Users').find({
    where: { handle: params?.userHandle as string },
  })

  if (error) {
    return json({ error }, { status: 404 })
  }
  return json({
    data,
    error,
  })
}

const UserProfile: FunctionComponent<UserProfileProps> = () => {
  const { data, error } = useLoaderData()

  return (
    <Container>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error: User Profile {error?.message}</p>}
    </Container>
  )
}

export default UserProfile
