import { Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { WreetCardDetailed } from '~/features'
import { kontenbase } from '~/lib'
import { getTrimmedWreet, getUserName } from '~/utils'

interface UserWreetIdProps {}

export const meta: MetaFunction = ({ data }) => {
  const wreet = data.data
  const user = data.data.createdBy

  return {
    title: `${getUserName(user)} on Writter: "${getTrimmedWreet(
      wreet.content
    )}"`,
  }
}

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
      {data && <WreetCardDetailed wreet={data} />}
      {error && <p>Error: Detailed Wreet {error?.message}</p>}
    </Container>
  )
}

export default UserWreetId
