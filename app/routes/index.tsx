import { Button, Stack, Text } from '@chakra-ui/react'
import { Link as RemixLink, MetaFunction } from 'remix'

import { Anchor, Container } from '~/components'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function Index() {
  const buttonLinks = [
    { to: '/signup', text: 'Sign Up' },
    { to: '/signin', text: 'Sign In' },
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
        <Stack>
          {buttonLinks.map((item) => (
            <Button key={item.text} as={RemixLink} to={item.to}>
              {item.text}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}
