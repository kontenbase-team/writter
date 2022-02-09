import { FunctionComponent } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useTransition,
} from 'remix'

import { Container } from '~/components'
import { WreetComposer } from '~/features'
import { authenticator } from '~/services/auth.server'

interface ComposeNewWreetProps {}

export const meta: MetaFunction = () => ({
  title: 'Compose new Wreet / Writter',
})

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)
  const headers = new Headers({ Authorization: `Bearer ${user?.token}` })

  const form = await request.formData()
  const content = form.get('content')

  try {
    const response = await fetch(`${process.env.KONTENBASE_API_URL}/wreets`, {
      headers,
      method: 'POST',
      body: JSON.stringify({ content }),
    })
    const data = await response.json()
    return redirect(`/${user?.handle}/${data._id}`, { headers })
  } catch (error) {
    return json({ error }, { status: 400 })
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/signin',
  })
  return json({ user })
}

const ComposeNewWreet: FunctionComponent<ComposeNewWreetProps> = () => {
  const transition = useTransition()

  return (
    <Container headingText="Compose new Wreet">
      <WreetComposer transition={transition} />
    </Container>
  )
}

export default ComposeNewWreet
