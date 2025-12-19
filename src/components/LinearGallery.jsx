import React, { useRef, useState, useEffect } from 'react';

const LinearGallery = ({ items }) => {
    const trackRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startOffset, setStartOffset] = useState(0);

    // Configuration
    const cardWidth = 320; // Narrower for vertical detailed card
    const gap = 30; // Gap between cards
    const itemFullWidth = cardWidth + gap;

    // Duplicate items to create infinite illusion
    // We need enough copies to fill the screen + buffer
    const allItems = [...items, ...items, ...items];
    const totalWidth = items.length * itemFullWidth;

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setStartOffset(offset);
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        setOffset(startOffset + deltaX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setStartOffset(offset);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        setOffset(startOffset + deltaX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
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



    return (
        <div
            className="linear-gallery-container"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
                cursor: isDragging ? 'grabbing' : 'grab',
                padding: '2rem 0'
            }}
        >
            <div
                className="linear-track"
                ref={trackRef}
                style={{
                    display: 'flex',
                    gap: `${gap}px`,
                    transform: `translateX(${offset}px)`,
                    willChange: 'transform'
                }}
            >
                {allItems.map((item, index) => (
                    <div
                        key={index}
                        className="linear-item"
                        style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinearGallery;
