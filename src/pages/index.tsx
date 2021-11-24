import Content from '@components/content/Content'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => (
  <div className="Home"><Content text="Home Page"><Link href="/about">About</Link></Content></div>
)

export default Home
