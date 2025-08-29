import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Ashika A L</span>
            </h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              Aspiring Full Stack Web Developer with a strong foundation in JavaScript, Python, Django, 
              and PostgreSQL. Passionate about building scalable and user-friendly web applications with 
              strong adaptability and collaborative mindset.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
              <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-img ">
                <img className="img-placeholder" style={{width: "100%", height:"100%"}} src="Me.jpg" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero