import React, { useEffect, useState, useRef } from 'react';

// Decryption Effect Component
const HackerText = ({ text, speed = 30 }) => {
    const [display, setDisplay] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{display}</span>;
}

const Achievements = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const sectionRef = useRef(null);

    // Updated Data Structure for Hackathons/Events
    const achievements = [
        {
            id: 'EVT_001',
            date: '2024-06-15',
            place: 'WINNER',
            eventName: 'HPAIR Harvard Conference',
            location: 'Cambridge, MA',
            description: 'Selected as Delegate & Innovation Challenge Winner'
        },
        {
            id: 'EVT_002',
            date: '2024-10-01',
            place: 'ORGANIZER',
            eventName: 'Hacktoberfest 2024',
            location: 'Global / Remote',
            description: 'Lead Organizer for Open Source Contributions'
        },
        {
            id: 'EVT_003',
            date: '2023-12-10',
            place: 'FINALIST',
            eventName: 'Smart India Hackathon (SIH)',
            location: 'India',
            description: 'Top 50 Nationwide - Security Problem Statement'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        achievements.forEach((ach, index) => {
                            setTimeout(() => {
                                setVisibleItems(prev => {
                                    if (prev.find(i => i.id === ach.id)) return prev;
                                    return [...prev, ach];
                                });
                            }, index * 600);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="achievements" className="section" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
            <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', marginBottom: '4rem', textAlign: 'center' }}>
                &lt; ACHIEVEMENTS /&gt;
            </h2>

            <div className="circuit-container">
                {/* Central Data Bus */}
                <div className="central-bus"></div>

                {achievements.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const isVisible = visibleItems.find(i => i.id === item.id);

                    return (
                        <div key={item.id} className={`circuit-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`}>
                            <div className="connection-line"></div>
                            <div className="circuit-node"></div>

                            <div className="microchip-card">
                                <div className="chip-header">
                                    <span className="chip-id">{item.id}</span>
                                    <span className={`chip-rank ${item.place === 'WINNER' ? 'gold' : 'blue'}`}>{item.place}</span>
                                </div>
                                <div className="chip-body">
                                    <h3 className="event-name">{item.eventName}</h3>
                                    <div className="event-meta">
                                        <span className="date">[{item.date}]</span>
                                        <span className="loc">@ {item.location}</span>
                                    </div>
                                    <p className="description">&gt; {item.description}</p>
                                </div>
                                {/* Decorative chip pins */}
                                <div className="chip-pins top"></div>
                                <div className="chip-pins bottom"></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                .circuit-container {
                    position: relative;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 2rem 0;
                }

                .central-bus {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: #222;
                    transform: translateX(-50%);
                    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
                    z-index: 0;
                }
                .central-bus::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 50%;
                    background: linear-gradient(to bottom, transparent, #0ff, transparent);
                    animation: busPulse 3s linear infinite;
                }

                @keyframes busPulse {
                    0% { top: -50%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }

                .circuit-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 4rem;
                    position: relative;
                    opacity: 0;
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .circuit-item.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                .circuit-item.left { transform: translateX(-50px); }
                .circuit-item.right { transform: translateX(50px); }
                .circuit-item.visible.left, .circuit-item.visible.right { transform: translateX(0); }

                /* Connection Lines */
                .connection-line {
                    position: absolute;
                    height: 2px;
                    background: #26a0da;
                    top: 50%;
                    width: 50%; /* Adjust based on layout */
                    z-index: -1;
                    box-shadow: 0 0 5px #26a0da;
                }
                .circuit-item.left .connection-line {
                    right: 50%;
                    width: 15%; /* Spacing from center to card */
                    transform-origin: right;
                    transform: scaleX(0);
                    transition: transform 0.5s ease 0.2s;
                }
                .circuit-item.right .connection-line {
                    left: 50%;
                    width: 15%;
                    transform-origin: left;
                    transform: scaleX(0);
                    transition: transform 0.5s ease 0.2s;
                }
                .circuit-item.visible .connection-line {
                    transform: scaleX(1);
                }

                .circuit-node {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 12px;
                    height: 12px;
                    background: #000;
                    border: 2px solid #0ff;
                    border-radius: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    z-index: 2;
                    box-shadow: 0 0 10px #0ff;
                    transition: transform 0.3s ease;
                }
                .circuit-item.visible .circuit-node {
                    transform: translate(-50%, -50%) scale(1);
                }

                .microchip-card {
                    background: rgba(10, 15, 20, 0.95);
                    border: 1px solid #333;
                    border-radius: 6px;
                    padding: 1.5rem;
                    width: 40%;
                    position: relative;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
                    transition: all 0.3s ease;
                    margin-left: auto;
                    margin-right: auto;
                }
                .microchip-card:hover {
                    box-shadow: 0 0 20px rgba(38, 160, 218, 0.3);
                    border-color: #26a0da;
                }

                .circuit-item.left .microchip-card { margin-right: 55%; }
                .circuit-item.right .microchip-card { margin-left: 55%; }

                .chip-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #333;
                    padding-bottom: 0.5rem;
                    margin-bottom: 1rem;
                }
                .chip-id {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.7rem;
                    color: #555;
                }
                .chip-rank {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 0.8rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    letter-spacing: 1px;
                }
                .chip-rank.gold {
                    background: rgba(255, 215, 0, 0.1);
                    color: #ffd700;
                    border: 1px solid #ffd700;
                    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
                }
                .chip-rank.blue {
                    background: rgba(38, 160, 218, 0.1);
                    color: #26a0da;
                    border: 1px solid #26a0da;
                    box-shadow: 0 0 5px rgba(38, 160, 218, 0.3);
                }

                .event-name {
                    color: #e0e0e0;
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    text-shadow: 0 0 2px rgba(255, 255, 255, 0.1);
                }
                .event-meta {
                    font-family: 'Fira Code', monospace;
                    font-size: 0.8rem;
                    color: #888;
                    margin-bottom: 1rem;
                    display: flex;
                    gap: 1rem;
                }
                .description {
                    color: #bbb;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                /* Mobile Response */
                @media (max-width: 768px) {
                    .central-bus { left: 20px; }
                    .circuit-item { flex-direction: column; align-items: flex-start; margin-left: 20px; }
                    .circuit-item.left .microchip-card, 
                    .circuit-item.right .microchip-card {
                        width: 85%;
                        margin: 0 0 0 2rem;
                    }
                    .circuit-item.left .connection-line,
                    .circuit-item.right .connection-line {
                        left: 0;
                        width: 2rem;
                        transform-origin: left;
                    }
                    .circuit-node { left: 0; }
                }

            `}</style>
        </section>
    );
};

export default Achievements;
