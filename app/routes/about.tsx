import { Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { MetaFunction } from 'remix'

interface AboutProps {}

export const meta: MetaFunction = () => ({
  title: 'About - Writter',
})

const About: FunctionComponent<AboutProps> = () => (
  <div>
    <Heading as="h1">About</Heading>
  </div>
)

export default About
