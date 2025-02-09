import { useState } from 'react'

import Footer from "../Components/Footer/Footer"
import Activities from "../Components/Activities/Activities"
import Event from "../Components/Eventss/Events"
import Support from "../Components/Support/Support"

import Header from "../Components/Header/Header"
function Student() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Activities/>
    <Event/>
    <Support/>
    <Footer/>
  </>
  )
}

export default Student
