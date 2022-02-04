import { Button, Stack } from '@chakra-ui/react'
import { Link as RemixLink, MetaFunction } from 'remix'

import { Container } from '~/components'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function Index() {
  return (
    <Container headingText="Writter">
      <Stack p={5}>
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
