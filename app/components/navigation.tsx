import {
  EditIcon,
  LockIcon,
  SettingsIcon,
  TimeIcon,
  UnlockIcon,
} from '@chakra-ui/icons'
import { Image, HStack, Button, Stack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { ColorModeToggle } from '~/components'

interface NavigationProps {
  user: any
}

export const Navigation: FunctionComponent<NavigationProps> = ({ user }) => (
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
  </Stack>
)
