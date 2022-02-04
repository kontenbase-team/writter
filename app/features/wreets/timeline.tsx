import { StackDivider, VStack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

import { WreetCard } from '~/features'
import type { TWreet } from '~/types'

interface WreetsTimelineProps {
  wreets: TWreet[]
}

export const WreetsTimeline: FunctionComponent<WreetsTimelineProps> = ({
  wreets,
}) => (
  <VStack
    borderColor="gray.600"
    borderWidth={1}
    borderRadius={5}
    divider={<StackDivider borderColor="gray.600" />}
    spacing={0}
    align="stretch"
  >
    {wreets.map((wreet) => (
      <WreetCard key={wreet._id} wreet={wreet} />
    ))}

    <Text as="pre" fontSize="xs">
      {JSON.stringify(wreets, null, 2)}
    </Text>
  </VStack>
)
