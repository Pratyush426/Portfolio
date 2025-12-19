import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <div className="theme-toggle-container">
            <button
                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => toggleTheme('dark')}
                aria-label="Dark Mode"
            >
                &#9789;
            </button>
            <button
                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => toggleTheme('light')}
                aria-label="Light Mode"
            >
                &#9728;
            </button>
        </div>
    );
};

export default ThemeToggle;
