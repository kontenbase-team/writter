import {
  chakra,
  Link as ChakraLink,
  Box,
  Text,
  Avatar,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { getCompleteDateTime, getRelativeDate } from '~/lib'
import type { TWreet } from '~/types'
import { getUserHandle, getUserName, getWreetURL } from '~/utils'

interface WreetCardProps {
  wreet: TWreet
  isLink?: boolean
}

interface WreetCardDetailedProps {
  wreet: TWreet
  isLink?: boolean
}

export const WreetCard: FunctionComponent<WreetCardProps> = ({
  wreet,
  isLink,
}) => {
  const user = wreet?.createdBy

  return (
    <Box
      p={5}
      transition="background 0.25s ease-in-out"
      _hover={{
        bg: isLink && 'gray.700',
      }}
    >
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
        </Box>
      </HStack>
    </Box>
  )
}

export const WreetCardDetailed: FunctionComponent<WreetCardDetailedProps> = ({
  wreet,
  isLink,
}) => {
  const user = wreet?.createdBy

  return (
    <Stack
      p={5}
      spacing={5}
      transition="background 0.25s ease-in-out"
      _hover={{ bg: isLink && 'gray.700' }}
    >
      <HStack
        as={RemixLink}
        to={`/${getUserHandle(user)}`}
        spacing={3}
        transition="opacity 0.25s ease-in-out"
        _hover={{ opacity: 0.8 }}
      >
        <Avatar name={getUserName(user)} />
        <Stack spacing={0}>
          <chakra.span size="sm" fontWeight="bold">
            {getUserName(user)}
          </chakra.span>
          <chakra.span size="sm" color="gray.500">
            @{user?.handle}
          </chakra.span>
        </Stack>
      </HStack>

      <Text mt={1} fontSize="3xl">
        {wreet?.content}
      </Text>

      <HStack>
        <ChakraLink as={RemixLink} to={getWreetURL(wreet)}>
          <chakra.span>{getCompleteDateTime(wreet?.createdAt)}</chakra.span>
        </ChakraLink>
      </HStack>
    </Stack>
  )
}
