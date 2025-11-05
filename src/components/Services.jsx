import { useEffect } from 'react'
import { FaCode, FaPalette, FaAndroid } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Services = () => {
  const sr = useScrollReveal()

  useEffect(() => {
    if (sr) {
      sr.reveal('.services-box', { origin: 'bottom', interval: 200 })
    }
  }, [sr])

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description:
        'I provide professional web development services, creating responsive and engaging websites. My expertise spans both front-end and back-end development, ensuring seamless web experiences. Whether you need an e-commerce site, CMS, or performance optimization, I deliver tailored solutions to enhance your online presence.',
      link: 'https://en.wikipedia.org/wiki/Web_development',
    },
    {
      icon: <FaPalette />,
      title: 'Machine Learning',
      description:
        'I offer comprehensive machine learning and deep learning services, specializing in predictive analytics, NLP, and computer vision. Leveraging advanced algorithms, I develop solutions for tasks like phishing URL detection. My focus is on creating intelligent systems that meet your specific requirements.',
      link: 'https://ieeexplore.ieee.org/document/9824801',
    },
    {
      icon: <FaAndroid />,
      title: 'Android Development',
      description:
        'I specialize in developing robust and user-friendly Android applications. From concept to deployment, I ensure your app is optimized for performance across various devices. Whether it\'s a business app, social platform, or utility tool, I deliver customized solutions tailored to your needs.',
      link: 'https://www.researchgate.net/publication/263027693_Mobile_Food_Ordering_Application_using_Android_OS_Platform',
    },
  ]

  return (
    <section id="services" className="min-h-screen px-[9%] py-[10rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-main-color/10 rounded-full blur-3xl"></div>
      </div>
      
      <h2 className="text-6.5rem md:text-7.5rem text-center mb-20">
        My <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">Services</span>
      </h2>

      <div className="services-container flex justify-center items-stretch flex-wrap gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="services-box flex-1 min-w-full md:min-w-[calc(30%-2rem)] bg-snd-bg-color/50 backdrop-blur-sm p-8 rounded-[2rem] text-center border-2 border-main-color/20 hover:border-main-color hover:scale-105 hover:shadow-glow transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-main-color/10 to-accent-color/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="text-8rem mb-4 bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">{service.icon}</div>
              <h3 className="text-3.2rem mb-4 text-text-color">{service.title}</h3>
              <p className="text-2rem mb-12 text-text-color/80">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-11 py-4 bg-gradient-to-r from-main-color to-accent-color rounded-[4rem] shadow-glow text-2rem text-white font-semibold tracking-wide hover:shadow-glow-lg hover:scale-105 transition-all duration-500"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

