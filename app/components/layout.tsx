import { Container, Flex } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

import { Navigation } from '~/components'

interface LayoutProps {
  data: any
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ data, children }) => (
  <Container px={0} maxWidth="720px">
    <Flex align="flex-start" flex={1} height="100vh">
      <Navigation user={data.user} />

      {children}
    </Flex>
  </Container>
)
