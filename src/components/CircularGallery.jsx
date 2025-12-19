import React, { useRef, useState, useEffect } from 'react';

const CircularGallery = ({ items }) => {
    const containerRef = useRef(null);
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startRotation, setStartRotation] = useState(0);

    // Geometry config
    // Geometry config
    const itemWidth = 500; // Matches CSS width
    const gap = 20; // Gap between items
    // Calculate radius to strictly fit items without overlap
    // C = N * (w + g) = 2 * pi * r  => r = C / 2pi
    // We add a minimum radius to ensure it doesn't look too tight for few items
    const radius = Math.max((items.length * (itemWidth + gap)) / (2 * Math.PI), 650);
    const angleStep = 360 / items.length;

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setStartRotation(rotation);

        // Prevent text selection while dragging
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        setRotation(startRotation + deltaX * 0.5);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.userSelect = '';
        document.body.style.cursor = '';
    };

    // Touch support for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setStartRotation(rotation);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        setRotation(startRotation + deltaX * 1.5);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        // Attach to window to handle drag even if mouse leaves component
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleTouchEnd);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    // Auto-scroll 'from right to left' means items appear from right and move left
    // Positive rotation in Y axis moves items from right to left in front of viewer
    useEffect(() => {
        if (!isDragging) {
            const interval = setInterval(() => {
                setRotation(prev => prev + 0.15); // Positive rotation for Right-to-Left flow
            }, 16); // ~60fps
            return () => clearInterval(interval);
        }
    }, [isDragging]);

    return (
        <div
            className="gallery-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            <div
                className="gallery-track"
                style={{
                    transform: `rotateY(${rotation}deg)`
                }}
            >
                {items.map((item, index) => {
                    const angle = index * angleStep;
                    return (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                            }}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            <div className="gallery-instructions">
                &lt; Drag to Rotate &gt;
            </div>
        </div>
    );
};

export default CircularGallery;
