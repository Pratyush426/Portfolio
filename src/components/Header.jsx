import React from 'react';

const Header = () => {
    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            {/* Profile section removed as per refactor */}
            <nav className="navbar">
                <a href="#intro" className="nav-link" onClick={(e) => handleNavClick(e, 'intro')}>Intro</a>
                <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
                <a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, 'education')}>Education</a>
                <a href="#positions" className="nav-link" onClick={(e) => handleNavClick(e, 'positions')}>Positions</a>
                <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                <a href="#achievements" className="nav-link" onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a>
            </nav>
            <a href="#contact" className="hire-me-btn" onClick={(e) => handleNavClick(e, 'contact')}>Hire Me</a>
        </header>
    );
};

export default Header;
