import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Python', level: 80, icon: '🐍' },
    { name: 'Django', level: 75, icon: '🎯' },
    { name: 'JavaScript', level: 80, icon: '🟨' },
    { name: 'PostgreSQL', level: 70, icon: '🐘' },
    { name: 'HTML/CSS', level: 85, icon: '🎨' },
    { name: 'Bootstrap', level: 75, icon: '🅱️' },
    { name: 'Git/GitHub', level: 80, icon: '📚' },
    { name: 'VS Code', level: 85, icon: '💻' }
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills