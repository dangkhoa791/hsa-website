import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ScoreConverter from './components/ScoreConverter'
import Structure from './components/Structure'
import Schedule from './components/Schedule'
import Registration from './components/Registration'
import Community from './components/Community'
import News from './components/News'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ScoreConverter />
        <Structure />
        <Schedule />
        <Registration />
        <Community />
        <News />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
