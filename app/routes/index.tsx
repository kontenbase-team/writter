import { Button, Stack, Text } from '@chakra-ui/react'
import {
  Link as RemixLink,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix'

import { Anchor, Container } from '~/components'
import { authenticator } from '~/services/auth.server'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export const loader: LoaderFunction = async ({ request }) => ({
  user: await authenticator.isAuthenticated(request),
})

export default function Index() {
  const { user } = useLoaderData()

  const buttonLinks = [
    { to: '/signup', text: 'Sign Up' },
    { to: '/signin', text: 'Sign In' },
    { to: '/about', text: 'About' },
  ]

  const buttonLinksAuthenticated = [
    { to: '/signout', text: 'Sign Out' },
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About' },
  ]

  return (
    <Container headingText="Writter" isBackDisabled>
      <Stack p={5}>
        <Text>
          Writter is a <Anchor href="https://twitter.com">Twitter</Anchor> clone
          made with <Anchor href="https://remix.run">Remix</Anchor> and{' '}
          <Anchor href="https://kontenbase.com">Kontenbase</Anchor>
        </Text>

        {user && <Text>You are authenticated!</Text>}

        <Stack>
          {!user
            ? buttonLinks.map((item) => (
                <Button key={item.text} as={RemixLink} to={item.to}>
                  {item.text}
                </Button>
              ))
            : buttonLinksAuthenticated.map((item) => (
                <Button key={item.text} as={RemixLink} to={item.to}>
                  {item.text}
                </Button>
              ))}
        </Stack>
      </Stack>
    </Container>
  )
}
