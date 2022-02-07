/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
import {
  ArrowBackIcon,
  EditIcon,
  LockIcon,
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
  Tooltip,
  Flex,
} from '@chakra-ui/react'
import { Fragment, FunctionComponent, useEffect } from 'react'
import { Link as RemixLink, useNavigate } from 'remix'

import { ColorModeToggle } from '~/components'
import { useAuth, useNotAuthorized, useUser } from '~/hooks'

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
  const user = useUser()

  const navigate = useNavigate()
  const navigateBack = () => {
    navigate(-1)
  }

  const [isMobile] = useMediaQuery('(max-width: 1024px)')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  useEffect(() => {
    if (user) {
      console.log('User changed')
    }
  }, [user])

  return (
    <ChakraContainer px={0} maxWidth="720px">
      <Flex align="flex-start">
        <NavigationSidebar isMobile={isMobile} user={user} />

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

export const NavigationSidebar = ({
  isMobile,
  user,
}: {
  isMobile: boolean
  user?: any
}) => (
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

    {!isMobile ? (
      <Button
        as={RemixLink}
        to="/home"
        leftIcon={<TimeIcon />}
        variant="ghost"
        borderRadius="full"
      >
        Home
      </Button>
    ) : (
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
    )}

    {user && (
      <Fragment>
        {!isMobile ? (
          <Button
            as={RemixLink}
            to="/profile"
            leftIcon={<SettingsIcon />}
            variant="ghost"
            borderRadius="full"
          >
            Profile
          </Button>
        ) : (
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
        )}
      </Fragment>
    )}

    {user && (
      <Fragment>
        {!isMobile ? (
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
        ) : (
          <Tooltip label="Wreet">
            <IconButton
              as={RemixLink}
              to="/wreet"
              icon={<EditIcon />}
              variant="solid"
              borderRadius="full"
              colorScheme="red"
              aria-label="Wreet"
            />
          </Tooltip>
        )}
      </Fragment>
    )}

    {!user && (
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
    )}

    {user && (
      <Fragment>
        {!isMobile ? (
          <Button
            as={RemixLink}
            to="/signout"
            leftIcon={<LockIcon />}
            variant="outline"
            borderRadius="full"
          >
            Sign Out
          </Button>
        ) : (
          <Tooltip label="Sign out">
            <IconButton
              as={RemixLink}
              to="/signout"
              icon={<LockIcon />}
              variant="outline"
              borderRadius="full"
              aria-label="Sign out"
            />
          </Tooltip>
        )}
      </Fragment>
    )}
  </Stack>
)
