import React from 'react';
import ScrollStack from '../components/ScrollStack';

const Positions = () => {
    const positions = [
        (
            <div className="glass-card position-card">
                <div className="pos-header">
                    <h3 className="pos-role">Core Member</h3>
                    <div className="pos-org">IEEE SPS</div>
                    <div className="pos-date">2024 - Present</div>
                </div>
                <ul className="pos-details">
                    <li>Conducted workshops on Web Development and IoT.</li>
                    <li>Led a team of 10 juniors.</li>
                    <li>Contributed to the development of the branch website.</li>
                </ul>
            </div>
        ),
        (
            <div className="glass-card position-card">
                <div className="pos-header">
                    <h3 className="pos-role">Secondary Core • Documentation</h3>
                    <div className="pos-org">EDC RAMAIAH</div>
                    <div className="pos-date">2024 - 2025</div>
                </div>
                <ul className="pos-details">
                    <li>Serving as a Secondary Core Member at EDC.</li>
                    <li>Driving innovation-focused initiatives and startup collaborations.</li>
                    <li>Managed documentation for multiple large-scale events.</li>
                </ul>
            </div>
        )
    ];

    return (
        <section id="experience" className="section">
            <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', textAlign: 'center' }}>
                &lt; LEADERSHIP_ROLES /&gt;
            </h2>
            <p style={{ textAlign: 'center', color: '#b0b0b0', marginBottom: '2rem' }}>
                &lt; Scroll to Unstack &gt;
            </p>
            <ScrollStack items={positions} itemHeight={350} offset={50} />
        </section>
    );
};

export default Positions;
