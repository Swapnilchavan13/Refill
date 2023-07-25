// AboutUs.js
import React from 'react';
import '../Styles/info.css'; // Import the custom CSS file

const AboutUs = () => {
  return (
    <div id="about-us" className="section">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            {/* Company Introduction */}
            <h2 className="animate__animated animate__fadeInUp">Welcome to Refill</h2>
            <p className="animate__animated animate__fadeInUp">
              Refill is a leading online fuel retail platform dedicated to providing convenient and reliable fuel delivery services. With a commitment to customer satisfaction and sustainability, we strive to revolutionize the way you refuel your vehicles and equipment.
            </p>
            {/* Company History */}
            <h3 className="animate__animated animate__fadeInUp">Our Story</h3>
            <p className="animate__animated animate__fadeInUp">
              Refill was founded in 2023 with the vision to modernize the fueling experience for consumers and businesses alike. Over the years, we have grown from a small startup to a nationwide fuel delivery service, serving thousands of satisfied customers. Our innovative approach and customer-centric values have set us apart in the fuel industry.
            </p>
            {/* Mission Statement */}
            <h3 className="animate__animated animate__fadeInUp">Our Mission</h3>
            <p className="animate__animated animate__fadeInUp">
              At Refill, our mission is to provide a seamless and efficient fueling solution that saves time and enhances convenience for our customers. We are committed to delivering high-quality fuel products, ensuring on-time delivery, and prioritizing the safety of our customers and the environment. We aim to make fueling hassle-free while promoting sustainability through our eco-friendly practices.
            </p>
            {/* Commitment to Quality */}
            <h3 className="animate__animated animate__fadeInUp">Commitment to Quality</h3>
            <p className="animate__animated animate__fadeInUp">
              We take pride in our commitment to quality and adhere to the strictest industry standards. All our fuel products undergo rigorous testing to ensure they meet the highest quality benchmarks. Our dedicated team of professionals works tirelessly to maintain the reliability and efficiency of our delivery services, providing you with a smooth and dependable experience every time you refuel with FuelOn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
