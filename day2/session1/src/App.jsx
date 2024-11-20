import AboutUs from './AboutUs'
import './App.css'
import ContactInfo from './ContactInfo'
import ErrorMessage from './ErrorMessage'
import Footer from './Footer'
import Greeting from './Greeting'
import Products from './Products'
import SocialMediaLink from './SocialMediaLinks'

function App() {

  return (
    <>
    <Greeting course="Angular"/>
    <Greeting course="React"/>
    <AboutUs company="VM Online Training"/>
    <AboutUs company="Youtube"/>
    <AboutUs company="Us"/>
    <ContactInfo email="admin@gmail.com" phone="1234567890"/>
    <Footer/>
    <ErrorMessage/>
    <SocialMediaLink/>
    <Products/>
    </>
  )
}

export default App
