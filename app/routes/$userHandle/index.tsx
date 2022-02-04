import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { UserProfile } from '~/features'
import { kontenbase } from '~/lib'
import { getUserName } from '~/utils'

interface UserHandlePageProps {}

export const meta: MetaFunction = ({ data }) => ({
  title: `${getUserName(data.data)} (@${data.data.handle}) / Writter`,
})

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { data, error } = await kontenbase.service('Users').find({
      where: { handle: params?.userHandle as string },
    })
    if (error) {
      return json({ error }, { status: 404 })
    }
    return json({
      data: data?.[0],
      error,
    })
  } catch (error) {
    return json({ error }, { status: 500 })
  }
}

const UserHandlePage: FunctionComponent<UserHandlePageProps> = () => {
  const { data, error } = useLoaderData()

  return (
    <Container headingText={getUserName(data)}>
      {data && <UserProfile user={data} />}
      {error && <p>Error: User Profile {error?.message}</p>}
    </Container>
  )
}

export default UserHandlePage
