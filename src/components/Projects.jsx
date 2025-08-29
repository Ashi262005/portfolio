import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Car Showroom Management System',
      description: 'A comprehensive management system built with Python and Django. Features user authentication, vehicle listings, booking system, and admin dashboard for managing car inventory and customer interactions.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
      github: 'https://github.com/Ashi262005/CarShowroom',
      demo: '#',
      image: '🚗'
    },
    {
      title: 'To-Do App',
      description: 'A full-stack CRUD application with user authentication built using Python, Django, and PostgreSQL. Features task management, user profiles, and responsive design for efficient task organization.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
      github: 'https://github.com/Ashi262005/Todo',
      demo: '#',
      image: '✅'
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app built with React. Fetches real-time weather data using OpenWeatherMap API with clean UI and dynamic city search functionality.',
      technologies: ['React', 'OpenWeatherMap API', 'CSS3'],
      github: 'https://github.com/Ashi262005/Weather-app',
      demo: 'https://weatherappaska.netlify.app/',
      image: '🌤️'
    },
    {
      title: 'QRcode Generator',
      description: 'A QR code generator built with React. Allows users to create and download QR codes for various types of data.',
      technologies: ['React', 'HTML/CSS'],
      github: 'https://github.com/Ashi262005/QRcode',
      demo: 'https://qrcodeaska.netlify.app/',
      image: '👨🏻‍💻'
    },
    {
      title: 'TaskManager',
      description: 'A furniture e-commerce website built with Bootstrap. Features product listings, shopping cart functionality, and user authentication.',
      technologies: ['Javascript', 'HTML/CSS'],
      github: 'https://github.com/Ashi262005/FurnitureShop',
      demo: 'https://furniture-shop.netlify.app/',
      image: '🗓️'
    },
    {
      title: 'Guess Number',
      description: 'A furniture e-commerce website built with Bootstrap. Features product listings, shopping cart functionality, and user authentication.',
      technologies: ['Javascript', 'HTML/CSS'],
      github: 'https://github.com/Ashi262005/FurnitureShop',
      demo: 'https://furniture-shop.netlify.app/',
      image: '🔍'
    },
    {
      title: 'Furniture shop',
      description: 'A furniture e-commerce website built with Bootstrap. Features product listings, shopping cart functionality, and user authentication.',
      technologies: ['Bootstrap', 'HTML/CSS'],
      github: 'https://github.com/Ashi262005/Furniture-Bootstrap',
      demo: 'https://furnitureaska.netlify.app//',
      image: '🛒'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href={project.demo} className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects