import React from 'react';

const ScrollStack = ({ items, itemHeight = 300, offset = 40 }) => {
    return (
        <div
            className="scroll-stack-container"
            style={{
                height: `${items.length * itemHeight + 400}px`, // Dynamic height to allow scrolling
                position: 'relative'
            }}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="stack-card"
                    style={{
                        position: 'sticky',
                        top: `${120 + index * offset}px`, // Staggered sticky top
                        height: `${itemHeight}px`,
                        marginBottom: `${offset}px`,
                        zIndex: index + 1,
                        transformOrigin: 'top center',
                        filter: `brightness(${1 - index * 0.05})` // Slight darkening for depth (optional, maybe better without)
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ScrollStack;
