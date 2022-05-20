import { useRef } from 'react'
import type { NextPage } from 'next'

import Navbar from '../common/components/elements/Navbar/Navbar'
import Hero from '../common/components/ui/Hero/Hero'
import About from '../common/components/ui/About/About'
import Experience from '../common/components/ui/Experience/Experience'
import Work from '../common/components/ui/Work/Work'

import { fetchAPI } from '../lib/api'

const Home: NextPage = ({ experiences, works }: any) => {
  const sectionRef = useRef()

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
              <About ref={sectionRef} />
              <Experience ref={sectionRef}  experiences={experiences} />
              <Work ref={sectionRef} works={works} />
            </div>
          </div>
        </main>
        </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [experiencesRes, worksRes] = await Promise.all([
    fetchAPI("/experiences", { populate: ["tasks"] }),
    fetchAPI("/works", { populate: ["image", "tags"] })
  ])

  return {
    props: {
      experiences: experiencesRes.data,
      works: worksRes.data
    },
    revalidate: 1,
  }
}

export default Home
