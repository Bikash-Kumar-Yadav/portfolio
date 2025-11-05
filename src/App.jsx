import { useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// Lazy load components for better performance
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  useEffect(() => {
    // Load Scroll Reveal script with better performance
    if (!document.querySelector('script[src*="scrollreveal"]')) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg-color text-text-color font-nunito">
      <Header />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main-color"></div></div>}>
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App

