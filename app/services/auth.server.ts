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
    const email = form.get('email') as string
    const password = form.get('password') as string

    invariant(typeof email === 'string', 'email must be a string')
    invariant(email.length > 0, 'email must not be empty')
    invariant(typeof password === 'string', 'password must be a string')
    invariant(password.length > 0, 'password must not be empty')

    const { user, error } = await kontenbaseServer.auth.login({
      email: email as string,
      password: password as string,
    })

    // The type of this user must match the type you pass to the Authenticator
    // The strategy will automatically inherit the type if you instantiate
    // directly inside the `use` method
    if (error || !user) {
      throw error
    }
    return user
  }),
  // Each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  'user-pass'
)
