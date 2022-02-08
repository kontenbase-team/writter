/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import {
  chakra,
  Link as ChakraLink,
  Box,
  Text,
  Avatar,
  HStack,
  Stack,
  Flex,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Form, Link as RemixLink } from 'remix'

import { getCompleteDateTime, getRelativeDate } from '~/lib'
import type { TUser, TWreet } from '~/types'
import { getUserHandle, getUserName, getWreetURL } from '~/utils'

interface WreetCardProps {
  wreet: TWreet
  isLink?: boolean
}

interface WreetCardDetailedProps {
  wreet: TWreet
  user?: TUser
  transition?: any
  isLink?: boolean
}

interface WreetContentProps {
  content: string
  fontSize?: string
}

export const WreetCard: FunctionComponent<WreetCardProps> = ({
  wreet,
  isLink,
}) => {
  const wreetOwner = wreet?.createdBy
  const hoverBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box
      p={5}
      transition="background 0.25s ease-in-out"
      _hover={{ bg: isLink && hoverBackground }}
    >
      <HStack spacing={5} align="flex-start">
        <Avatar size="md" name={getUserName(wreetOwner)} />
        <Box>
          <Flex flexWrap="wrap" gap={[0, 1, 3]}>
            <chakra.span size="sm" fontWeight="bold">
              {getUserName(wreetOwner)}
            </chakra.span>
            <chakra.span size="sm" color="gray.500">
              <span>@{wreetOwner?.handle}</span>
              <span> · </span>
              <span>{getRelativeDate(wreet?.createdAt)}</span>
            </chakra.span>
          </Flex>

          <Box mt={2}>
            <WreetContent content={wreet?.content} />
          </Box>
        </Box>
      </HStack>
    </Box>
  )
}

export const WreetCardDetailed: FunctionComponent<WreetCardDetailedProps> = ({
  user,
  wreet,
  transition,
  isLink,
}) => {
  const wreetOwner = wreet?.createdBy
  const isOwned = user?._id === wreetOwner?._id

  return (
    <Stack
      p={5}
      spacing={5}
      transition="background 0.25s ease-in-out"
      _hover={{ bg: isLink && 'gray.700' }}
    >
      <Flex
        as={RemixLink}
        to={`/${getUserHandle(wreetOwner)}`}
        gap={3}
        align="center"
        flexWrap="wrap"
        transition="opacity 0.25s ease-in-out"
        _hover={{ opacity: 0.8 }}
      >
        <Avatar size="lg" name={getUserName(wreetOwner)} />
        <Stack spacing={0} fontSize="xl">
          <chakra.span fontWeight="bold">{getUserName(wreetOwner)}</chakra.span>
          <chakra.span color="gray.500">@{wreetOwner?.handle}</chakra.span>
        </Stack>
      </Flex>

      <WreetContent content={wreet?.content} fontSize="2xl" />

      <HStack>
        <ChakraLink as={RemixLink} to={getWreetURL(wreet)}>
          <chakra.span>{getCompleteDateTime(wreet?.createdAt)}</chakra.span>
        </ChakraLink>

        {isOwned && (
          <Form method="post">
            <input type="hidden" name="_method" value="delete" />
            <Button
              type="submit"
              colorScheme="red"
              variant="ghost"
              size="xs"
              isLoading={transition.state === 'submitting'}
              loadingText={
                transition.state === 'submitting'
                  ? 'Deleting...'
                  : transition.state === 'loading'
                  ? 'Deleted!'
                  : 'Delete'
              }
            >
              Delete
            </Button>
          </Form>
        )}
      </HStack>
    </Stack>
  )
}

export const WreetContent: FunctionComponent<WreetContentProps> = ({
  content,
  fontSize = 'lg',
}) => (
  <Box className="wreet-content" fontSize={fontSize}>
    {content.split('\n').map((sentence, key) => {
      if (sentence?.length) {
        return <Text key={key}>{sentence}</Text>
      }
      return <Text key={key} py={3} />
    })}
  </Box>
)
