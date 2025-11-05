import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const About = () => {
  const sr = useScrollReveal()

  useEffect(() => {
    if (sr) {
      sr.reveal('.about-img', { origin: 'left', delay: 200 })
      sr.reveal('.about-content', { origin: 'right', delay: 400 })
    }
  }, [sr])

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 bg-snd-bg-color/50 backdrop-blur-sm px-[9%] md:px-[9%] py-[10rem] md:py-[10rem] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-color/10 rounded-full blur-3xl"></div>
      
      <div className="about-img relative">
        <div className="absolute inset-0 bg-gradient-to-r from-main-color to-accent-color rounded-[15px] blur-xl opacity-30"></div>
        <img
          src="/img/aboutpic.jpg"
          alt="About"
          className="relative w-[90vw] md:w-[350px] md:h-[350px] h-auto object-cover rounded-[15px] shadow-glow animate-float hover:scale-105 transition-transform duration-300 mt-8 md:mt-0 border-2 border-main-color/30"
        />
      </div>

      <div className="about-content flex-1 z-10">
        <h2 className="text-5.5rem text-center md:text-left leading-tight mb-4">
          About <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">Me</span>
        </h2>
        <h3 className="text-3.2rem mb-4 text-main-color">Android Developer</h3>
        <p className="text-2rem my-8 mb-12 text-text-color/90 leading-relaxed">
          I am a passionate Computer Science Engineering student with expertise in machine learning
          and Android development. I am dedicated to tackling real-world challenges and advancing
          technology. I thrive on creative problem-solving and continuous learning, always eager to
          leverage my skills to drive innovation and make a positive impact in the tech industry.
        </p>
        <a
          href="#"
          className="inline-block px-11 py-4 bg-gradient-to-r from-main-color to-accent-color rounded-[4rem] shadow-glow text-2rem text-white font-semibold tracking-wide hover:shadow-glow-lg hover:scale-105 transition-all duration-500"
        >
          Read more
        </a>
      </div>
    </section>
  )
}

export default About

