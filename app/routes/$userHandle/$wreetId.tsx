import { Container, Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, useLoaderData } from 'remix'

import { WreetCard } from '~/features'
import { kontenbase } from '~/lib'

interface UserWreetIdProps {}

export const loader: LoaderFunction = async ({ params }) => {
  const { data, error } = await kontenbase
    .service('wreets')
    .getById(params?.wreetId as string)

  if (error) {
    return json({ error }, { status: 404 })
  }
  return json({
    data,
    error,
  })
}

const UserWreetId: FunctionComponent<UserWreetIdProps> = () => {
  const { data, error } = useLoaderData()

  return (
    <Container>
      <Heading as="h1">Wreet</Heading>
      {data && <WreetCard wreet={data} />}
      {error && <p>Error: Wreet {error?.message}</p>}
    </Container>
  )
}

export default UserWreetId
