import { Box, Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { WreetCardDetailed } from '~/features'
import { kontenbaseServer } from '~/lib'
import { getTrimmedWreet, getUserName } from '~/utils'

interface UserWreetIdProps {}

export const meta: MetaFunction = ({ data }) => {
  const wreet = data?.wreet
  const user = data?.wreet?.createdBy

  return {
    title: `${getUserName(user)} on Writter: "${getTrimmedWreet(
      wreet?.content
    )}"`,
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { data: wreet, error } = await kontenbaseServer
    .service('wreets')
    .getById(params?.wreetId as string)

  if (error) return json({ error }, { status: 404 })
  return json({ wreet, error })
}

const UserWreetId: FunctionComponent<UserWreetIdProps> = () => {
  const { wreet, error } = useLoaderData()

  return (
    <Container headingText="Wreet">
      {wreet && <WreetCardDetailed wreet={wreet} />}
      {error && (
        <Box p={3}>
          <p>Error: Detailed Wreet {error?.message}</p>
        </Box>
      )}
    </Container>
  )
}

export default UserWreetId
