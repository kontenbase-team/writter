import { chakra, Box, Heading, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

import type { TWreet } from '~/types'

interface WreetCardProps {
  wreet: TWreet
}

export const WreetCard: FunctionComponent<WreetCardProps> = ({ wreet }) => (
  <Box p={3}>
    <Heading as="h4" size="sm">
      <chakra.span>{wreet?.createdBy?.firstName}</chakra.span>
      <chakra.span color="gray.500"> @{wreet?.createdBy?.handle}</chakra.span>
    </Heading>

    <Text mt={1}>{wreet?.content}</Text>
  </Box>
)
