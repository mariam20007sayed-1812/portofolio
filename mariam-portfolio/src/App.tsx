import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react'

type Project = {
  name: string
  description: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  image: string
  accent: string
  github: string
  liveDemo: string
  stats: string[]
  caseStudy: {
    overview: string
    goals: string[]
    process: string[]
    challenge: string
    result: string
  }
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const profileDetails = [
  { label: 'Name', value: 'Mariam Sayed' },
  { label: 'Role', value: 'AI & Data Science Student' },
  { label: 'Location', value: 'Giza, Egypt' },
  { label: 'Experience', value: 'NTRA Summer Training' },
  { label: 'Availability', value: 'Available for freelance opportunities' },
  { label: 'Email', value: 'mariam20007sayed@gmail.com' },
  { label: 'Languages', value: 'Arabic, English' },
  { label: 'Interests', value: 'AI & Data Science, programming, practical technical projects' },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['C++', 'Python', 'SQL'],
  },
  {
    title: 'Databases',
    items: ['MySQL'],
  },
  {
    title: 'Tools',
    items: ['Visual Studio', 'Arduino IDE', 'MySQL Workbench', 'MS Office'],
  },
  {
    title: 'Other',
    items: ['AI & Data Science (current learning area)'],
  },
]

const experience = [
  {
    title: 'NTRA Summer Training',
    company: 'National Telecom Regulatory Authority',
    location: 'Egypt',
    period: 'Summer Training',
    description:
      'The training included theoretical and technical exposure to cybersecurity and telecommunications-related topics, with visits and learning activities involving WE, Orange, Etisalat, Vodafone, and NTI.',
    technologies: ['Cybersecurity', 'Telecommunications', 'Technical Learning'],
  },
]

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Faculty of Computers and Information, Ain Shams University',
    location: 'Giza, Egypt',
    period: 'Second Year • Expected Graduation: 2029',
    coursework: [
      'Structured Programming',
      'C++',
      'Database / SQL-related study',
      'Electronics (technical background)',
    ],
  },
]

const services = [
  {
    title: 'Basic Python Programming',
    description: 'Helpful for small automation scripts, data processing, and beginner-friendly coding support.',
  },
  {
    title: 'Data Entry & Data Processing',
    description: 'Organized and accurate handling of structured information for practical technical tasks.',
  },
  {
    title: 'Basic SQL & Database Tasks',
    description: 'Support with database design basics, querying, and simple data organization workflows.',
  },
  {
    title: 'Beginner-Level Programming Projects',
    description: 'Assistance with academic and early-stage coding projects built with clarity and maintainability in mind.',
  },
]

const achievements = [
  'DEPI — AI & Data Science training',
  'NTRA Summer Training',
  'Relevant academic and programming projects',
]

const projects: Project[] = [
  {
    name: 'Online Clinic Appointment Management System',
    description:
      'A C++ project for managing clinic appointments, including booking, viewing, status handling, and availability validation.',
    problem:
      'Managing patient appointments while preventing double-booking and keeping appointment information organized.',
    solution:
      'A structured C++ system that stores patient, doctor, and appointment information and checks availability before confirming bookings.',
    role: 'Developer',
    technologies: ['C++'],
    image: '/project-clinic.svg',
    accent: 'cyan',
    github: '#',
    liveDemo: '#',
    stats: ['Appointment validation', 'Patient records', 'Booking workflow'],
    caseStudy: {
      overview:
        'This system was designed to organize clinic scheduling in a simple but reliable desktop workflow and reduce booking conflicts.',
      goals: ['Reduce overbooking', 'Keep records structured', 'Create a clear appointment lifecycle'],
      process: ['Define core entities and booking rules', 'Implement validation logic', 'Test status transitions and appointment records'],
      challenge: 'The key challenge was ensuring updates remained consistent while validating time availability.',
      result: 'The project delivers a clear, readable booking system that supports orderly appointment management.',
    },
  },
  {
    name: 'Smart Locker System',
    description:
      'An Arduino-based smart locker prototype using RFID, keypad input, LCD display, indicators, and a locking mechanism.',
    problem:
      'Creating a simple electronic locker system that could control access and provide user feedback.',
    solution:
      'A hardware and software prototype combining Arduino components with access-control logic and an interactive user interface.',
    role: 'Prototype Engineer',
    technologies: ['Arduino', 'RFID', 'Keypad', 'LCD'],
    image: '/project-locker.svg',
    accent: 'violet',
    github: '#',
    liveDemo: '#',
    stats: ['RFID access', 'Keypad input', 'LCD feedback'],
    caseStudy: {
      overview:
        'The smart locker project focuses on physical access control and user interaction using affordable embedded components.',
      goals: ['Enable secure access', 'Provide clear state feedback', 'Demonstrate a functional prototype'],
      process: ['Map hardware requirements', 'Connect sensors and control components', 'Validate locking and display behavior'],
      challenge: 'Balancing interface clarity with the constraints of a small embedded prototype.',
      result: 'The prototype shows how a simple access system can provide clear, reliable feedback for user interaction.',
    },
  },
  {
    name: 'SFML Endless Runner Game',
    description:
      'A C++ game project developed with SFML as an academic and team-based project.',
    problem:
      'Building an interactive game experience while applying programming and game-development concepts.',
    solution:
      'An endless-runner style game prototype using SFML, with animation work and interactive mechanics contributed by the student.',
    role: 'Gameplay & Animation Contributor',
    technologies: ['C++', 'SFML'],
    image: '/project-game.svg',
    accent: 'blue',
    github: '#',
    liveDemo: '#',
    stats: ['Event-driven gameplay', 'Animated assets', 'Academic collaboration'],
    caseStudy: {
      overview:
        'This project combines programming creativity with game logic, animation, and a playable loop for an academic team build.',
      goals: ['Create a playable prototype', 'Apply core game concepts', 'Support animation and interaction workflows'],
      process: ['Design game loop and mechanics', 'Integrate rendering and animation', 'Refine gameplay smoothness and user feel'],
      challenge: 'The challenge was keeping the game engaging while balancing performance and development time.',
      result: 'The project demonstrates strong foundational game development practice and a clear learning outcome in gameplay design.',
    },
  },
]

const formInitialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState(formInitialState)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formStatus, setFormStatus] = useState('')

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setFormErrors((current) => ({ ...current, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a subject.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please write a short message.'
    }

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      setFormStatus('Please fix the highlighted fields before sending your message.')
      return
    }

    setFormStatus(
      'Demo form ready for integration with Formspree, EmailJS, or a custom backend email service.',
    )
    setFormData(formInitialState)
  }

  return (
    <div className={`portfolio-page ${theme}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Mariam Sayed home">
            <span className="brand-mark">MS</span>
            <span className="brand-copy">
              <strong>Mariam Sayed</strong>
              <small>AI &amp; Data Science Student</small>
            </span>
          </a>

          <nav className={`site-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle color theme"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? 'Light' : 'Dark'} mode
            </button>
            <a href="#contact" className="button button-primary nav-cta">
              Let&apos;s Work Together
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-controls="main-navigation"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">Available for freelance opportunities</div>
              <h1>
                AI &amp; Data Science Student building practical, thoughtful digital solutions.
              </h1>
              <p className="hero-copy">
                I&apos;m Mariam Sayed, a second-year Computer Science student at Ain Shams University,
                focused on AI, data science, problem-solving, and turning technical learning into
                real-world outcomes.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  View My Projects
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1R9E8ku3_0Qb1goHotKPxVvBhFXsBk1Wn"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  Download CV
                </a>
              </div>

              <ul className="hero-metrics" aria-label="Quick highlights">
                <li>
                  <strong>2nd Year</strong>
                  <span>Computer Science</span>
                </li>
                <li>
                  <strong>AI + Data</strong>
                  <span>Learning focus</span>
                </li>
                <li>
                  <strong>Freelance</strong>
                  <span>Open to opportunities</span>
                </li>
              </ul>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="screen-panel">
                <div className="panel-top">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="panel-content">
                  <div className="mini-card">
                    <small>Current focus</small>
                    <strong>AI &amp; Data Science</strong>
                  </div>
                  <div className="data-bars">
                    <span style={{ width: '72%' }} />
                    <span style={{ width: '88%' }} />
                    <span style={{ width: '61%' }} />
                  </div>
                  <div className="signal-grid">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">About</span>
              <h2>Curious, practical, and growing through real projects.</h2>
            </div>

            <div className="about-grid">
              <div className="story-panel">
                <p>
                  Mariam Sayed is a second-year Computer Science student at Ain Shams University with
                  a growing focus on AI and Data Science. She enjoys understanding technical concepts
                  deeply and building practical projects while developing her programming and data
                  skills.
                </p>
                <p>
                  Her current learning journey includes Python, C++, SQL, and foundational AI &amp;
                  Data Science topics. She is interested in turning what she learns into practical
                  solutions and building real-world experience through projects, training, and
                  freelance opportunities.
                </p>
                <p>
                  Mariam is currently available for freelance opportunities that match her current
                  skill level and is focused on continuous learning, clear communication, and
                  delivering well-organized work.
                </p>
              </div>

              <aside className="profile-card" aria-label="Profile information">
                <div className="profile-header">
                  <span className="profile-badge">Profile</span>
                  <span className="availability-pill">Available</span>
                </div>

                {profileDetails.map((detail) => (
                  <div key={detail.label} className="profile-row">
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Skills</span>
              <h2>Technical skills built through study, projects, and hands-on learning.</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Experience</span>
              <h2>Learning experiences with a focus on technology and real-world exposure.</h2>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article key={item.title} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <div className="timeline-topline">
                      <h3>{item.title}</h3>
                      <span>{item.period}</span>
                    </div>
                    <p className="timeline-company">
                      {item.company} • {item.location}
                    </p>
                    <p>{item.description}</p>
                    <div className="chip-row">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section alt-section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Education</span>
              <h2>Academic foundation in computer science with a growing interest in AI and data.</h2>
            </div>

            <div className="education-card">
              <div className="education-header">
                <div>
                  <p className="degree-label">Degree</p>
                  <h3>{education[0].degree}</h3>
                </div>
                <span>{education[0].period}</span>
              </div>

              <div className="education-body">
                <div>
                  <p>
                    <strong>{education[0].institution}</strong>
                  </p>
                  <p>{education[0].location}</p>
                </div>

                <div>
                  <h4>Relevant coursework</h4>
                  <ul>
                    {education[0].coursework.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Projects</span>
              <h2>Selected work that reflects logical thinking, technical learning, and practical solutions.</h2>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <div className={`project-visual project-visual-${project.accent}`}>
                    <img src={project.image} alt={`${project.name} preview`} />
                  </div>
                  <div className="project-copy">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="chip-row">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <button type="button" className="button button-secondary" onClick={() => setSelectedProject(project)}>
                        Read case study
                      </button>
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt-section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Services</span>
              <h2>Support for beginner-level technical work and practical digital tasks.</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon" aria-hidden="true">
                    ✦
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container section-wrap">
            <div className="section-heading">
              <span className="eyebrow">Achievements</span>
              <h2>Academic and training milestones that support a growing technical profile.</h2>
            </div>

            <div className="achievement-grid">
              {achievements.map((achievement) => (
                <div key={achievement} className="achievement-card">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container section-wrap contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">Contact</span>
              <h2>Let&apos;s build something thoughtful, useful, and technically sound.</h2>
              <p>
                I&apos;m open to freelance opportunities, academic collaborations, practical project
                work, and early-stage technical tasks that align with my current skill set.
              </p>
              <ul className="contact-list">
                <li>
                  <span>Email</span>
                  <a href="mailto:mariam20007sayed@gmail.com">mariam20007sayed@gmail.com</a>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/mariam-sayed-220103407" target="_blank" rel="noreferrer">
                    mariam-sayed-220103407
                  </a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a href="https://github.com/mariam20007sayed-1812" target="_blank" rel="noreferrer">
                    @mariam20007sayed-1812
                  </a>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="input-stack">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(formErrors.name)}
                  />
                  {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    aria-invalid={Boolean(formErrors.email)}
                  />
                  {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                </label>

                <label>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project or collaboration topic"
                    aria-invalid={Boolean(formErrors.subject)}
                  />
                  {formErrors.subject && <span className="error-text">{formErrors.subject}</span>}
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me a little about your idea or requirement..."
                    rows={5}
                    aria-invalid={Boolean(formErrors.message)}
                  />
                  {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                </label>
              </div>

              <button type="submit" className="button button-primary submit-button">
                Send Message
              </button>

              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <h3>Mariam Sayed</h3>
            <p>AI &amp; Data Science Student</p>
          </div>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-meta">
            <a href="mailto:mariam20007sayed@gmail.com">mariam20007sayed@gmail.com</a>
            <a href="https://www.linkedin.com/in/mariam-sayed-220103407" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {currentYear} Mariam Sayed. All rights reserved.</span>
          <a href="#home" className="back-to-top">Back to top ↑</a>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)} aria-hidden="true" />
          <div className="modal-panel">
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close case study"
            >
              ×
            </button>
            <div className="modal-hero">
              <img src={selectedProject.image} alt={`${selectedProject.name} preview`} />
            </div>
            <div className="modal-copy">
              <span className="eyebrow">Case study</span>
              <h3 id="project-modal-title">{selectedProject.name}</h3>
              <p>{selectedProject.caseStudy.overview}</p>

              <div className="modal-columns">
                <div>
                  <h4>Problem &amp; goals</h4>
                  <p>{selectedProject.problem}</p>
                  <ul>
                    {selectedProject.caseStudy.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Process</h4>
                  <ul>
                    {selectedProject.caseStudy.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-summary">
                <div>
                  <h4>Challenge</h4>
                  <p>{selectedProject.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4>Result</h4>
                  <p>{selectedProject.caseStudy.result}</p>
                </div>
              </div>

              <div className="chip-row">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions modal-actions">
                <a href={selectedProject.github} className="button button-secondary" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={selectedProject.liveDemo} className="button button-primary" target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
