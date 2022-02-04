import { StackDivider, VStack, useColorModeValue } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { Link as RemixLink } from 'remix'

import { WreetCard } from '~/features'
import type { TWreet } from '~/types'

interface WreetsTimelineProps {
  wreets: TWreet[]
}

export const WreetsTimeline: FunctionComponent<WreetsTimelineProps> = ({
  wreets,
}) => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <VStack
      divider={<StackDivider borderColor={borderColor} />}
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
}
