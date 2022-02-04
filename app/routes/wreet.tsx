import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

import { Container } from '~/components'
import { WreetComposer } from '~/features'

interface ComposeNewWreetProps {}

export const meta: MetaFunction = () => ({
  title: 'Compose new Wreet / Writter',
})

const ComposeNewWreet: FunctionComponent<ComposeNewWreetProps> = () => (
  <Container headingText="Compose">
    <WreetComposer />
  </Container>
)

export default ComposeNewWreet
