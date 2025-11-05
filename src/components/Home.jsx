import { useEffect, useRef } from 'react'
import { FaGithub, FaLaptopCode, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Typed from 'typed.js'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Home = () => {
  const typedRef = useRef(null)
  const sr = useScrollReveal()

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Android Developer', 'Web Developer', 'Machine learning enthusiast'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (sr) {
      sr.reveal('.home-content', { origin: 'top', delay: 200 })
      sr.reveal('.home-img', { origin: 'bottom', delay: 400 })
    }
  }, [sr])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-[9%] md:px-[9%] pt-32 md:pt-20 pb-8 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-main-color/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-color/20 rounded-full blur-3xl"></div>
      </div>

      <div className="home-content flex-1 order-2 md:order-1 z-10">
        <h3 className="text-3.2rem md:text-4rem font-bold mb-2 bg-gradient-to-r from-text-color to-text-color/70 bg-clip-text text-transparent">
          Hi, My name is
        </h3>
        <h1 className="text-8rem md:text-9rem font-bold leading-tight mb-4 bg-gradient-to-r from-main-color via-accent-color to-main-color bg-clip-text text-transparent animate-gradient">
          Bikash Kumar Yadav
        </h1>
        <h3 className="text-3.2rem md:text-4rem font-bold mb-8">
          And I'm a <span className="text-main-color" ref={typedRef}></span>
        </h3>
        <p className="text-2rem mb-8 text-text-color/90 leading-relaxed">
          Passionate Computer Science Engineering student with expertise in machine learning and
          Android development. Dedicated to tackling real-world challenges and advancing
          technology. Seeking to leverage technical skills to drive innovation.
        </p>
        <div className="social-media flex gap-6 mb-8">
          {[
            { icon: <FaGithub />, href: 'https://github.com/Bikash-Kumar-Yadav' },
            { icon: <FaLaptopCode />, href: 'https://leetcode.com/u/Bikash_Kumar_Yadav/' },
            { icon: <FaInstagram />, href: '#' },
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/bikash-yadav-a22060227/' },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex justify-center items-center bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/50 rounded-full text-2.4rem text-main-color hover:bg-gradient-to-r hover:from-main-color hover:to-accent-color hover:text-snd-bg-color hover:border-transparent hover:shadow-glow hover:scale-110 transition-all duration-500"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <a
          href="/img/bikashresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-11 py-4 bg-gradient-to-r from-main-color to-accent-color rounded-[4rem] shadow-glow text-2rem text-white font-semibold tracking-wide hover:shadow-glow-lg hover:scale-105 transition-all duration-500"
        >
          Download CV
        </a>
      </div>

      <div className="home-img w-full md:w-auto h-auto md:h-screen flex justify-center items-center p-5 order-1 md:order-2 mt-8 md:mt-0 z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-main-color to-accent-color rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <img
            src="/img/my_imagee.jpg"
            alt="Profile"
            className="relative w-[70vw] md:w-[350px] md:h-[350px] h-auto rounded-full border-[10px] border-transparent bg-gradient-to-br from-main-color to-accent-color bg-clip-padding p-1 animate-float hover:scale-105 hover:shadow-glow-lg transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default Home

