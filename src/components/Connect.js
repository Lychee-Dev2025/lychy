import React, { useState } from 'react';
import '../styles/Connect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Connect = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://lychydev.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <section id="connect" className="connect-section">
      <h2 className="connect-title">
        Let's Start Your <span className="highlight">Next Project</span>
      </h2>
      <p className="connect-subtitle">
        Have a project in mind or want to learn more about our services? Reach out to us.
      </p>
      <div className="connect-container">
        <div className="connect-info-card">
          <div className="connect-info-top">
            <h3 className="connect-info-title">Contact Information</h3>
            <div className="connect-info-list">
              <div className="connect-info-item">
                <div className="connect-info-icon phone">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <div className="connect-info-label">Phone</div>
                  <div className="connect-info-value">+351 928 343 141</div>
                  <div className="connect-info-value">+92 309 8752218</div>
                </div>
              </div>
              <div className="connect-info-item">
                <div className="connect-info-icon email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <div className="connect-info-label">Email</div>
                  <div className="connect-info-value">lychydev@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="connect-info-bottom">
            <div className="connect-socials-label">Follow Us</div>
            <div className="connect-socials">
              <a href="#" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <form className="connect-form-card" onSubmit={handleSubmit}>
          <h3 className="connect-form-title">Send Us a Message</h3>
          <div className="connect-form-row">
            <div className="connect-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="connect-form-row">
            <div className="connect-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="connect-form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="How can we help you?"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="connect-btn">
            Send Message <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          {status && <div className="connect-status">{status}</div>}
        </form>
      </div>
    </section>
  );
};

export default Connect;
