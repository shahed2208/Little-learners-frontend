import { useState } from 'react'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import OurHistory from '../Components/OurHistory/OurHistory'
import OurTeam from '../Components/OurTeam/OurTeam'
import Awards from '../Components/Awards/Awards'

import Mission from '../Components/Mission/Mission'


function About() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>   
   
    <Mission/>
    <Awards/>
    <OurHistory/>
    <OurTeam/>
    <Footer/>
    </>
  )
}
export default About