import { Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { json, LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { Container } from '~/components'
import { WreetsTimeline } from '~/features'
import { kontenbaseServer } from '~/lib'

interface HomeProps {}

export const meta: MetaFunction = () => ({
  title: 'Home / Writter',
})

export const loader: LoaderFunction = async () => {
  const { data, error } = await kontenbaseServer.service('wreets').find()

  if (error) {
    return json({ error })
  }

  return json(data)
}

const Home: FunctionComponent<HomeProps> = () => {
  const wreets = useLoaderData()

  return (
    <Container headingText="Home Timeline">
      {wreets && <WreetsTimeline wreets={wreets} />}
    </Container>
  )
}

export default Home
