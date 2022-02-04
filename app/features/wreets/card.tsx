import { chakra, Box, Text, Avatar, HStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { getRelativeDate } from '~/lib'
import type { TWreet } from '~/types'
import { getUserName } from '~/utils'

interface WreetCardProps {
  wreet: TWreet
}

export const WreetCard: FunctionComponent<WreetCardProps> = ({ wreet }) => {
  const user = wreet?.createdBy

  return (
    <RemixLink to={`/${user?.handle}/${wreet?._id}`}>
      <Box p={5}>
        <HStack spacing={5} align="flex-start">
          <Avatar name={getUserName(user)} />
          <Box>
            <HStack>
              <chakra.span size="sm" fontWeight="bold">
                {getUserName(user)}
              </chakra.span>
              <chakra.span size="sm" color="gray.500">
                <span>@{user?.handle}</span>
                <span> · </span>
                <span>{getRelativeDate(wreet?.createdAt)}</span>
              </chakra.span>
            </HStack>
            <Text mt={1}>{wreet?.content}</Text>
            <Text mt={1}>{wreet?.content}</Text>
            <Text mt={1}>{wreet?.content}</Text>
          </Box>
        </HStack>
      </Box>
    </RemixLink>
  )
}
