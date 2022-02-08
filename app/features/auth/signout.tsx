/* eslint-disable no-nested-ternary */
import { Button, Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Form } from 'remix'

import { TUser } from '~/types'
import { getUserName } from '~/utils'

interface SignOutFormProps {
  user: TUser
  transition: any
}

export const SignOutForm: FunctionComponent<SignOutFormProps> = ({
  user,
  transition,
}) => (
  <Form method="post" action="/signout">
    <input type="hidden" name="_method" value="signout" />
    <Stack p={5}>
      <Text>
        Are you sure to sign out{' '}
        <b>
          {getUserName(user)} ({user.email})
        </b>{' '}
        from Writter?
      </Text>
      <Button
        type="submit"
        colorScheme="red"
        isLoading={transition.state === 'submitting'}
        loadingText={
          transition.state === 'submitting'
            ? 'Signing out...'
            : transition.state === 'loading'
            ? 'Signed out!'
            : 'Sign out'
        }
      >
        Sign out
      </Button>
    </Stack>
  </Form>
)
