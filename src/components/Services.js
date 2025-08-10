import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLayerGroup, faLaptopCode, faHammer, faMagnifyingGlassChart} from '@fortawesome/free-solid-svg-icons';
import '../styles/Services.css';

const services = [
{
    icon: <FontAwesomeIcon icon={faCode} />,
    title: 'App Development',
    desc: 'Innovative, seamless, and user-friendly mobile apps that bring your ideas to life on any device.'
  },
  {
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    title: 'Web Development',
    desc: 'Building fast, responsive, and secure websites that drive results and elevate your brand.'
  },
  {
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
    title: 'UI/UX Design',
    desc: 'Beautiful, user-centric interfaces and experiences that delight and engage your users.'
  },
  {
    icon: <FontAwesomeIcon icon={faPalette} />,
    title: 'Graphic Design',
    desc: 'Creative, eye-catching designs that tell your brand’s story and captivate your audience.'
  },
  {
    icon: <FontAwesomeIcon icon={faHammer} />,
    title: 'Maintenance',
    desc: 'Ongoing maintenance and updates to keep your digital products running smoothly and securely.'
  },
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
    title: 'SEO optimization',
    desc: 'Maximize your online presence with tailored SEO optimization strategies that increase rankings and drive traffic.'
  }
];

const Services = () => (
  <section id="services" className="services-section">
    <h2 className="services-title">Our Services</h2>
    <ul className="services-list">
      {services.map((service, idx) => (
        <li className="service-card animated-fade-in" key={idx} style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}>
          <div className="service-icon">
            {service.icon}
          </div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Services;
