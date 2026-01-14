import { motion } from 'framer-motion';
import { PROCESS } from '../constants';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-container">
                <div className="process-header">
                    <span className="section-tag gradient-text">Methodology</span>
                    <h2 className="title-huge">The<br />Journey</h2>
                </div>

                <div className="timeline-container">
                    <div className="timeline-spine"></div>

                    {PROCESS.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                            </div>

                            <div className="timeline-content">
                                <span className="timeline-num">0{index + 1}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
