import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const sr = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    if (sr) {
      sr.reveal('form', { origin: 'bottom', delay: 200 })
    }
  }, [sr])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission handled by Web3Forms
    const form = e.target
    form.submit()
  }

  return (
    <section id="contact" className="min-h-screen px-[9%] py-[10rem] relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-color/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-main-color/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[75rem] mx-auto">
        <h2 className="text-5.5rem text-center mb-16">
          Contact <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">Me</span>
        </h2>
        
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-[70rem] mx-auto"
        >
          <input type="hidden" name="access_key" value="a4cda705-64f2-456e-9b6f-66ea197bd710" />

          {/* First row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative group">
              <input
                type="text"
                name="full name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-7 text-2rem text-text-color bg-snd-bg-color/60 backdrop-blur-md border-2 border-main-color/30 rounded-2xl focus:border-main-color focus:outline-none focus:shadow-glow focus:bg-snd-bg-color/80 transition-all duration-300 placeholder:text-text-color/40"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-color/0 via-main-color/0 to-accent-color/0 group-hover:from-main-color/5 group-hover:via-main-color/5 group-hover:to-accent-color/5 pointer-events-none transition-all duration-300"></div>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-7 text-2rem text-text-color bg-snd-bg-color/60 backdrop-blur-md border-2 border-main-color/30 rounded-2xl focus:border-main-color focus:outline-none focus:shadow-glow focus:bg-snd-bg-color/80 transition-all duration-300 placeholder:text-text-color/40"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-color/0 via-main-color/0 to-accent-color/0 group-hover:from-main-color/5 group-hover:via-main-color/5 group-hover:to-accent-color/5 pointer-events-none transition-all duration-300"></div>
            </div>
          </div>

          {/* Second row of inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative group">
              <input
                type="number"
                name="mobile number"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-7 text-2rem text-text-color bg-snd-bg-color/60 backdrop-blur-md border-2 border-main-color/30 rounded-2xl focus:border-main-color focus:outline-none focus:shadow-glow focus:bg-snd-bg-color/80 transition-all duration-300 placeholder:text-text-color/40"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-color/0 via-main-color/0 to-accent-color/0 group-hover:from-main-color/5 group-hover:via-main-color/5 group-hover:to-accent-color/5 pointer-events-none transition-all duration-300"></div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="email subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-7 text-2rem text-text-color bg-snd-bg-color/60 backdrop-blur-md border-2 border-main-color/30 rounded-2xl focus:border-main-color focus:outline-none focus:shadow-glow focus:bg-snd-bg-color/80 transition-all duration-300 placeholder:text-text-color/40"
                required
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-color/0 via-main-color/0 to-accent-color/0 group-hover:from-main-color/5 group-hover:via-main-color/5 group-hover:to-accent-color/5 pointer-events-none transition-all duration-300"></div>
            </div>
          </div>

          {/* Message textarea */}
          <div className="relative group mb-8">
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-7 text-2rem text-text-color bg-snd-bg-color/60 backdrop-blur-md border-2 border-main-color/30 rounded-2xl resize-none focus:border-main-color focus:outline-none focus:shadow-glow focus:bg-snd-bg-color/80 transition-all duration-300 placeholder:text-text-color/40 min-h-[200px]"
              required
            ></textarea>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-main-color/0 via-main-color/0 to-accent-color/0 group-hover:from-main-color/5 group-hover:via-main-color/5 group-hover:to-accent-color/5 pointer-events-none transition-all duration-300"></div>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-16 py-6 bg-gradient-to-r from-main-color to-accent-color rounded-[4rem] shadow-glow text-2rem text-white font-semibold tracking-wide hover:shadow-glow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-color to-main-color opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

