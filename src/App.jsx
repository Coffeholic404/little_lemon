import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import AboutUs from "./container/AboutUs/AboutUs";
import SpecialMenu from "./container/Menu/SpecialMenu";
import Chef from './container/Chef/Chef';
import Gallery from './container/Gallery/Gallery';
import Footer from './container/Footer/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Gallery/>
    <Footer />
    </>
  )
}

export default App
