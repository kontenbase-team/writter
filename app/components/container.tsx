import { Container as ChakraContainer } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <ChakraContainer borderColor="gray.600" borderWidth={1} px={0}>
    {children}
  </ChakraContainer>
)
