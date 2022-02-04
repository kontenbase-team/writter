import { Heading } from '@chakra-ui/react'
import { Link, MetaFunction } from 'remix'

export const meta: MetaFunction = () => ({
  title: 'Writter',
})

export default function Index() {
  return (
    <div>
      <Heading as="h1">Writter</Heading>
      <ul>
        <li>
          <Link to="/">Index</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
