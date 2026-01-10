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
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
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
                    <div className="footer-logo">
                        <div className="logo-icon"></div>
                    </div>
                    <p>Thanks for scrolling, that's all folks.</p>

                    <div className="social-links">
                        <a href="#" aria-label="Website">🌐</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
