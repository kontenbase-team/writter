import { json, LoaderFunction, MetaFunction, redirect } from 'remix'

import { authenticator } from '~/services/auth.server'

export const meta: MetaFunction = () => ({
  title: 'Redirecting to profile page...',
})

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/',
  })

  if (user?.handle) return redirect(`/${user?.handle}`)
  return json({ user })
}
