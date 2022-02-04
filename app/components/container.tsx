import {
  ArrowBackIcon,
  EditIcon,
  SettingsIcon,
  TimeIcon,
  UnlockIcon,
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
  useMediaQuery,
  VStack,
  Tooltip,
  Flex,
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

  const [isMobile] = useMediaQuery('(max-width: 1024px)')

  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <ChakraContainer px={0} maxWidth="720px">
      <Flex align="flex-start">
        {isMobile ? <NavigationSidebarMobile /> : <NavigationSidebar />}

        <Box
          borderTop={0}
          borderWidth={1}
          borderColor={borderColor}
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
      </Flex>
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
      to="/signin"
      leftIcon={<UnlockIcon />}
      variant="solid"
      colorScheme="red"
      borderRadius="full"
    >
      Sign In
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

export const NavigationSidebarMobile = () => (
  <VStack p={3} spacing={3} align="center">
    <Tooltip label="Writter" aria-label="Writter">
      <RemixLink to="/">
        <Image
          boxSize="40px"
          objectFit="contain"
          src="/android-chrome-192x192.png"
          alt="Writter Logo"
        />
      </RemixLink>
    </Tooltip>

    <ColorModeToggle />

    <Tooltip label="Home">
      <IconButton
        as={RemixLink}
        to="/home"
        icon={<TimeIcon />}
        variant="ghost"
        borderRadius="full"
        aria-label="Go to Home"
      />
    </Tooltip>

    <Tooltip label="Profile">
      <IconButton
        as={RemixLink}
        to="/profile"
        icon={<SettingsIcon />}
        variant="ghost"
        borderRadius="full"
        aria-label="Go to My Profile"
      />
    </Tooltip>

    <Tooltip label="Sign In">
      <IconButton
        as={RemixLink}
        to="/signin"
        icon={<UnlockIcon />}
        variant="solid"
        colorScheme="red"
        borderRadius="full"
        aria-label="Sign in"
      />
    </Tooltip>

    <Tooltip label="Wreet">
      <IconButton
        as={RemixLink}
        to="/wreet"
        icon={<EditIcon />}
        variant="solid"
        colorScheme="red"
        borderRadius="full"
        aria-label="Compose a new Wreet"
      />
    </Tooltip>
  </VStack>
)
