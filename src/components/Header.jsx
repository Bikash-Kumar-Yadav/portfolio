import { useState, useEffect, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 100)

    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 150
      const sectionId = section.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId)
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full py-6 px-[9%] flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-color/95 backdrop-blur-md shadow-lg shadow-main-color/20'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className="text-3rem text-text-color font-bold cursor-pointer bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent hover:scale-105 transition-transform"
      >
        Portfolio
      </a>

      <div
        className="text-3.6rem text-text-color cursor-pointer md:hidden hover:text-main-color transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block absolute md:static top-full left-0 w-full md:w-auto bg-bg-color/98 backdrop-blur-md md:bg-transparent border-t md:border-0 border-gray-700/50 md:shadow-none shadow-xl md:shadow-none py-4 md:py-0 px-[3%] md:px-0`}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-2.4rem md:text-2rem font-bold ml-0 md:ml-16 my-2 md:my-0 transition-all duration-300 relative group ${
                activeSection === link.id
                  ? 'text-main-color'
                  : 'text-text-color hover:text-main-color'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-main-color to-accent-color transition-all duration-300 group-hover:w-full ${
                  activeSection === link.id ? 'w-full' : ''
                }`}
              ></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header

