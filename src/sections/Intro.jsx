import React, { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';

const Intro = () => {
    useEffect(() => {
        const terminalText = document.getElementById('typingText');
        if (!terminalText) return;

        const text = "> Hey, I'm Pratyush\n> Engineer. Software Developer. ML & NLP Enthusiast. I build intelligent systems that learn and communicate.";

        let i = 0;
        terminalText.textContent = ''; // Reset

        const typing = setInterval(() => {
            if (i < text.length) {
                terminalText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                if (terminalText) terminalText.classList.remove('typing-animation');
            }
        }, 80);

        return () => clearInterval(typing);
    }, []);

    return (
        <section id="intro" className="section">
            {/* Top Row: Profile/Info Column + About Me Column */}
            <div className="intro-top-row" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'stretch' }}>

                {/* Left Column: Photo & Info */}
                <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    {/* Large Photo Box (Reusing ProfileCard but making it purely valid for this layout) */}
                    <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
                        <ProfileCard />
                    </div>

                    {/* Small Info Box (Formerly in Header) */}
                    <div className="glass-card" style={{ flex: 1, margin: 0, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#26a0da', marginBottom: '0.5rem' }}>
                            Pratyush Mohanty
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#b0b0b0', marginBottom: '0.5rem' }}>
                            MSRIT • ECE
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#1a5f7a', fontWeight: 'bold', marginBottom: '1rem' }}>
                            CGPA: 8.82/10
                        </div>
                        <a href="/autoCV (4).pdf" className="resume-mini-btn" target="_blank" rel="noopener noreferrer" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>
                            RESUME
                        </a>
                    </div>
                </div>

                {/* Right Column: Terminal & About Me */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '300px' }}>

                    {/* Terminal Box */}
                    <div className="terminal-box" style={{ width: '100%' }}>
                        <div className="terminal-header">
                            <div className="terminal-btn btn-close"></div>
                            <div className="terminal-btn btn-minimize"></div>
                            <div className="terminal-btn btn-maximize"></div>
                            <span style={{ marginLeft: '1rem', color: '#666' }}>terminal@pratyush:~</span>
                        </div>
                        <div className="terminal-content">
                            <div id="typingText" className="typing-animation"></div>
                        </div>
                    </div>

                    {/* About Me Card */}
                    <div className="glass-card" style={{ flex: 1, margin: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.5rem' }}>
                        <h3 className="card-title">About Me</h3>
                        <p style={{ lineHeight: 1.8, color: '#b0b0b0' }}>
                            I am an Electronics and Communication Engineering student at Ramaiah Institute of Technology  with a passion for building intelligent systems. I have developed high-impact projects like JobTrackr.Co, an event-driven application that reduced manual data entry by 95% , and a Research QA Bot utilizing LangChain and Google Gemini for context-aware analysis.
                            <br /><br />
                            Beyond my technical skills in the MERN stack and Python , I was selected as a Harvard Delegate to contribute to APAC product strategy. Whether placing in the top 30 for the Smart India Hackathon or solving 150+ DSA problems, I am committed to combining engineering excellence with global innovation.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge">DSA C++</span>
                            <span className="tech-badge">Python</span>
                            <span className="tech-badge">VHDL</span>
                            <span className="tech-badge">Machine Learning</span>
                            <span className="tech-badge">Natural Language Processing</span>
                            <span className="tech-badge">LangChain</span>
                            <span className="tech-badge">Git&GitHub</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
