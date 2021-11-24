import Content from '@components/content/Content'
import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => (
  <div className="About"><Content text="About Page"><Link href="/">Home</Link></Content></div>
)

export default About
