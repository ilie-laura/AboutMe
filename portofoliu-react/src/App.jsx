import { useState } from "react";
import { useEffect } from "react";

const navItems = [
  { id: "despre", label: "DESPRE" },
  { id: "studii", label: "STUDII" },
  { id: "proiecte", label: "PROIECTE" },
  { id: "skilluri", label: "SKILLURI" },
  { id: "contact", label: "CONTACT" },
];

const educationItems = [
  {
    period: "2023 — PREZENT",
    title: "Licență în Automatică și Calculatoare",
    place: "Universitatea din București",
  
    tilt: -1.4,
  },
  {
    period: "2019 — 2023",
    title: "Liceu, Mate-Info",
    place: "Colegiul Național de Informatica , Piatra Neamt",
    
    tilt: 1.1,
  },

  {
    period: "2026",
    title: "3DUPB",
    place: "online, certificat",
    note: "Participare la cursuri de modelare 3D , game design si development",
    tilt: -1.1,
  },
];
const profilePhotos = [
  {
    src: `${import.meta.env.BASE_URL}poza1.jpg`,
    caption: "salut, eu sunt Laura!",
  },
  {
    src: `${import.meta.env.BASE_URL}poza2.jpg`,
    caption: "Zebra Hackathon",
  },
  {
    src: `${import.meta.env.BASE_URL}poza3.jpg`,
    caption: "IT job fair with friends",
  },
];
const projectItems = [
  {
    number: "№ 01",
    title: "App-EyeSore",
    description:
      "Simulator desktop de patologii vizuale cu filtrare live pe cameră, mod tratament și detecție YOLOv8.",
    tag: "PYTHON · OPENCV",
    link: "https://github.com/ilie-laura/Simulator-patologii-vizuale",
  },
  {
    number: "№ 02",
    title: "JobSwap",
    description:
      "Joc simulation în Unity unde monștri încearcă să facă joburi de oameni și să treacă testul de umanitate.",
    tag: "UNITY · C#",
    link: "https://github.com/ilie-laura/JobSwap",
  },
  {
    number: "№ 03",
    title: "Pomier Pomodoro",
    description:
      "Aplicație desktop de productivitate pentru sesiuni de lucru și pauze cronometrate.",
    tag: "ELECTRON · JS",
    link: "https://github.com/ilie-laura/pomier-pomodoro-timer-",
  },
  {
    number: "№ 04",
    title: "RGD_Game",
    description:
      "Joc 3D psychological horror în care un tehnician recuperează benzi vechi într-un studio bântuit de păpuși.",
    tag: "3D · HORROR",
    link: "https://github.com/deliagstanescu/RGD_Game",
  },
  {
    number: "№ 05",
    title: "BDClinicaTrat",
    description:
      "Sistem de baze de date pentru gestionarea pacienților, programărilor și tratamentelor unei clinici.",
    tag: "SQL · DATABASE",
    link: "https://github.com/ilie-laura/BDClinicaTrat",
  },
   {
    number: "№ 06",
    title: "Retro Game-Ping Pong",
    description:
      "Joc retro de ping pong implementat în JS.",
    tag: "JS · GAME",
    link: "https://github.com/ilie-laura/Ping-Pong",
  },
];

