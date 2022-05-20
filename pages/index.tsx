import type { NextPage } from 'next'

import Navbar from '../common/components/elements/Navbar/Navbar'
import Hero from '../common/components/ui/Hero/Hero'

const Home: NextPage = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div id="content">
        <main>
          <div className="flex -mx-0 md:-mx-2 flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/3 -px-0 md:-px-2">
              <div className="w-11/12">
                <Hero />
              </div>
            </div>
            <div className="w-full md:w-2/3 -px-0 md:-px-2">
              About
            </div>
          </div>
        </main>
        </div>
    </div>
  )
}

export default Home
