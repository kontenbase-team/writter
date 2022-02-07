import { Stack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
  useTransition,
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

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request)

  const { data: wreet, error } = await kontenbaseServer
    .service('wreets')
    .getById(params?.wreetId as string)

  if (error) return json({ error }, { status: 404 })
  if (!wreet) return json({ user, error: 'Wreet not found' }, { status: 404 })
  return json({ user, wreet, error })
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request)
  const headers = new Headers({ Authorization: `Bearer ${user?.token}` })
  const form = await request.formData()

  // Find about this Wreet, especially the owner
  const { data: wreet, error: wreetError } = await kontenbaseServer
    .service('wreets')
    .getById(params?.wreetId as string)

  if (wreetError) return json({ error: wreetError }, { status: 400 })

  // Only the owner of the Wreet can do something
  const isOwned = user?._id === wreet?.createdBy?._id
  const isMethodDelete = form.get('_method') === 'delete'

  if (isOwned && isMethodDelete) {
    try {
      const url = `${process.env.KONTENBASE_API_URL}/wreets/${params.wreetId}`
      const response = await fetch(url, { headers, method: 'DELETE' })
      await response.json()
      return redirect(`/home`, { headers })
    } catch (error) {
      return json({ user, error }, { status: 404 })
    }
  }

  return null
}

const UserWreetId: FunctionComponent<UserWreetIdProps> = () => {
  const { user, wreet, error } = useLoaderData()
  const transition = useTransition()

  return (
    <Container headingText="Wreet">
      {wreet && !error && (
        <WreetCardDetailed wreet={wreet} user={user} transition={transition} />
      )}
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
