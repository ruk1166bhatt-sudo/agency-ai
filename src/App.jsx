import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState('dark')

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
      color: theme === 'dark' ? 'white' : 'black',
      minHeight: '100vh'
    }}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Stats theme={theme} />
      <Services theme={theme} />
      <HowItWorks theme={theme} />
      <Work theme={theme} />
      <Testimonials theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export default App