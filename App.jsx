
import './App.css'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Menu from "./components/Menu"
import About from './components/About'
import Product from './components/Product'
import Reviews from './components/Reviews'
import Footer from './components/Footer'


function App() {
return (
   <div >
    <Navbar/>
    <main>
      <div id='home'>
        <Home/>
      </div>

      <div id='menu'>
        <Menu/>
      </div>

      <div id='about'>
      <About/>
      </div>

      <div id='products'>
      <Product/>
      </div>
      <div id='reviews'>
      <Reviews/>
      </div>
    </main>
    <Footer/>
   </div>
  )
}

export default App
