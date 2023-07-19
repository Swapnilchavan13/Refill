import React, { useState } from 'react';
import '../Styles/car.css'; // Import CSS file

const CarComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const carImage = isHovered ? 'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75' : 'https://img.freepik.com/premium-photo/blue-car-with-red-license-plate-that-says-ford-it_1340-37122.jpg?w=360';

  return (
    <div
      className={`car-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={carImage} alt="Car" />
    </div>
  );
};

export default CarComponent;
