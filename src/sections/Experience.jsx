import React, { useState } from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 'MOD_01',
            role: "Harvard Delegate",
            company: "HARVARD PROJECT FOR ASIA AND INTERNATIONAL RELATIONS",
            date: "JUNE 2024",
            description: "Selected as the only delegate from my university for HPAIR Harvard Conference 2024. Honored with a global internship for outstanding innovation and leadership.",
            tech: ["Leadership", "Public Speaking", "Global Collaboration", "Strategy"],
            status: "ACTIVE"
        },
        {
            id: 'MOD_02',
            role: "INTERN",
            company: "AIML & AIDS DEPARTMENT MSRIT",
            date: "AUGUST 2023",
            description: "Conducted real-world data analysis using Excel, applying statistical functions, pivot tables, and visualizations to extract insights and support decision-making.",
            tech: ["Excel", "Data Analysis", "Pivot Tables", "Statistics"],
            status: "ARCHIVED"
        }
    ];

    return (
        <section id="experience" className="section" style={{ padding: '4rem 0' }}>
            <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', textAlign: 'center', marginBottom: '4rem' }}>
                &lt; EXPERIENCE_MODULES /&gt;
            </h2>

            <div className="rack-container">
                {/* Rack Frame */}
                <div className="rack-frame-left"></div>
                <div className="rack-frame-right"></div>

                <div className="rack-stack">
                    {experiences.map((exp, index) => (
                        <div key={index} className="server-module">
                            {/* Module Faceplate */}
                            <div className="module-faceplate">
                                <div className="module-handle"></div>
                                <div className="module-status">
                                    <span className={`status-light ${exp.status === 'ACTIVE' ? 'blink-green' : 'solid-amber'}`}></span>
                                    <span className="status-text">{exp.status}</span>
                                </div>
                                <div className="module-id">{exp.id}</div>
                                <div className="module-screw top"></div>
                                <div className="module-screw bottom"></div>
                            </div>

                            {/* Module Content Area */}
                            <div className="module-body">
                                <div className="module-header">
                                    <h3 className="module-role">{exp.role}</h3>
                                    <div className="module-org">{exp.company}</div>
                                    <div className="module-date">[{exp.date}]</div>
                                </div>

                                <div className="module-terminal">
                                    <div className="terminal-label">&gt; SYSTEM_ANALYSIS:</div>
                                    <p className="terminal-text">{exp.description}</p>
                                </div>

                                <div className="module-footer">
                                    <div className="footer-label">LOADED_MODULES:</div>
                                    <div className="tech-grid">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="tech-chip">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Hazard Stripe */}
                            <div className="hazard-strip"></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .rack-container {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    padding: 0 30px;
                }

                .rack-frame-left, .rack-frame-right {
                    position: absolute;
                    top: -20px;
                    bottom: -20px;
                    width: 15px;
                    background: linear-gradient(90deg, #333, #111);
                    border: 1px solid #444;
                    z-index: 0;
                }
                .rack-frame-left { left: 0; }
                .rack-frame-right { right: 0; }

                .server-module {
                    display: flex;
                    align-items: stretch;
                    background: #0a0a0f;
                    border: 1px solid #333;
                    border-left: 4px solid #444; /* Heavy left border implies a thick unit */
                    margin-bottom: 2rem;
                    position: relative;
                    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
                    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
                    overflow: hidden;
                }
                .server-module:hover {
                    transform: translateX(10px);
                    box-shadow: -5px 5px 20px rgba(0, 255, 255, 0.1);
                    border-color: #555;
                }

                /* Faceplate (Left Control Panel) */
                .module-faceplate {
                    width: 60px;
                    background: #15151a;
                    border-right: 1px solid #333;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem 0;
                    position: relative;
                    flex-shrink: 0;
                }
                .module-handle {
                    width: 8px;
                    height: 40px;
                    background: #333;
                    border-radius: 4px;
                    margin-bottom: 1rem;
                    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.8);
                }
                .module-status {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5px;
                    margin-bottom: auto;
                }
                .status-light {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #333;
                }
                .blink-green {
                    background: #0f0;
                    box-shadow: 0 0 5px #0f0;
                    animation: blink 2s infinite;
                }
                .solid-amber {
                    background: #ffab00;
                    box-shadow: 0 0 5px #ffab00;
                }
                .status-text {
                    font-size: 0.5rem;
                    color: #555;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    letter-spacing: 1px;
                }
                .module-id {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    color: #444;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.7rem;
                    margin-bottom: 1rem;
                }
                .module-screw {
                    width: 6px;
                    height: 6px;
                    background: #444;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    box-shadow: inset 1px 1px 1px #000;
                }
                .top { top: 8px; }
                .bottom { bottom: 8px; }

                /* Body Content */
                .module-body {
                    flex-grow: 1;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }
                .module-header {
                    border-bottom: 1px solid #333;
                    padding-bottom: 0.8rem;
                    margin-bottom: 1rem;
                }
                .module-role {
                    color: #fff;
                    font-family: 'Orbitron', sans-serif;
                    font-size: 1.3rem;
                    letter-spacing: 1px;
                    margin-bottom: 0.3rem;
                    text-transform: uppercase;
                }
                .module-org {
                    color: #26a0da; /* Cyber Blue */
                    font-size: 0.8rem;
                    font-weight: bold;
                    letter-spacing: 0.5px;
                }
                .module-date {
                    float: right;
                    color: #555;
                    font-family: 'Fira Code', monospace;
                    font-size: 0.8rem;
                    margin-top: -2.5rem; /* Pull up to header line */
                }

                .module-terminal {
                    background: rgba(0,0,0,0.3);
                    padding: 1rem;
                    border-radius: 4px;
                    margin-bottom: 1rem;
                    border: 1px solid #222;
                    font-family: 'Fira Code', monospace;
                }
                .terminal-label {
                    color: #666;
                    font-size: 0.7rem;
                    margin-bottom: 0.5rem;
                }
                .terminal-text {
                    color: #bbb;
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                .module-footer {
                    margin-top: auto;
                }
                .footer-label {
                    color: #666;
                    font-size: 0.7rem;
                    font-family: 'Fira Code', monospace;
                    margin-bottom: 0.5rem;
                }
                .tech-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .tech-chip {
                    background: #1a1a20;
                    border: 1px solid #333;
                    color: #888;
                    padding: 0.2rem 0.6rem;
                    font-size: 0.7rem;
                    border-radius: 2px;
                    font-family: 'Fira Code', monospace;
                    transition: all 0.2s;
                }
                .server-module:hover .tech-chip {
                    border-color: #26a0da;
                    color: #26a0da;
                    box-shadow: 0 0 5px rgba(38, 160, 218, 0.2);
                }

                .hazard-strip {
                    width: 10px;
                    background: repeating-linear-gradient(
                        45deg,
                        #333,
                        #333 10px,
                        #444 10px,
                        #444 20px
                    );
                    border-left: 1px solid #222;
                }
                .server-module:hover .hazard-strip {
                     background: repeating-linear-gradient(
                        45deg,
                        #ffab00,
                        #ffab00 10px,
                        #000 10px,
                        #000 20px
                    );
                }

                @keyframes blink { 50% { opacity: 0.3; } }

                /* Mobile */
                @media (max-width: 768px) {
                    .rack-container { padding: 0 10px; }
                    .rack-frame-left, .rack-frame-right { display: none; }
                    .module-date { 
                        float: none;
                        display: block;
                        margin-top: 0.5rem;
                    }
                    .server-module { flex-direction: column; }
                    .module-faceplate { 
                        width: 100%; 
                        flex-direction: row; 
                        height: 40px; 
                        padding: 0 1rem;
                        justify-content: space-between;
                        border-right: 0;
                        border-bottom: 1px solid #333;
                    }
                    .module-handle { display: none; }
                    .module-status { flex-direction: row; margin-bottom: 0; }
                    .status-text { writing-mode: horizontal-tb; transform: none; }
                    .module-id { writing-mode: horizontal-tb; transform: none; margin: 0; }
                    .module-screw { display: none; }
                    .hazard-strip { height: 10px; width: 100%; }
                }

            `}</style>
        </section>
    );
};

export default Experience;
