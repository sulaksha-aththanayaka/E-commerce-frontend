import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import CategoryItems from '../components/CategoryItems'
import PopularItems from '../components/PopularItems'

function Home() {
  return (
    <div>
        <Hero/>
        <FeaturedProducts/>
        <CategoryItems/>
        <PopularItems/>
    </div>
  )
}

export default Home