import './About.css'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an aspiring Full Stack Web Developer currently pursuing BCA with specialization in Computer Applications. 
              I have hands-on experience through internships at Agile Tribers Tech Solutions and AK Info Park, 
              where I built responsive UI components and developed full-stack applications.
            </p>
            <p>
              My expertise includes Python, Django, JavaScript, and PostgreSQL. I'm proficient in building 
              scalable web applications, API integration, and creating user-friendly interfaces. 
              I'm a quick learner with strong problem-solving skills and effective teamwork abilities.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h3>2</h3>
                <p>Internships</p>
              </div>
              <div className="stat">
                <h3>6+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-card">
              <div className="code-snippet">
                <div className="code-header">
                  <div className="dots">
                    <img src="About.svg" alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About