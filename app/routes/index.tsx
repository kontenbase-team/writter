import { Stack, Text } from '@chakra-ui/react'
import { MetaFunction } from 'remix'

import { Anchor, Container } from '~/components'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function Index() {
  return (
    <Container headingText="Writter" isBackDisabled>
      <Stack p={5}>
        <Text>
          Writter is a <Anchor href="https://twitter.com">Twitter</Anchor> clone
          made with <Anchor href="https://remix.run">Remix</Anchor> and{' '}
          <Anchor href="https://kontenbase.com">Kontenbase</Anchor>
        </Text>
      </Stack>
    </Container>
  )
}
