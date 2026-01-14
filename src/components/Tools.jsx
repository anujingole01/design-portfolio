import { motion } from 'framer-motion';
import { TOOLS } from '../constants';
import './Tools.css';

const Tools = () => {
    // Duplicate the tools array to ensure seamless looping
    const marqueeTools = [...TOOLS, ...TOOLS, ...TOOLS];

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
                </motion.div>

                <div className="marquee-wrapper">
                    <motion.div
                        className="marquee-track"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {marqueeTools.map((tool, index) => (
                            <div key={index} className="tool-item-container">
                                <div className="tool-logo-card">
                                    <img src={tool.logo} alt={tool.name} className="tool-icon" />
                                </div>
                                <span className="tool-label">{tool.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
