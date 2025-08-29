import { useState } from 'react'
import './Header.css'

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="logo">Ashika A L</div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a onClick={() => scrollToSection('hero')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </nav>
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              title="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header