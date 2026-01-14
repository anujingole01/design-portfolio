import { motion } from 'framer-motion';
import { PROCESS } from '../constants';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section">
            <div className="process-container">
                <motion.div
                    className="process-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">— Workflow</span>
                    <h2>Design Process & Quality</h2>
                </motion.div>

                <div className="process-steps">
                    {PROCESS.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-step"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="step-number">{step.step}</div>
                            <div className="step-content">
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
