import { Heading } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'

import { kontenbase } from '~/lib'

interface HomeProps {}

export const meta: MetaFunction = () => ({
  title: 'Home - Writter',
})

export const loader: LoaderFunction = async () => {
  const { data, error } = await kontenbase.service('wreets').find()

  return {
    wreets: data,
    error,
  }
}

const Home: FunctionComponent<HomeProps> = () => {
  const data = useLoaderData()

  return (
    <div>
      <Heading as="h1">Home</Heading>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home
