import React, { useState } from 'react';
import '../Styles/animation.css'; // Import the CSS file for styling

const AnimationComponent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setIsAnimating(true);

    // Generate random coordinates to move the box to a new position
    const newX = Math.floor(Math.random() * (window.innerWidth - 100));
    const newY = Math.floor(Math.random() * (window.innerHeight - 100));

    setPosition({ x: newX, y: newY });

    // After 1 second, stop the animation
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="animation-container">
      <div
        className={`box ${isAnimating ? 'animate' : ''}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onClick={handleClick}
      />
    </div>
  );
};

export default AnimationComponent;
