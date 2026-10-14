import { useState } from 'react'
import {
  Cloud,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
  MapPin,
  Sparkles,
  Layers3,
  Database,
  Wrench,
} from 'lucide-react'
import { experienceHighlights, profile, projects, skills } from './data'

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell" id="top">
      <header className="header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sudheer home">
          <span className="brand-icon">S<span>.</span></span>
          <span>Sudheer<span className="brand-muted">.dev</span></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> {profile.availability}</div>
            <p className="eyebrow">HELLO, I'M {profile.firstName.toUpperCase()}</p>
            <h1>Building digital products with <span className="gradient-text">thoughtful code.</span></h1>
            <p className="hero-description">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-stats">
              <div><strong>~5 years</strong><span>Professional experience</span></div>
              <div><strong>Full stack</strong><span>Frontend + backend</span></div>
              <div><strong>Hyderabad</strong><span>India · Open to roles</span></div>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a code editor">
            <div className="art-glow art-glow-a" />
            <div className="art-glow art-glow-b" />
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.ts</span><span className="window-menu">•••</span>
              </div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="syntax-purple">const</span> developer = {'{'}</p>
                <p><span className="line-no">02</span>&nbsp; name: <span className="syntax-green">'Sudheer Kumar'</span>,</p>
                <p><span className="line-no">03</span>&nbsp; role: <span className="syntax-green">'Full Stack Engineer'</span>,</p>
                <p><span className="line-no">04</span>&nbsp; frontend: [<span className="syntax-orange">'React'</span>, <span className="syntax-orange">'TypeScript'</span>],</p>
                <p><span className="line-no">05</span>&nbsp; backend: [<span className="syntax-orange">'Node.js'</span>, <span className="syntax-orange">'REST APIs'</span>],</p>
                <p><span className="line-no">06</span>&nbsp; mindset: <span className="syntax-green">'Always learning'</span></p>
                <p><span className="line-no">07</span>{'}'};</p>
              </div>
              <div className="code-footer"><span className="status-dot" /> Ready for the next challenge</div>
            </div>
            <div className="float-card float-react"><span className="float-symbol">⚛</span> React.js</div>
            <div className="float-card float-node"><span className="float-symbol">⬡</span> Node.js</div>
            <div className="float-card float-ts"><span className="ts-icon">TS</span> TypeScript</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <div className="section-kicker"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span className="gradient-text">Engineer by craft.</span></h2>
            <div className="about-copy">
              <p>I work across the stack — from creating responsive user interfaces to building APIs and connecting services. In my current role at Prodapt Solutions, I contribute to enterprise education technology products for Tes.</p>
              <p>I'm looking for a development-focused opportunity where I can solve meaningful engineering problems, build scalable features, and learn alongside a collaborative team.</p>
              <div className="value-pills"><span>Problem solving</span><span>API development</span><span>Team collaboration</span><span>Continuous learning</span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-kicker"><span>02</span> MY TOOLKIT</div>
          <div className="section-title-row"><h2>Skills & technologies</h2><p>The tools I use to turn ideas into dependable applications.</p></div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = [Code2, Layers3, Database, Cloud, Wrench][index];
              return <article className="skill-card" key={group.title}>
                <div className={`skill-icon ${group.tone}`}><Icon size={20} /></div>
                <h3>{group.title}</h3><p>{group.subtitle}</p>
                <div className="tag-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </article>
            })}
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-kicker"><span>03</span> THE JOURNEY SO FAR</div>
          <div className="section-title-row"><h2>Experience</h2><p>Learning, building, and improving with every release.</p></div>
          <div className="timeline">
            <div className="timeline-rail"><span /></div>
            <article className="experience-card">
              <div className="experience-head">
                <div><p className="eyebrow">AUG 2021 — PRESENT</p><h3>Software Engineer</h3><p className="company">Prodapt Solutions <span>·</span> Hyderabad, India</p></div>
                <span className="experience-length"><BriefcaseBusiness size={14} /> Nearly 5 years</span>
              </div>
              <ul>{experienceHighlights.map(item => <li key={item}>{item}</li>)}</ul>
              <div className="tag-list"><span>React.js</span><span>TypeScript</span><span>Node.js</span><span>REST APIs</span><span>SQL / NoSQL</span><span>AWS fundamentals</span><span>Testing</span></div>
            </article>
          </div>
          <p className="editor-note"><Sparkles size={14} /> Add verified achievements and measurable outcomes here to make this section even stronger.</p>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="section-kicker"><span>04</span> SELECTED WORK</div>
          <div className="section-title-row"><h2>Projects & product work</h2><p>A snapshot of systems and problems I've worked on.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className={`project-art ${project.visual}`}>
                {project.visual === 'dashboard' && <div className="mini-dashboard"><div className="mini-dash-top"><i /><i /><i /></div><div className="mini-dash-body"><div className="mini-sidebar" /><div className="mini-widgets"><i /><i /><i /><div className="mini-bars"><b /><b /><b /><b /><b /><b /></div></div></div></div>}
                {project.visual === 'integration' && <div className="integration-flow"><span>Client</span><i /><strong>REST API</strong><i /><span>Service</span></div>}
                {project.visual === 'terminal' && <div className="terminal"><p><b>$</b> python assistant.py</p><p className="terminal-green">✓ profile loaded</p><p className="terminal-green">✓ form fields detected</p><p className="terminal-muted">Ready to validate…</p></div>}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-content"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'View project'} <ArrowUpRight size={15} /></a>}
              </div>
            </article>)}
          </div>
          <p className="editor-note"><Sparkles size={14} /> Add your GitHub repositories or live demos to the project cards in <code>src/data.ts</code>.</p>
        </section>

        <section className="section-wrap contact-wrap" id="contact">
          <div className="contact-panel">
            <div className="section-kicker"><span>05</span> LET'S CONNECT</div>
            <h2>Have a good problem?<br /><span className="gradient-text">Let's solve it together.</span></h2>
            <p>I'm open to Full Stack, React.js, and Node.js opportunities. If you're hiring or want to talk about building something useful, I'd love to connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Full Stack Developer Opportunity')}`}><Mail size={16} /> Email me <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-meta"><span><i className="status-dot" /> Immediate joiner</span><span><MapPin size={14} /> Hyderabad, India</span><a href={`mailto:${profile.email}`}><Send size={13} /> {profile.email}</a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#top"><span className="brand-icon">S<span>.</span></span><span>Sudheer<span className="brand-muted">.dev</span></span></a>
        <p>Designed & built with care · {new Date().getFullYear()}</p>
        <a className="back-top" href="#top">Back to top <ArrowRight size={14} /></a>
      </footer>
    </div>
  )
}

export default App
