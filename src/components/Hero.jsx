import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ROLE_AND_EXPERTISE } from '../constants';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section className="hero-section" ref={containerRef}>
            <div className="hero-container">
                {/* Left Column: Portrait & Intro */}
                <motion.div
                    className="hero-left"
                    style={{ y: yLeft }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="portrait-container">
                        <div className="portrait-placeholder">
                            {/* Placeholder for actual portrait */}
                            <span>Portrait </span>
                        </div>
                        <div className="portrait-glow"></div>
                    </div>

                    <div className="hero-text-content">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Hello, I'm
                        </motion.h2>
                        <motion.h1
                            className="kinetic-name"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Anuj Ingole
                        </motion.h1>
                        <motion.h3
                            className="hero-role"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}
                        >
                            {ROLE_AND_EXPERTISE.role}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {ROLE_AND_EXPERTISE.title}
                        </motion.p>
                    </div>
                </motion.div>

                {/* Right Column: Floating UI Cards */}
                <motion.div
                    className="hero-right"
                    style={{ y: yRight }}
                >
                    {/* Floating Card 1: Stats/Info */}
                    <motion.div
                        className="floating-card card-1"
                        initial={{ opacity: 0, y: 100, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, rotate: 5 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <div className="card-header">
                            <div className="dot"></div>
                            <span>Project Stats</span>
                        </div>
                        <div className="card-content">
                            <h3>50+</h3>
                            <p>Projects Delivered</p>
                        </div>
                    </motion.div>

                    {/* Floating Card 2: Visual Preview */}
                    <motion.div
                        className="floating-card card-2"
                        initial={{ opacity: 0, x: 100, rotate: -3 }}
                        animate={{ opacity: 1, x: 0, rotate: -3 }}
                        transition={{ duration: 1, delay: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <div className="card-image-placeholder"></div>
                        <div className="card-footer">
                            <span>Latest Design</span>
                            <div className="arrow">→</div>
                        </div>
                    </motion.div>

                    {/* Floating Card 3: Status */}
                    <motion.div
                        className="floating-card card-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <span className="status-dot"></span>
                        Available for work
                    </motion.div>
                </motion.div>
            </div>

            <div className="ambient-light"></div>
        </section>
    );
};

export default Hero;
