import { Container, Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { WreetsTimeline } from '~/features'
import { kontenbase } from '~/lib'

interface HomeProps {}

export const meta: MetaFunction = () => ({
  title: 'Home / Writter',
})

export const loader: LoaderFunction = async () => {
  const { data, error } = await kontenbase.service('wreets').find()

  if (error) {
    return json({ error })
  }

  return json(data)
}

const Home: FunctionComponent<HomeProps> = () => {
  const wreets = useLoaderData()

  return (
    <Container maxWidth="600px">
      <Heading as="h1">Home</Heading>
      {wreets && <WreetsTimeline wreets={wreets} />}
    </Container>
  )
}

export default Home
