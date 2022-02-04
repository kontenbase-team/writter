import { StackDivider, VStack, Text } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { WreetCard } from '~/features'
import type { TWreet } from '~/types'

interface WreetsTimelineProps {
  wreets: TWreet[]
}

export const WreetsTimeline: FunctionComponent<WreetsTimelineProps> = ({
  wreets,
}) => (
  <VStack
    divider={<StackDivider borderColor="gray.600" />}
    spacing={0}
    align="stretch"
  >
    {wreets.map((wreet) => (
      <RemixLink
        key={wreet._id}
        to={`/${wreet?.createdBy?.handle}/${wreet?._id}`}
      >
        <WreetCard wreet={wreet} isLink />
      </RemixLink>
    ))}
  </VStack>
)
