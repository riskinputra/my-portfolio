import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Navbar from '../common/components/elements/Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Navbar />
    </div>
  )
}

export default Home
