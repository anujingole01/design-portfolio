import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header-content">
                    <motion.span
                        className="section-tag"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        — What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Design Scope & Deliverables
                    </motion.h2>
                    <motion.p
                        className="services-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        I design and execute end-to-end creative solutions, delivering creative, clean, and impactful designs.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card-expanded"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="service-number">0{index + 1}</div>
                            <h3>{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <ul className="service-list">
                                {service.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
