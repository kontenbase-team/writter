import { Stack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container, Anchor } from '~/components'

interface AboutProps {}

export const meta: MetaFunction = () => ({
  title: 'About Writter / Open source Twitter clone',
})

const About: FunctionComponent<AboutProps> = () => (
  <Container headingText="About">
    <Stack p={5}>
      <Text>
        Writter is a <Anchor href="https://twitter.com">Twitter</Anchor> clone
        made with <Anchor href="https://remix.run">Remix</Anchor> and{' '}
        <Anchor href="https://kontenbase.com">Kontenbase</Anchor>
      </Text>
      <Text>
        GitHub repository:{' '}
        <Anchor href="https://github.com/kontenbase-team/writter">
          github.com/kontenbase-team/writter
        </Anchor>
      </Text>
      <Text>
        Deployed on Vercel:{' '}
        <Anchor href="https://writter.kontenbase.com">
          writter.kontenbase.com
        </Anchor>
      </Text>
    </Stack>
  </Container>
)

export default About
