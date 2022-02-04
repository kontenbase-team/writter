import { Button, Heading, Stack } from '@chakra-ui/react'
import { Link as RemixLink, MetaFunction } from 'remix'

import { Container } from '~/components'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function Index() {
  return (
    <Container>
      <Heading as="h1">Writter</Heading>
      <Stack>
        <Button as={RemixLink} to="/home">
          Home
        </Button>
        <Button as={RemixLink} to="/about">
          About
        </Button>
      </Stack>
    </Container>
  )
}
