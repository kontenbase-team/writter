import { Box, Stack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from 'remix'

import { Container } from '~/components'
import { WreetCardDetailed } from '~/features'
import { kontenbaseServer } from '~/lib'
import { authenticator } from '~/services/auth.server'
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
  if (!wreet) return json({ error: 'Wreet not found' }, { status: 404 })
  return json({ wreet, error })
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request)
  const headers = new Headers({ Authorization: `Bearer ${user?.token}` })

  const form = await request.formData()

  if (form.get('_method') === 'delete') {
    try {
      const url = `${process.env.KONTENBASE_API_URL}/wreets/${params.wreetId}`
      console.log({ url })
      const response = await fetch(url, { headers, method: 'DELETE' })
      await response.json()
      return redirect(`/home`, { headers })
    } catch (error) {
      return json({ error }, { status: 404 })
    }
  } else {
    return null
  }
}

const UserWreetId: FunctionComponent<UserWreetIdProps> = () => {
  const { wreet, error } = useLoaderData()

  return (
    <Container headingText="Wreet">
      {wreet && !error && <WreetCardDetailed wreet={wreet} />}
      {(!wreet || error) && (
        <Stack p={3}>
          {!wreet && <p>Sorry, wreet not found</p>}
          {error && <p>Error: {error?.message}</p>}
        </Stack>
      )}
    </Container>
  )
}

export default UserWreetId
