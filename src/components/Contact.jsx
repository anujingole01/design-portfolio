import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-grid">
                    {/* Left Column */}
                    <motion.div
                        className="contact-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2>Got a project?<br />Let's talk.</h2>
                        <p className="contact-desc">
                            Ready to start your next groundbreaking project? I'm currently available for freelance work and open to new opportunities.
                        </p>

                        <a href="mailto:hi@anujingole.com" className="email-link">
                            hi@anujingole.com <span className="arrow">→</span>
                        </a>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        className="contact-right"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-header">
                            <h3>Estimate your project?<br />Let me know here.</h3>
                        </div>

                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>What's your name?</label>
                                <input type="text" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label>Your fancy email</label>
                                <input type="email" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label>Tell me about your project</label>
                                <div className="input-wrapper">
                                    <input type="text" placeholder="" />
                                    <div className="form-actions">
                                        <button type="button" className="attach-btn">📎</button>
                                        <button type="submit" className="submit-btn">→</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>

                <motion.footer
                    className="contact-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-content">
                        <div className="footer-left">
                            <div className="logo-text">Anuj Ingole</div>
                            <p>© 2026 All Rights Reserved.</p>
                        </div>

                        <div className="footer-center">
                            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Back to Top <span className="arrow-up">↑</span>
                            </button>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Website">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.footer>
            </div>
        </section >
    );
};

export default Contact;
