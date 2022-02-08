/* eslint-disable no-nested-ternary */
import { FunctionComponent } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useTransition,
} from 'remix'

import { Container } from '~/components'
import { SignOutForm } from '~/features'
import { authenticator } from '~/services/auth.server'

interface SignOutProps {}

export const meta: MetaFunction = () => ({
  title: 'Sign out from Writter',
})

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: '/' })
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/',
  })
  return json({ user })
}

const SignOut: FunctionComponent<SignOutProps> = () => {
  const { user } = useLoaderData()
  const transition = useTransition()

  return (
    <Container headingText="Sign Out">
      <SignOutForm user={user} transition={transition} />
    </Container>
  )
}

export default SignOut
