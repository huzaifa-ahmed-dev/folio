'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2>Get In Touch</h2>
                <p>Let&apos;s work together</p>
            </div>

            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your project..."
                            rows={5}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                <div className="contact-info">
                    <div className="info-card">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:freelancersoftuae@gmail.com">freelancersoftuae@gmail.com</a>
                        </div>
                    </div>

                    <div className="info-card">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Location</h4>
                            <span>Dubai, UAE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
