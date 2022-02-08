import {
  Box,
  Avatar,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'

import type { TUser } from '~/types'
import { getUserHandle, getUserName } from '~/utils'

interface WreetCardProps {
  user: TUser
}

export const UserProfile: FunctionComponent<WreetCardProps> = ({ user }) => (
  <Box p={5}>
    <Stack spacing={5}>
      <Avatar size="2xl" name={getUserName(user)} />
      <Heading as="h1" size="lg">
        {getUserName(user)}
      </Heading>
      <Heading
        as="h2"
        size="md"
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        @{getUserHandle(user)}
      </Heading>
    </Stack>
  </Box>
)
