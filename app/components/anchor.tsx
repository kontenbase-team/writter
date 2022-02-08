import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface AnchorProps {
  href: string
  children: React.ReactNode
}

export const Anchor: FunctionComponent<AnchorProps> = ({ href, children }) => (
  <ChakraLink
    isExternal
    color={useColorModeValue('brand.800', 'brand.500')}
    href={href}
  >
    {children}
  </ChakraLink>
)
