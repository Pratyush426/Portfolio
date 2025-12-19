import React from 'react';

const Education = () => {
    return (
        <section id="education" className="section" style={{ padding: '1rem 0' }}>
            <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', textAlign: 'center' }}>
                &lt; EDUCATION /&gt;
            </h2>

            <div className="education-container">
                {/* Vertical connecting line could be added here in CSS */}

                <div className="education-card glass-card">
                    <div className="edu-header">
                        <div className="edu-year-badge">2023 - 2027</div>
                        <h3 className="edu-degree">Bachelor of Engineering</h3>
                        <h4 className="edu-major">Electronics & Communication Engineering</h4>
                        <div className="edu-institution">
                            RAMAIAH INSTITUTE OF TECHNOLOGY
                        </div>
                    </div>

                    <div className="edu-body">
                        <div className="edu-stat-row">
                            <div className="edu-stat">
                                <span className="stat-label">CGPA</span>
                                <span className="stat-value">8.82<small>/10</small></span>
                            </div>
                            <div className="edu-stat">
                                <span className="stat-label">Status</span>
                                <span className="stat-value">Undergraduate</span>
                            </div>
                        </div>

                        <div className="edu-coursework">
                            <h5 className="coursework-title">Relevant Coursework</h5>
                            <div className="course-grid">
                                <span>DSA in C++</span>
                                <span>Digital Signal Processing</span>
                                <span>VLSI Design</span>
                                <span>Computer Architecture</span>
                                <span>Microprocessors</span>
                                <span>Control Systems</span>
                                <span>Communication Systems</span>
                                <span>Computer Networks</span>
                                <span>Operating Systems</span>
                            </div>
                        </div>

                        <div className="edu-skills-row">
                            <span className="tech-badge">Circuit Analysis</span>
                            <span className="tech-badge">Microcontrollers</span>
                            <span className="tech-badge">Signal Processing</span>
                            <span className="tech-badge">Embedded Systems</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
