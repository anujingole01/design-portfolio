import { motion } from 'framer-motion';
import { TOOLS } from '../constants';
import './Tools.css';

const Tools = () => {
    return (
        <section className="tools-section">
            <div className="tools-container">
                <motion.div
                    className="tools-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">— Tech Stack</span>
                    <h2>Tools & Workflow</h2>
                </motion.div>

                <div className="tools-grid">
                    {TOOLS.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="tool-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, color: 'var(--accent-color)' }}
                        >
                            <div className="tool-name">{tool.name}</div>
                            <div className="tool-type">{tool.type}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
