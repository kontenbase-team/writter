import {
  EditIcon,
  LockIcon,
  SettingsIcon,
  TimeIcon,
  UnlockIcon,
} from '@chakra-ui/icons'
import { Image, HStack, Button, Stack, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { ColorModeToggle } from '~/components'

interface NavigationProps {
  user: any
}

export const Navigation: FunctionComponent<NavigationProps> = ({ user }) => (
  <VStack p={5} spacing={3}>
    <RemixLink to="/">
      <Image
        boxSize="50px"
        objectFit="contain"
        src="/android-chrome-192x192.png"
        alt="Writter Logo"
        transition="opacity 0.2s ease-in-out"
        _hover={{ opacity: 0.8 }}
      />
    </RemixLink>

    <ColorModeToggle />

    {user && (
      <Button
        as={RemixLink}
        to="/home"
        leftIcon={<TimeIcon />}
        variant="ghost"
        borderRadius="full"
      >
        Home
      </Button>
    )}

    {user && (
      <Button
        as={RemixLink}
        to="/profile"
        leftIcon={<SettingsIcon />}
        variant="ghost"
        borderRadius="full"
      >
        Profile
      </Button>
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
    )}

    {user && (
      <Button
        as={RemixLink}
        to="/signout"
        leftIcon={<LockIcon />}
        variant="outline"
        borderRadius="full"
      >
        Sign out
      </Button>
    )}
  </VStack>
)
