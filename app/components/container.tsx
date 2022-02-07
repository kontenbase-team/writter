import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useNavigate } from 'remix'

interface ContainerProps {
  isBackDisabled?: boolean
  headingText?: string
  children: React.ReactNode
}

/**
 * Container is not the Layout
 */
export const Container: FunctionComponent<ContainerProps> = ({
  isBackDisabled,
  headingText,
  children,
}) => {
  const navigate = useNavigate()
  const navigateBack = () => {
    navigate(-1)
  }
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Box
      borderTop={0}
      borderWidth={1}
      borderColor={borderColor}
      width="100%"
      maxWidth="600px"
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
        <Heading as="h1" size="lg" lineHeight="40px">
          {headingText || 'Writter'}
        </Heading>
      </HStack>

      <Divider />

      {children}
    </Box>
  )
}
