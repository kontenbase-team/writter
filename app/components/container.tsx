import {
  Box,
  Container as ChakraContainer,
  Divider,
  Heading,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface ContainerProps {
  headingText?: string
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({
  headingText,
  children,
}) => (
  <ChakraContainer px={0} borderColor="gray.600" borderWidth={1} borderTop={0}>
    <Box as="header" p={5}>
      <Heading as="h1" size="lg">
        {headingText || 'Writter'}
      </Heading>
    </Box>

    <Divider />

    {children}
  </ChakraContainer>
)
