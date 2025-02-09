import { useState } from 'react'

import Header from '../Components/Header/Header'
import Feautred from '../Components/Feautred/Feautred'
import Footer from '../Components/Footer/Footer'
import SpFeautred from '../Components/SpFeautred/SpFeautred'
import Room from '../Components/Room/Room'
function Academics() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <SpFeautred/>
      <Feautred/>
      <Room/>
      <Footer/>
    </>
  )
}
 export default Academics
