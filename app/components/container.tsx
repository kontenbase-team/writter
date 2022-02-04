import {
  ArrowBackIcon,
  EditIcon,
  SettingsIcon,
  TimeIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Image,
  Container as ChakraContainer,
  Divider,
  Heading,
  HStack,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink, useNavigate } from 'remix'

import { ColorModeToggle } from '~/components'

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

  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <ChakraContainer px={0} maxWidth="720px">
      <HStack align="flex-start">
        <NavigationSidebar />

        <Box
          borderColor={borderColor}
          borderWidth={1}
          borderTop={0}
          width="100%"
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
        </Box>
      </HStack>
    </ChakraContainer>
  )
}

export const NavigationSidebar = () => (
  <Stack p={5} spacing={3}>
    <HStack spacing={5} justify="space-between">
      <RemixLink to="/">
        <Image
          boxSize="50px"
          objectFit="contain"
          src="/android-chrome-192x192.png"
          alt="Writter Logo"
        />
      </RemixLink>
      <ColorModeToggle />
    </HStack>

    <Button
      as={RemixLink}
      to="/home"
      leftIcon={<TimeIcon />}
      variant="ghost"
      borderRadius="full"
    >
      Home
    </Button>

    <Button
      as={RemixLink}
      to="/profile"
      leftIcon={<SettingsIcon />}
      variant="ghost"
      borderRadius="full"
    >
      Profile
    </Button>

    <Button
      as={RemixLink}
      to="/wreet"
      leftIcon={<EditIcon />}
      variant="solid"
      colorScheme="red"
      borderRadius="full"
    >
      Wreet
    </Button>
  </Stack>
)
