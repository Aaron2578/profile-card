import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaExternalLinkAlt,
  FaRegClock,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import {
  MdMail,
  MdVerified,
  MdLocationOn,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

const skillObj = [
  {
    skill: "React.js",
    category: "Frontend",
    img: "React.png",
    color: "#61dafb",
  },
  {
    skill: "TypeScript",
    category: "Frontend",
    img: "Typescript.png",
    color: "#3178c6",
  },
  {
    skill: "JavaScript",
    category: "Frontend",
    img: "js.png",
    color: "#f7df1e",
  },
  {
    skill: "Tailwind CSS",
    category: "Frontend",
    img: "tailwindcss.png",
    color: "#38bdf8",
  },
  {
    skill: "HTML5",
    category: "Frontend",
    img: "html.png",
    color: "#e34f26",
  },
  {
    skill: "CSS3",
    category: "Frontend",
    img: "css.png",
    color: "#1572b6",
  },
  {
    skill: "Bootstrap",
    category: "Frontend",
    img: "bootstrap.png",
    color: "#7952b3",
  },
  {
    skill: "Python",
    category: "Backend",
    img: "python.png",
    color: "#3776ab",
  },
  {
    skill: "Java",
    category: "Backend",
    img: "java.png",
    color: "#f89820",
  },
  {
    skill: "Figma",
    category: "Design & Tools",
    img: "figma.png",
    color: "#f24e1e",
  },
  {
    skill: "Canva",
    category: "Design & Tools",
    img: "canva.png",
    color: "#00c4cc",
  },
  {
    skill: "Photoshop",
    category: "Design & Tools",
    img: "photoshop.jpg",
    color: "#31a8ff",
  },
  {
    skill: "Illustrator",
    category: "Design & Tools",
    img: "AI.jpg",
    color: "#ff9a00",
  },
];

const messages = [
  "Teaching Clean Code & Architecture",
  "Inspiring Next-Gen Developers",
  "Transforming Ideas into Web Apps",
  "Mentoring Practical Tech Skills",
];

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-wrapper">
      <Card theme={theme} onToggleTheme={toggleTheme} />
      <Footer />
    </div>
  );
}

function Card({ theme, onToggleTheme }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="card-container">
      <button
        className="theme-toggle-btn"
        onClick={onToggleTheme}
        aria-label="Toggle theme"
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
      >
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>

      <Profile />

      <div className="content-column">
        <About />
        <Skill
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <More />
      </div>
    </div>
  );
}

function Profile() {
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  const [copied, setCopied] = useState(false);

  // Clock update with proper cleanup
  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(clockTimer);
  }, []);

  // Tagline rotator interval with cleanup
  useEffect(() => {
    const taglineTimer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3200);

    return () => clearInterval(taglineTimer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aaronc2578@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <aside className="profile-column">
      <div className="status-pill">
        <span className="status-dot"></span>
        <span>Open to Training & Dev Projects</span>
      </div>

      <div className="avatar-wrapper">
        <div className="avatar-ring"></div>
        <div className="avatar-circle">
          <img
            src="Aaron.png"
            alt="Aaron C"
            className="profile-img"
          />
        </div>
      </div>

      <div className="profile-name-group">
        <h1 className="profile-name">Aaron C</h1>
        <span className="verified-icon" title="Verified Profile">
          <MdVerified />
        </span>
      </div>

      <p className="designation">Technical Trainer & Developer</p>
      <div className="company-badge">
        <span>@SA 3D SOLUTIONS</span>
      </div>

      <div className="tagline-box">
        <span key={index} className="tagline-text">
          “{messages[index]}”
        </span>
      </div>

      <div className="social-links">
        <div className="tooltip-container">
          <a
            href="https://www.linkedin.com/in/aaron-dev"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <span className="tooltip">LinkedIn</span>
        </div>

        <div className="tooltip-container">
          <a
            href="https://github.com/Aaron2578"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <span className="tooltip">GitHub</span>
        </div>

        <div className="tooltip-container">
          <a
            href="mailto:aaronc2578@gmail.com"
            className="social-btn email"
            aria-label="Send Email"
          >
            <MdMail />
          </a>
          <span className="tooltip">Email</span>
        </div>

        <div className="tooltip-container">
          <button
            onClick={handleCopyEmail}
            className="social-btn copy"
            aria-label="Copy Email Address"
          >
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
          <span className={`tooltip ${copied ? "visible" : ""}`}>
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </div>
      </div>

      <div className="info-pills-row">
        <div className="info-badge">
          <FaRegClock />
          <span>{currentTime} IST</span>
        </div>
        <div className="info-badge">
          <MdLocationOn />
          <span>Tamil Nadu, India</span>
        </div>
      </div>
    </aside>
  );
}

function About() {
  return (
    <section className="about-section">
      <h2 className="section-title">Professional Summary</h2>
      <div className="about-card">
        <p className="about-para">
          Passionate Technical Trainer & Full-Stack Developer specializing in
          transforming complex programming concepts into practical, production-ready
          skills. Experienced in mentoring developers, designing structured curricula,
          and building high-impact web applications.
        </p>
        <div className="highlights-row">
          <span className="highlight-chip">👨‍🏫 Technical Training & Mentorship</span>
          <span className="highlight-chip">💻 Full-Stack Development</span>
          <span className="highlight-chip">🎨 Modern UI/UX Engineering</span>
        </div>
      </div>
    </section>
  );
}

function Skill({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "Frontend", "Backend", "Design & Tools"];

  const filteredSkills =
    selectedCategory === "All"
      ? skillObj
      : skillObj.filter((item) => item.category === selectedCategory);

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">Core Technologies</h2>
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-tab ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <Skillset
            skill={skill.skill}
            img={skill.img}
            color={skill.color}
            key={skill.skill}
          />
        ))}
      </div>
    </section>
  );
}

function Skillset({ skill, img, color }) {
  return (
    <div className="skill-card" style={{ "--brand-color": color }}>
      <div className="skill-icon-wrapper">
        <img src={img} alt={`${skill} icon`} loading="lazy" />
      </div>
      <span className="skill-title">{skill}</span>
    </div>
  );
}

function More() {
  return (
    <div className="cta-group">
      <a
        href="Master Resume -Aaron-C.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="Aaron_Resume.pdf"
        className="btn btn-primary"
      >
        <FaDownload />
        <span>Download Resume</span>
      </a>

      <a
        href="https://aaronc.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <span>View Portfolio</span>
        <FaExternalLinkAlt />
      </a>
    </div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="profile-footer">
      <p className="footer-text">
        Aaron . all right reserved {currentYear}
      </p>
    </footer>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




