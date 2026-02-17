import React from 'react'
import HeroSection from "../components/HeroSection/HeroSection";
import StatsCounters from '../components/StatsCountersSection/StatsCounters';
function Home() {
  return (
    <>
      <div className="page">
        <HeroSection/>
        <StatsCounters/>
      </div>
    </>
  )
}

export default Home
