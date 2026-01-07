import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeScene from './ThreeScene';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const textVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="hero-section" ref={containerRef}>
            <motion.div className="hero-bg" style={{ y, opacity }}>
                <ThreeScene />
                <div className="noise-overlay"></div>
            </motion.div>

            <div className="hero-content">
                <div className="hero-rows">
                    <div className="overflow-hidden">
                        <motion.h1 variants={textVariants} initial="hidden" animate="visible">
                            VISUAL
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.h1 variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                            DESIGN
                        </motion.h1>
                    </div>
                </div>

                <motion.div
                    className="hero-sub"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p>PORTFOLIO 2026</p>
                    <p>MUMBAI</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
