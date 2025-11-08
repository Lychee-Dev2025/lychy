import React from 'react';
import '../styles/AboutUs.css';
import { ReactComponent as AboutSvg } from '../assets/about.svg';

const AboutUs = () => (
  <section id="about" className="about-us-section">
    <h2 className="about-us-main-heading">About Us</h2>
    <div className="about-us-container">
      <div className="about-us-text">
        <p>
          Welcome to Lychee! We are a creative team passionate about building modern, high-quality digital products that help businesses and individuals thrive in a connected world. Our expertise spans web and mobile development, UI/UX design, and digital strategy.
        </p>
        <p>
          We believe in the power of technology to transform ideas into reality. From concept to launch, we work closely with our clients to deliver solutions that are not only visually stunning but also robust, scalable, and user-friendly. Let us help you bring your vision to life!
        </p>
      </div>
      <div className="about-us-svg-wrap">
        <AboutSvg className="about-us-svg" />
      </div>
    </div>
  </section>
);

export default AboutUs;
