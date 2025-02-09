import { useState } from 'react'
import Footer from "../Components/Footer/Footer"
import OurBenefits from "../Components/OurBenefits/OurBenefits"
import Testimonials from "../Components/Testimonials/Testimonials"
import FAQSection from "../Components/FAQSection/FAQSection"
import Navigate from "../Components/Navigate/Navigate"
import Header from "../Components/Header/Header"
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <OurBenefits/>
    <Testimonials/>
    <FAQSection/>
    <Navigate/>
    <Footer/>
    </>
  )
}

export default Home
