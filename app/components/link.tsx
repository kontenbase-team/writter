import { Link as ChakraLink } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

interface LinkProps {
  to: string
  children: React.ReactNode
}

export const Link: FunctionComponent<LinkProps> = ({ to, children }) => (
  <ChakraLink as={RemixLink} color="brand.500" to={to}>
    {children}
  </ChakraLink>
)