const skillItems = [
  { name: "C / C++", level: 4 },
  { name: "JAVA / SPRING", level: 4 },
  { name: "PYTHON", level: 4 },
  { name: "REACT / JS", level: 3 },
  { name: "MYSQL / MONGODB", level: 4 },
  { name: "GIT & TOOLS", level: 4 },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeSection, setActiveSection] = useState("despre");
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [sent, setSent] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const prevPhoto = () => {
    setPhotoIndex((prev) =>
      prev === 0 ? profilePhotos.length - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) =>
      prev === profilePhotos.length - 1 ? 0 : prev + 1
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-shell">
      <div className="top-perforation" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <a href="#despre" className="brand-block">
            <span className="brand-badge">IL</span>
            <span className="brand-name">ILIE IOANA LAURA</span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={isActive ? "is-active" : ""}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  onMouseEnter={() => setHoveredSection(item.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <span>{item.label}</span>
                  {(isActive || hoveredSection === item.id) && (
                    <img
                      src={`${import.meta.env.BASE_URL}ketchup-splash.jpg`}
                      alt=""
                      className="ketchup-drop"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="burger-btn"
            aria-label="Deschide meniul"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="burger-bun-top">
              <i />
              <i />
              <i />
            </span>
            <span className="burger-lettuce" />
            <span className="burger-tomato" />
            <span className="burger-bun-bottom" />
          </button>
        </div>
      </header>

      <aside className="side-vertical-label" aria-hidden="true">
        DOSAR · ILIE IOANA LAURA
      </aside>

      <main className="main-container">
        <section id="despre" className="hero-section">
          <p className="eyebrow-red">PERSONAL FILE</p>

          <div className="hero-title-row">
            <span className="hero-meta-left">EST. 2026</span>
            <h1 className="hero-name">Ilie Ioana Laura</h1>
            <span className="hero-meta-right">NO. 001</span>
          </div>

          <div className="manila-folder-wrapper">
            <div className="folder-tab" aria-hidden="true" />
            <div className="folder-clasp" aria-hidden="true" />

            <div className="manila-folder">
             <div className="polaroid-card">
                <span className="tape-strip tape-polaroid" aria-hidden="true" />
                <div className="polaroid-photo">
                  <img
                    src={profilePhotos[photoIndex].src}
                    alt={profilePhotos[photoIndex].caption}
                    className="polaroid-img"
                  />
                  <button
                    type="button"
                    className="polaroid-nav prev"
                    onClick={prevPhoto}
                    aria-label="Poza anterioară"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="polaroid-nav next"
                    onClick={nextPhoto}
                    aria-label="Poza următoare"
                  >
                    ›
                  </button>
                  <div className="polaroid-dots">
                    {profilePhotos.map((item, idx) => (
                      <button
                        key={item.src}
                        type="button"
                        className={`polaroid-dot ${idx === photoIndex ? "is-active" : ""}`}
                        onClick={() => setPhotoIndex(idx)}
                        aria-label={`Poza ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="polaroid-caption">
                  {profilePhotos[photoIndex].caption}
                </p>
              </div>

              <article className="confidential-doc">
                <span className="doc-top-red-bar" aria-hidden="true" />
                <svg
                  className="paperclip-icon"
                  viewBox="0 0 24 44"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 11V32C7 36.4183 9.68629 40 13 40C16.3137 40 19 36.4183 19 32V9C19 5.68629 16.7614 3 14 3C11.2386 3 9 5.68629 9 9V29C9 30.6569 10.1193 32 11.5 32C12.8807 32 14 30.6569 14 29V12"
                    stroke="#6d645b"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="doc-meta-top">
                  <span>DOCUMENT CONFIDENȚIAL</span>
                  <span>NR. 25/11</span>
                </div>

                <h2 className="doc-heading">Despre mine</h2>

                <div className="role-ribbon">
                  STUDENTĂ · DESIGNER · DEVELOPER
                </div>

                <p className="doc-paragraph">
                  Sunt studentă la Automatică UNSTPB in anul 4 și îmi place să construiesc
                  lucruri care arată bine și funcționează și mai bine. Între
                  cursuri, fac mini joculete, fac scrapbooking
                  și lucrez la proiecte personale.
                </p>

                <p className="doc-signoff">—  ♥</p>
              </article>
            </div>
          </div>
        </section>

        <section id="studii" className="band-section">
          <div className="section-kicker-row">
            <span className="kicker-line" />
            <span className="kicker-star">✦</span>
            <span className="kicker-text">EDUCATION</span>
            <span className="kicker-star">✦</span>
            <span className="kicker-line" />
          </div>

          <div className="dark-banner">
            <h2>··· STUDII ···</h2>
          </div>

          <div className="education-grid">
            {educationItems.map((item) => (
              <article
                key={item.title}
                className="note-card"
                style={{ "--tilt": `${item.tilt}deg` }}
              >
                <span className="tape-strip tape-card" aria-hidden="true" />
                <p className="note-period">{item.period}</p>
                <h3 className="note-title">{item.title}</h3>
                <p className="note-place">{item.place}</p>
                <hr className="note-divider" />
                <p className="note-handwritten">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proiecte" className="band-section">
          <div className="section-kicker-row">
            <span className="kicker-line" />
            <span className="kicker-star">✦</span>
            <span className="kicker-text">PROJECTS</span>
            <span className="kicker-star">✦</span>
            <span className="kicker-line" />
          </div>

          <div className="dark-banner">
            <h2>··· PROIECTE PERSONALE ···</h2>
          </div>

          <div className="tickets-grid">
            {projectItems.map((project) => (
              <article key={project.number} className="ticket-card">
                <div className="ticket-top">
                  <span>ADMIT ONE</span>
                  <span>{project.number}</span>
                </div>

                <hr className="ticket-dashed" />

                <h3 className="ticket-title">{project.title}</h3>
                <p className="ticket-desc">{project.description}</p>

                <div className="ticket-bottom">
                  <span className="ticket-tag">{project.tag}</span>
                  <a href={project.link} className="ticket-link">
                    vezi →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skilluri" className="band-section">
          <div className="section-kicker-row">
            <span className="kicker-line" />
            <span className="kicker-star">✦</span>
            <span className="kicker-text">SKILLS</span>
            <span className="kicker-star">✦</span>
            <span className="kicker-line" />
          </div>

          <div className="dark-banner">
            <h2>··· ABILITĂȚI ···</h2>
          </div>

          <div className="skills-frame">
            <div className="skill-street-sign">
              <span className="sign-small">WELCOME</span>
              <strong className="sign-script">
                Skill
                <br />
                Street
              </strong>
              <span className="sign-badge">ONLY THE BEST!</span>
            </div>

            <div className="skills-list">
              {skillItems.map((skill) => (
                <div key={skill.name} className="skill-row-box">
                  <span className="skill-label">{skill.name}</span>
                  <div
                    className="skill-dots"
                    aria-label={`${skill.name}: ${skill.level} din 5`}
                  >
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className={`dot ${dot <= skill.level ? "is-filled" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="band-section">
          <div className="section-kicker-row">
            <span className="kicker-line" />
            <span className="kicker-star">✦</span>
            <span className="kicker-text">CONTACT</span>
            <span className="kicker-star">✦</span>
            <span className="kicker-line" />
          </div>

          <div className="dark-banner">
            <h2>··· SCRIE-MI ···</h2>
          </div>

          <div className="contact-board">
            <div className="contact-info-sheet">
              <span className="tape-strip tape-contact" aria-hidden="true" />
              <h3 className="contact-heading">Hai să vorbim!</h3>
              <p className="contact-subtext">
                Pentru colaborări, proiecte sau doar o cafea, lasă-mi un mesaj.
              </p>

              <ul className="contact-details-list">
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    ✉
                  </span>
                  <a href="mailto:ilie_ioana_laura@yahoo.com">ilie_ioana_laura@yahoo.com</a>
                </li>
              
                <li>
                  <span className="contact-icon" aria-hidden="true">
                    ⌂
                  </span>
                  <span>BUCUREȘTI, ROMÂNIA</span>
                </li>
                 <li>
                  <span className="contact-icon" aria-hidden="true">
                    ↓
                  </span>
                  <a href={`${import.meta.env.BASE_URL}CV_ilie_ioana_laura.pdf`} download="CV_Ilie_Ioana_Laura.pdf">
                    DESCARCĂ CV
                  </a>
                </li>
              </ul>
            </div>

            <form className="contact-form-sheet" onSubmit={handleSubmit}>
              <span className="doc-top-red-bar" aria-hidden="true" />
              <p className="form-serial">FORMULAR № 002</p>

              <label className="form-field">
                <span>NUME</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setSent(false);
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  required
                />
              </label>

              <label className="form-field">
                <span>EMAIL</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setSent(false);
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </label>

              <label className="form-field">
                <span>MESAJ</span>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => {
                    setSent(false);
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  required
                />
              </label>

              <button type="submit" className="submit-dark-btn">
                {sent ? "MESAJ TRIMIS ✓" : "TRIMITE ✦"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}