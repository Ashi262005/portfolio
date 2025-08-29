import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's connect!</h3>
            <p>
              I'm eager to grow in a challenging role and contribute effectively to innovative development. 
              Looking for internship opportunities or entry-level positions in full-stack web development. 
              Let's discuss how I can contribute to your team!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>ashikaalexander4@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9043278453</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Kanyakumari, Tamil Nadu</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ashi262005" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ashika-a-l-7689302a8/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact