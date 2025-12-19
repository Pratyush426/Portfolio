import { useState, useEffect } from 'react';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ThreeBackground from './components/ThreeBackground';
import Particles from './components/Particles';
import IntroAnimation from './components/IntroAnimation';
import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Positions from './sections/Positions';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Socials from './components/Socials';
import HiddenDev from './components/HiddenDev';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
    document.documentElement.className = theme === 'light' ? 'light-theme' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Intro animation completion handler
  const handleIntroComplete = () => {
    setShowContent(true);
  };

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const progressBar = document.getElementById('sectionProgress');

      let currentSection = 0;
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = index;
        }
      });

      const progress = ((currentSection + 1) / sections.length) * 100;
      if (progressBar) progressBar.style.width = progress + '%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Section Indicator */}
      <div className="section-indicator">
        <div className="section-progress" id="sectionProgress"></div>
      </div>

      <ThreeBackground theme={theme} />
      <Particles />

      {/* Floating Code Fragments */}
      <div className="code-fragment" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>E = mc²</div>
      <div className="code-fragment" style={{ top: '40%', left: '80%', animationDelay: '3s' }}>while(learning) &#123; code(); &#125;</div>
      <div className="code-fragment" style={{ top: '60%', left: '15%', animationDelay: '6s' }}>π = 3.14159...</div>
      <div className="code-fragment" style={{ top: '80%', left: '70%', animationDelay: '9s' }}>return innovation;</div>
      <div className="code-fragment" style={{ top: '30%', left: '90%', animationDelay: '12s' }}>∇ × E = -∂B/∂t</div>
      <div className="code-fragment" style={{ top: '15%', left: '60%', animationDelay: '15s' }}>λ = h/p</div>
      {/* Add more as needed */}

      <div className={`main-content ${showContent ? 'visible' : ''}`} id="mainContent">
        <Header />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Intro />
          <Experience />
          <Education />
          <Projects />
          <Achievements />
          <Positions />
          <Contact />
        </main>


      </div>

      <HiddenDev />
    </>
  );
}

export default App;
