import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LatestComponent from '../components/Latest'
import { DataFetching } from '../components/Latest'
export default function Landing() {
  return (
    <div>
      <Navbar />
      <Footer />
      <LatestComponent/>
      <DataFetching/>
    </div>
  )
}

