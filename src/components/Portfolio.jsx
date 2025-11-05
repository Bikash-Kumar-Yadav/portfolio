import { useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Portfolio = () => {
  const sr = useScrollReveal()

  useEffect(() => {
    if (sr) {
      sr.reveal('.portfolio-box', { origin: 'bottom', interval: 200 })
    }
  }, [sr])

  const projects = [
    {
      image: '/img/social.jpg',
      title: 'Social Media Platform',
      description:
        'Developed a dynamic Android social media platform, designed for seamless user interaction and content sharing. This application integrates robust features like user profiles, multimedia uploads, real-time messaging, and notifications, ensuring a vibrant and engaging social experience on mobile devices.',
    },
    {
      image: '/img/phishing.jpg',
      title: 'phishing URLs Detection using ML',
      description:
        'Implemented a sophisticated phishing URL detection system leveraging machine learning techniques. This project employs feature engineering and supervised learning algorithms to classify URLs accurately, enhancing cybersecurity measures against online threats.',
    },
    {
      image: '/img/ecom.jpg',
      title: 'Ecommerce Website',
      description:
        'Developed a sophisticated e-commerce website featuring intuitive navigation, secure payment gateways, product categorization, search functionality, and user reviews for enhanced shopping experiences. The platform ensures seamless integration with inventory management and order processing systems, providing a robust solution for online retail.',
    },
    {
      image: '/img/deep.jpg',
      title: 'deepfake face detection',
      description:
        'Developed a robust deepfake face detection system using LRCN and Xception models, ensuring accurate identification of manipulated videos. This project integrates temporal analysis and advanced neural networks to enhance media authenticity and combat digital misinformation effectively.',
    },
  ]

  return (
    <section id="portfolio" className="min-h-screen bg-snd-bg-color/50 backdrop-blur-sm px-[9%] py-[10rem] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-main-color/10 rounded-full blur-3xl"></div>
      
      <h2 className="text-6.5rem md:text-7.5rem text-center mb-16 z-10 relative">
        Latest <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">Projects</span>
      </h2>

      <div className="portfolio-container grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch z-10 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-box relative rounded-[2rem] shadow-glow overflow-hidden group h-[400px] border-2 border-main-color/20 hover:border-main-color transition-all duration-500"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            <div className="portfolio-layer absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-main-color via-accent-color/90 to-transparent flex justify-center items-center flex-col text-center px-16 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-3.6rem mb-2 font-bold text-white">{project.title}</h4>
              <p className="text-2rem my-1 mb-4 text-white/90">{project.description}</p>
              <div className="w-20 h-20 flex justify-center items-center bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaExternalLinkAlt className="text-2.4rem text-main-color" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio

