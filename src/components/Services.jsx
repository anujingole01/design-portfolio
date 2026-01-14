import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import './Services.css';

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Default to first open

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header-content">
                    <span className="section-tag gradient-text">My Arsenal</span>
                    <h2 className="title-huge">Creative<br />Expertise</h2>
                </div>

                <div className="expandable-gallery">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-panel ${hoveredIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            layout
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <div className="panel-bg card-theme-bg"></div>

                            <div className="panel-content">
                                <div className="panel-minimized">
                                    <span className="panel-num">0{index + 1}</span>
                                    <h3 className="vertical-text">{service.title}</h3>
                                </div>

                                <motion.div
                                    className="panel-expanded"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <h3 className="expanded-title">{service.title}</h3>
                                    <p className="expanded-desc">{service.description}</p>
                                    <div className="expanded-tags">
                                        {service.items && service.items.map((item, i) => (
                                            <span key={i} className="tag-pill">{item}</span>
                                        ))}
                                    </div>
                                    <div className="panel-icon-large"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
