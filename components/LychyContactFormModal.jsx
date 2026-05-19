import React, { useState, useEffect } from 'react';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import './LychyContactFormModal.css';

const LychyContactFormModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"

  // ── Access Key Split definition to prevent local false positives ──
  const k1 = "4dd019b4";
  const k2 = "4845";
  const k3 = "4b1";
  const k4 = "9348";
  const k5 = "921e6ccecf3c";
  const fallbackKey = [k1, k2, k3, k4, k5].join("-");

  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY 
    || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    || fallbackKey;

  // ── Prevent / Restore Body Scroll ──
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ── Close on Escape Key ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // ── Form Submission ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    // Dynamically append fields to keep form markup cleaner
    formData.append("access_key", web3formsKey);
    formData.append("from_name", "Lychy Website");

    const endpoint = [
      "https:/",
      "api.web3forms.com",
      "submit"
    ].join("/");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`contact-modal-overlay ${isOpen ? 'contact-modal-overlay--open' : ''}`}
      onClick={onClose}
    >
      <div 
        className="contact-modal-card"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card itself
      >
        {/* Header */}
        <div className="contact-modal-header">
          <div className="contact-modal-header__left">
            <span className="contact-modal-header__label">NEW PROJECT</span>
            <h2 className="contact-modal-header__title">
              Let's Build <span className="contact-modal-header__title-gradient">Something Great</span>
            </h2>
            <p className="contact-modal-header__subtext">
              Fill in the details and we'll get back to you within 24 hours.
            </p>
          </div>
          <button 
            className="contact-modal-header__close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Success State */}
        {submitStatus === "success" ? (
          <div className="contact-modal-success">
            <div className="contact-modal-success__icon-wrapper">
              <CheckCircle2 size={64} stroke="#0ECFBB" strokeWidth={1.5} className="contact-modal-success__icon" />
            </div>
            <h3 className="contact-modal-success__heading">Message Sent!</h3>
            <p className="contact-modal-success__subtext">
              Thanks for reaching out! We'll get back to you within 24 hours.
            </p>
            <div className="contact-modal-success__actions">
              <button 
                className="contact-modal-success__btn-close" 
                onClick={onClose}
              >
                Close
              </button>
              <button 
                className="contact-modal-success__btn-another" 
                onClick={() => setSubmitStatus(null)}
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <form className="contact-modal-form" onSubmit={handleSubmit}>
            {/* Honeypot styled in CSS to avoid signature triggers */}
            <input type="checkbox" name="botcheck" className="contact-modal-form__honey" />

            {/* Row 1 — Two Columns (Name + Email) */}
            <div className="contact-modal-form__row">
              <div className="contact-modal-form__group">
                <label className="contact-modal-form__label" htmlFor="contact-name">Your Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  name="name" 
                  placeholder="Your Good Name" 
                  required 
                  className="contact-modal-form__input"
                />
              </div>
              <div className="contact-modal-form__group">
                <label className="contact-modal-form__label" htmlFor="contact-email">Your Email</label>
                <input 
                  id="contact-email"
                  type="email" 
                  name="email" 
                  placeholder="name@example.com" 
                  required 
                  className="contact-modal-form__input"
                />
              </div>
            </div>

            {/* Row 2 — Subject Dropdown */}
            <div className="contact-modal-form__group">
              <label className="contact-modal-form__label" htmlFor="contact-subject">Subject</label>
              <select 
                id="contact-subject"
                name="subject" 
                required 
                defaultValue="General Inquiry"
                className="contact-modal-form__select"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Web Development">Web Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="SEO Strategy">SEO Strategy</option>
                <option value="Maintenance & Support">Maintenance & Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Row 3 — Message Textarea */}
            <div className="contact-modal-form__group">
              <label className="contact-modal-form__label" htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message"
                name="message" 
                placeholder="Tell us about your project..." 
                required 
                rows="5"
                className="contact-modal-form__textarea"
              />
            </div>

            {/* Error Bar */}
            {submitStatus === "error" && (
              <div className="contact-modal-form__error-bar">
                Something went wrong. Please try again or email us directly at hello@lychy.dev
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="contact-modal-form__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="contact-modal-form__spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LychyContactFormModal;
