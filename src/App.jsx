
import './style.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">MY PORTFOLIO</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Description</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">

        <div className="hero-image">
          <img
            src="/src/assets/julius.jpg"
            alt="Julius B Quijano"
          />
        </div>

        <div className="hero-content">
          <p className="greeting">HELLO, I'M</p>

          <h1>JULIUS B QUIJANO</h1>

          <h2>CADET OFFICER</h2>

          <p className="description">
            A student and cadet officer who values
            discipline, leadership, teamwork, and responsibility.
             I am committed to continuous learning and personal growth.
          </p>

          <a href="#about" className="button">
            More About Me
          </a>
        </div>

      </section>

      {/* About */}
      <section id="about" className="section">
        
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p className="about-text">
          I am Julius B Quijano, a student and cadet officer in Batangas State University,
          Balayan Campus. I am a dedicated individual
          who believes in discipline, respect, and responsibility.
          I continue to develop my skills.
        </p>

      <div className="about-details">
        <h1 className='q'> ~ Student and Cadet Officer</h1>
        <h2 className='w'> ~ I am 20 years old</h2>
        <h3 className='e'> ~ live in Balayan, Batangas</h3>

        </div>
  
      </section>    

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <p className="section-label">MY</p>
        <h2>DESCRIPTION</h2>

        <div className="project-list">

          <div className="project-card">
            <span>01</span>
            <div>
              <h3>lead</h3>
              <p>
                Leadership activities that help me
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>02</span>
            <div>
              <h3>Academic Projects</h3>
              <p>
                School activities and projects that help me
                develop my knowledge and technical skills.
              
              </p>
            </div>
          </div>

          <div className="project-card">
            <span>03</span>
            <div>
              <h3>ROTC</h3>
              <p>
                Reserve Officers' Training Corps (ROTC) is 
                a program that helps me develop my leadership, 
                discipline, and teamwork skills.
              </p>
            </div>
          </div>
          
          <div className="project-card">
            <span>04</span>
            <div>
              <h3>BE ONE OF US</h3>
              <p>
                Joining the ROTC program has helped me develop my Leadership skills, dicipline,
                and teamwork skills. 
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Contact Me</h2>

        <p>
          Feel free to contact me for any inquiries.
        </p>

        <a
          href="mailto:24-13936@g.batstate-u.edu.ph"
          className="button"
        >
          Send Me an Email
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© ROTC CLASS 2024 - 2027 </p>
        <p>CADET OFFICER</p>
      </footer>

    </div>
  )
}

export default App
