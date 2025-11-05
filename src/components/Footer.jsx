import { FaAngleUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer flex justify-between items-center flex-wrap py-8 px-[9%] bg-snd-bg-color/50 backdrop-blur-sm border-t border-main-color/20">
      <div className="footer-text text-2rem text-text-color/80">
        <p>Copyright &copy; 2024 by Bikash yadav | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop inline-flex justify-center items-center p-2 bg-gradient-to-r from-main-color to-accent-color rounded-[0.8rem] transition-all duration-500 hover:shadow-glow hover:scale-110">
        <a href="#home" onClick={scrollToTop} className="flex items-center justify-center">
          <FaAngleUp className="text-2.4rem text-white" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

