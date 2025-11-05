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
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-color/10 rounded-full blur-3xl"></div>
      </div>
      
      <h2 className="text-5.5rem text-center mb-12">
        Contact <span className="bg-gradient-to-r from-main-color to-accent-color bg-clip-text text-transparent">Me</span>
      </h2>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-[70rem] mx-auto mb-12 text-center"
      >
        <input type="hidden" name="access_key" value="a4cda705-64f2-456e-9b6f-66ea197bd710" />

        <div className="input-box flex justify-between flex-wrap gap-4">
          <input
            type="text"
            name="full name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full md:w-[49%] p-6 text-2rem text-text-color bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/20 rounded-[0.8rem] my-2 focus:border-main-color focus:outline-none focus:shadow-glow transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-[49%] p-6 text-2rem text-text-color bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/20 rounded-[0.8rem] my-2 focus:border-main-color focus:outline-none focus:shadow-glow transition-all"
            required
          />
        </div>

        <div className="input-box flex justify-between flex-wrap gap-4">
          <input
            type="number"
            name="mobile number"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full md:w-[49%] p-6 text-2rem text-text-color bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/20 rounded-[0.8rem] my-2 focus:border-main-color focus:outline-none focus:shadow-glow transition-all"
            required
          />
          <input
            type="text"
            name="email subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full md:w-[49%] p-6 text-2rem text-text-color bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/20 rounded-[0.8rem] my-2 focus:border-main-color focus:outline-none focus:shadow-glow transition-all"
            required
          />
        </div>

        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-6 text-2rem text-text-color bg-snd-bg-color/50 backdrop-blur-sm border-2 border-main-color/20 rounded-[0.8rem] my-2 resize-none focus:border-main-color focus:outline-none focus:shadow-glow transition-all"
          required
        ></textarea>
        <button
          type="submit"
          className="inline-block px-11 py-4 bg-gradient-to-r from-main-color to-accent-color rounded-[4rem] shadow-glow text-2rem text-white font-semibold tracking-wide hover:shadow-glow-lg hover:scale-105 transition-all duration-500 mt-8 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact

