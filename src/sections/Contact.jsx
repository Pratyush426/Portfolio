import React, { useState } from 'react';
import Socials from '../components/Socials';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully! I\'ll get back to you soon.');
    };

    return (
        <section id="contact" className="section">
            <div className="contact-form">
                <h2 className="section-title" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '4px', textAlign: 'center', marginBottom: '2rem' }}>
                    &lt; CONNECT /&gt;
                </h2>
                <Socials />
                <h3 style={{ textAlign: 'center', color: '#26a0da', marginBottom: '2rem' }}>Send Message</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-input" placeholder="enter your name..." required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-input" placeholder="enter your email..." required />
                    </div>
                    <div className="form-group">
                        <textarea className="form-input" rows="5" placeholder="enter your message..." required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Execute Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
