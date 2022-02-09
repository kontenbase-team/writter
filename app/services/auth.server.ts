import invariant from 'invariant'
import { Authenticator } from 'remix-auth'
import { FormStrategy } from 'remix-auth-form'

import { kontenbaseServer } from '~/lib'
import { sessionStorage } from '~/services/session.server'
import { TUser } from '~/types'

// Create an instance of the authenticator
// Pass a generic with what strategies will return and will store in the session
export const authenticator = new Authenticator<TUser>(sessionStorage)

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const formMethod = form.get('_method')

    if (formMethod === 'signin') {
      const email = form.get('email') as string
      const password = form.get('password') as string

      invariant(typeof email === 'string', 'email must be a string')
      invariant(typeof password === 'string', 'password must be a string')
      invariant(email.length > 0, 'email must not be empty')
      invariant(password.length > 0, 'password must not be empty')

      const { user, token, error } = await kontenbaseServer.auth.login({
        email,
        password,
      })

      if (error || !user || !token) {
        return { error }
      }
      // This will be the final user object
      return {
        ...user,
        token,
      }
    }

    if (formMethod === 'signup') {
      const firstName = form.get('firstName') as string
      const lastName = form.get('lastName') as string
      const handle = form.get('handle') as string
      const email = form.get('email') as string
      const password = form.get('password') as string

      invariant(typeof handle === 'string', 'handle must be a string')
      invariant(typeof email === 'string', 'email must be a string')
      invariant(typeof password === 'string', 'password must be a string')
      invariant(email.length > 0, 'email must not be empty')
      invariant(password.length > 0, 'password must not be empty')

      // Sign up or register as normal
      const { user, token, error } = await kontenbaseServer.auth.register({
        firstName,
        lastName,
        email,
        password,
      })

      // Patch to add handle (username)
      const headers = new Headers({ Authorization: `Bearer ${token}` })
      const response = await fetch(
        `${process.env.KONTENBASE_API_URL}/auth/user`,
        {
          headers,
          method: 'PATCH',
          body: JSON.stringify({ handle }),
        }
      )
      const updatedUser = await response.json()

      if (error || !user || !token || !updatedUser) return { error }
      // This will be the final user object
      return {
        ...updatedUser, // Updated user with handle
        token, // Separated token
      }
    }

    return null
  }),
  // Each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  'user-pass'
)
