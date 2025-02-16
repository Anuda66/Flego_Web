import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Component/Navbar"
import About from './Pages/About'
import Projects from './Pages/Project'
import Service from './Pages/Service'
import Industries from './Pages/Industries'
import FuturePlans from './Pages/FuturePlans'
import ContactUs from './Pages/ContactUs'
import Footer from "./Component/Footer"
import GoToTop from "./Component/GoToTop"

function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/futurePlans" element={<FuturePlans/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
      <GoToTop/>
    </div>
  )
}

export default App
