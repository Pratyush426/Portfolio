import React, { useEffect, useState } from 'react';

const HiddenDev = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        let devKeySequence = [];
        const devCode = ['KeyD', 'KeyE', 'KeyV'];

        const handleKeyDown = (e) => {
            devKeySequence.push(e.code);
            if (devKeySequence.length > 3) {
                devKeySequence.shift();
            }

            if (devKeySequence.join('') === devCode.join('')) {
                setActive(true);
                devKeySequence = [];
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!active) return null;

    return (
        <div className="dev-section active" id="devSection">
            <button className="close-dev" onClick={() => setActive(false)}>×</button>
            <div className="dev-content">
                <h2 style={{ color: '#26a0da', marginBottom: '1rem' }}>Development Console</h2>
                <div className="terminal-box">
                    <div className="terminal-header">
                        <div className="terminal-btn btn-close" onClick={() => setActive(false)}></div>
                        <div className="terminal-btn btn-minimize"></div>
                        <div className="terminal-btn btn-maximize"></div>
                        <span style={{ marginLeft: '1rem', color: '#666' }}>dev@arjun:~</span>
                    </div>
                    <div className="terminal-content">
                        <div style={{ color: '#1a5f7a' }}>$ cat secret_projects.log</div>
                        <div style={{ color: '#b0b0b0', margin: '1rem 0' }}>
                            [2024-12-15] Neural Network FPGA Implementation - 87% complete<br />
                            [2024-12-10] Custom RISC-V Processor Design - Testing phase<br />
                            [2024-12-05] Quantum Communication Protocol - Research ongoing<br />
                            [2024-11-30] AI-Powered Circuit Optimizer - Alpha version ready<br />
                            [2024-11-25] Blockchain-based IoT Security - Proof of concept<br />
                        </div>
                        <div style={{ color: '#1a5f7a' }}>$ system_stats</div>
                        <div style={{ color: '#b0b0b0', margin: '1rem 0' }}>
                            Lines of code written: 47,832<br />
                            Coffee consumed: 2.3 liters/day<br />
                            Sleep schedule: undefined<br />
                            Debugging sessions: ∞<br />
                            Innovation level: Maximum<br />
                        </div>
                        <div style={{ color: '#1a5f7a' }}>$ echo "Keep exploring, keep building..."</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiddenDev;
