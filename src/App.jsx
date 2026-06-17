import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Ankit Karn</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#hall-of-fame">Hall of Fame</a>
          <a href="#methodology">Methodology</a>
          <a href="#tools">Tools</a>
          <a href="#writeups">Writeups</a>
          <a href="#technical">Technical</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <p className="subtitle">Offensive Security Research</p>

        <h1>
          Security Researcher focused on
          <span> web application and API security</span>
        </h1>

        <p className="description">
          Bug bounty hunter and offensive security researcher specializing in
          access control vulnerabilities, authentication flaws, API security,
          and modern web application attack surfaces.
        </p>

        <div className="buttons">
          <a href="#hall-of-fame" className="primary-btn">
            Security Findings
          </a>

          <a href="/resume.pdf" download className="secondary-btn">
            Download Resume
          </a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Professional Snapshot</h2>

        <div className="card">
          <h3>Bug Bounty Hunter & Security Researcher</h3>

          <p>
            Focused on web application and API security testing, vulnerability
            research, authorization analysis, authentication testing, and
            offensive security automation.
          </p>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section id="hall-of-fame" className="section">
        <h2>Hall of Fame & Recognition</h2>

        <div className="hall-grid">

          <div className="hall-card">
            <h3>Hubspot</h3>

            <p>
              Recognized for responsible disclosure of security vulnerabilities
              affecting web application functionality.
            </p>

            <span></span>
          </div>

          <div className="hall-card">
            <h3>Sendbird</h3>

            <p>
              Acknowledged for identifying and reporting security issues through
              coordinated vulnerability disclosure.
            </p>

            <span></span>
          </div>

          

          <div className="hall-card">
            <h3>Security Research</h3>

            <p>
              Identified vulnerabilities related to authorization logic,
              authentication workflows, and API security testing.
            </p>

            <span>Ongoing</span>
          </div>

        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="section">
        <h2>Testing Methodology</h2>

        <div className="card">
          <h3>Attack Surface & Security Testing Workflow</h3>

          <p>
            Reconnaissance and attack surface mapping through subdomain
            enumeration, JavaScript analysis, endpoint discovery, and hidden
            functionality mapping.
          </p>

          <p>
            Manual security testing focused on access control vulnerabilities,
            authentication flaws, API authorization issues, OAuth
            implementations, and business logic weaknesses.
          </p>

          <p>
            Automation-assisted workflows using Go and Python for recon,
            endpoint analysis, and vulnerability discovery.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="section">
        <h2>Security Tools & Automation</h2>

        <div className="card">
          <h3>JavaScript Endpoint Extractor</h3>

          <p>
            Custom Go-based tooling for extracting endpoints, secrets, API
            routes, and hidden functionality from JavaScript files.
          </p>
        </div>

        <div className="card">
          <h3>Recon Automation Pipeline</h3>

          <p>
            Automated reconnaissance workflows for subdomain monitoring,
            endpoint analysis, and nuclei-based vulnerability scanning.
          </p>
        </div>

        <div className="card">
          <h3>API Recon Scripts</h3>

          <p>
            Internal tooling for API discovery, parameter analysis,
            authentication testing, and authorization validation.
          </p>
        </div>
      </section>

      {/* WRITEUPS */}
      <section id="writeups" className="section">
        <h2>Research & Writeups</h2>

        <div className="card">
          <h3>Understanding IDOR Vulnerabilities in APIs</h3>

          <p>
            Research notes and testing methodology for identifying broken access
            control vulnerabilities in modern API architectures.
          </p>
        </div>

        <div className="card">
          <h3>OAuth2 Security Testing</h3>

          <p>
            Practical testing approach for analyzing OAuth implementations,
            token handling, and authorization flows.
          </p>
        </div>

        <div className="card">
          <h3>JavaScript Recon Methodology</h3>

          <p>
            Techniques for extracting endpoints, secrets, and attack surface
            intelligence from client-side JavaScript assets.
          </p>
        </div>
      </section>

      {/* TECHNICAL */}
      <section id="technical" className="section">
        <h2>Technical Stack</h2>

        <div className="tags">
          <span>Web Security</span>
          <span>API Security</span>
          <span>Burp Suite</span>
          <span>Go Automation</span>
          <span>Python</span>
          <span>OAuth2</span>
          <span>JWT</span>
          <span>JavaScript Analysis</span>
          <span>GraphQL Security</span>
          <span>Recon Automation</span>
          <span>Cloud IAM</span>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="section resume-section">
        <h2>Resume</h2>

        <p>
          Download a concise summary of experience, technical skills,
          vulnerability research, and offensive security work.
        </p>

        <a href="/resume.pdf" download className="primary-btn">
          Download Resume
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>
          Open to application security, offensive security,
          and security engineering opportunities.
        </p>

        <div className="contact-links">

          <a
            href="https://bugcrowd.com/h/ankitdon"
            target="_blank"
            rel="noreferrer"
          >
            Bugcrowd
          </a>

          <a
            href="https://github.com/AnKItdo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-karn-b1109a1b2/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:dankit264@gmail.com">
            Email
          </a>

        </div>
      </section>

    </div>
  );
}
