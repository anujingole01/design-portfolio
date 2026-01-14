import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import './Services.css';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                        — Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Design Scope & Deliverables
                    </motion.h2>
                </div>

                <div className="services-list">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="service-header">
                                <span className="service-index">0{index + 1}</span>
                                <h3 className="service-title">{service.title}</h3>
                                <span className="service-arrow">→</span>
                            </div>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        className="service-details"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="service-desc">{service.description}</p>
                                        <ul className="service-tags">
                                            {service.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="service-divider"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
