import React, { useEffect } from 'react';

const Particles = () => {
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = '#1a5f7a';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '0.6';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.zIndex = '-1';

            document.body.appendChild(particle);

            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: 0.6 },
                { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
            ], {
                duration: 15000 + Math.random() * 10000,
                easing: 'linear'
            });

            animation.onfinish = () => particle.remove();
        };

        const interval = setInterval(createParticle, 2000);

        return () => clearInterval(interval);
    }, []);

    return null; // This component doesn't render DOM nodes itself, just manages effects
};

export default Particles;
