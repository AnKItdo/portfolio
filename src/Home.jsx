export default function Portfolio() {
  const nav = [
    { label: 'Home', href: '#' },
    { label: 'Hall of Fame', href: '#hall-of-fame' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Tools', href: '#tools' },
    { label: 'Writeups', href: '#writeups' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  const expertise = [
    {
      title: 'Web Application Security',
      desc: 'Identification and exploitation of access control flaws, authentication weaknesses, and business logic vulnerabilities.'
    },
    {
      title: 'API Security Testing',
      desc: 'REST and GraphQL API testing focused on authorization, JWT, OAuth, and privilege escalation vulnerabilities.'
    },
    {
      title: 'Recon & Attack Surface Mapping',
      desc: 'Subdomain enumeration, JavaScript analysis, endpoint discovery, and hidden functionality mapping.'
    },
    {
      title: 'Security Automation',
      desc: 'Custom tooling in Go and Python for reconnaissance, vulnerability analysis, and workflow automation.'
    },
    {
      title: 'Authentication Research',
      desc: 'OAuth2 flows, JWT implementation flaws, session management, and multi-step authorization bypass testing.'
    },
    {
      title: 'Cloud & Modern Architecture Security',
      desc: 'Security testing for cloud-native applications, IAM logic, and distributed application environments.'
    }
  ];

  const hallOfFame = [
    {
      title: 'IDOR in Account Management API',
      desc: 'Discovered insecure direct object reference vulnerabilities leading to unauthorized access to sensitive user data.'
    },
    {
      title: 'JWT Authorization Misconfiguration',
      desc: 'Identified privilege escalation through improper token validation and authorization handling.'
    },
    {
      title: 'Business Logic Vulnerability',
      desc: 'Chained application workflows to bypass intended authorization restrictions in multi-user functionality.'
    }
  ];

  const methodology = [
    'Attack surface mapping and asset enumeration',
    'JavaScript analysis for hidden endpoints and secrets',
    'Authentication and authorization testing',
    'API authorization and business logic testing',
    'OAuth2 and JWT security analysis',
    'Manual vulnerability validation and exploitation',
    'Automation-assisted reconnaissance and workflow optimization'
  ];

  const tools = [
    {
      title: 'JavaScript Endpoint Extractor',
      desc: 'Custom Go-based tooling for extracting endpoints, secrets, API routes, and hidden functionality from JavaScript files.'
    },
    {
      title: 'Recon Automation Pipeline',
      desc: 'Automated subdomain monitoring and nuclei scanning workflow for continuous attack surface analysis.'
    },
    {
      title: 'API Recon Scripts',
      desc: 'Internal tooling for API discovery, parameter analysis, and authorization testing.'
    }
  ];

  const writeups = [
    {
      title: 'Understanding IDOR Vulnerabilities in Modern APIs',
      desc: 'Research notes on identifying and exploiting broken access control vulnerabilities.'
    },
    {
      title: 'OAuth2 Security Testing Methodology',
      desc: 'Practical approach for testing OAuth implementations and authentication workflows.'
    },
    {
      title: 'JavaScript Recon for Bug Bounty Hunting',
      desc: 'Techniques for extracting endpoints, secrets, and attack surface intelligence from JavaScript assets.'
    }
  ];

  const tech = [
    'Web Security',
    'API Security',
    'Burp Suite',
    'Go',
    'Python',
    'OAuth2',
    'JWT',
    'Cloud IAM',
    'Recon Automation',
    'JavaScript Analysis',
    'GraphQL Security',
    'Secure Architecture'
  ];

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white font-sans">

      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/5">
        <div className="font-semibold text-lg">Ankit</div>

        <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
          {nav.map((n, i) => (
            <a
              key={i}
              href={n.href}
              className="hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-zinc-500 mb-3 tracking-wide">
          Offensive Security Research
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Security Researcher focused on
          <span className="block text-zinc-500">
            web application and API security
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl leading-relaxed">
          Bug bounty hunter and offensive security researcher specializing in
          authentication flaws, access control vulnerabilities, API security,
          and modern web application attack surfaces.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="#hall-of-fame"
            className="px-5 py-2 bg-white text-black rounded-md font-medium"
          >
            Security Findings
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-2 border border-white/10 rounded-md hover:border-white/30 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-2 border border-white/10 rounded-md hover:border-white/30 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* PROFESSIONAL SNAPSHOT */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold mb-6">
          Professional Snapshot
        </h2>

        <div className="grid md:grid-cols-2 gap-3 text-zinc-400">
          <div>Web Application & API Security Testing</div>
          <div>Bug Bounty Hunting & Vulnerability Research</div>
          <div>Authentication & Authorization Testing</div>
          <div>Security Automation & Recon Engineering</div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {expertise.map((e, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-5 bg-white/5 hover:border-white/20 transition"
            >
              <h3 className="font-medium mb-2">
                {e.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HALL OF FAME */}
      <section id="hall-of-fame" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Hall of Fame & Security Findings
        </h2>

        <div className="space-y-6">
          {hallOfFame.map((h, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-6 bg-white/5"
            >
              <h3 className="font-medium mb-3">
                {h.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Testing Methodology
        </h2>

        <div className="border border-white/10 rounded-lg p-6 bg-white/5">
          <div className="space-y-4">
            {methodology.map((m, i) => (
              <div
                key={i}
                className="flex gap-4 text-sm text-zinc-400 border-b border-white/5 pb-4"
              >
                <span className="text-white">
                  [{String(i + 1).padStart(2, '0')}]
                </span>

                <p>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Security Tools & Automation
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {tools.map((t, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-5 bg-white/5"
            >
              <h3 className="font-medium mb-2">
                {t.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WRITEUPS */}
      <section id="writeups" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Research & Writeups
        </h2>

        <div className="space-y-6">
          {writeups.map((w, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg p-6 bg-white/5"
            >
              <h3 className="font-medium mb-2">
                {w.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section id="technical" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-6">
          Technical Stack
        </h2>

        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 border border-white/10 rounded-full text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-4">
          Resume
        </h2>

        <p className="text-zinc-400 mb-6 max-w-2xl">
          Download a concise summary of experience, security research,
          technical skills, and offensive security work.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-5 py-2 bg-white text-black rounded-md font-medium"
        >
          Download Resume (PDF)
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-white/10 rounded-lg p-10 bg-white/5 text-center">
          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="text-zinc-400 mt-3">
            Open to offensive security, application security,
            and vulnerability research opportunities.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:dankit264@gmail.com"
              className="px-6 py-2 bg-white text-black rounded-md font-medium"
            >
              Email Me
            </a>

            <a
              href="https://github.com/AnKItdo"
              target="_blank"
              className="px-6 py-2 border border-white/10 rounded-md"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-center text-xs text-zinc-500">
        © 2026 Ankit — Offensive Security Portfolio
      </footer>

    </div>
  );
}