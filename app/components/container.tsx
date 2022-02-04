import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Button,
  Container as ChakraContainer,
  Divider,
  Heading,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useNavigate } from 'remix'

interface ContainerProps {
  isBackDisabled?: boolean
  headingText?: string
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({
  isBackDisabled,
  headingText,
  children,
}) => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <ChakraContainer
      px={0}
      borderColor="gray.600"
      borderWidth={1}
      borderTop={0}
    >
      <HStack as="header" p={5} spacing={5}>
        {!isBackDisabled && (
          <IconButton
            onClick={navigateBack}
            aria-label="Navigate Back"
            icon={<ArrowBackIcon />}
            borderRadius="full"
            variant="ghost"
          />
        )}
        <Heading as="h1" size="lg">
          {headingText || 'Writter'}
        </Heading>
      </HStack>

      <Divider />

      {children}
    </ChakraContainer>
  )
}
