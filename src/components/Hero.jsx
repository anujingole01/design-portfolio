import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div className="noise-overlay"></div>
                {/* Optional: Subtle spotlight behind text */}
                <div className="spotlight"></div>
            </div>

            <div className="hero-content-simple">
                <motion.span
                    className="label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Graphic Design
                </motion.span>

                <div className="title-wrapper">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Portfolio
                    </motion.h1>

                    <motion.div
                        className="signature"
                        initial={{ opacity: 0, pathLength: 0 }}
                        animate={{ opacity: 1, pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Anuj Ingole
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
