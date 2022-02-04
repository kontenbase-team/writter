import { Link } from 'remix'

export default function Index() {
  return (
    <div>
      <h1>Writter</h1>
      <ul>
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
