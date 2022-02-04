import { FunctionComponent } from 'react'
import { LoaderFunction, useLoaderData } from 'remix'

import { kontenbase } from '~/lib'

interface HomeProps {}

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
      <h1>Home</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Home
