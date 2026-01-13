import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './ProjectGallery.css';

const projects = [
    {
        title: "BeServer.",
        category: "Branding, Product",
        image: null, // Placeholder in CSS
        class: "project-1"
    },
    {
        title: "Seone.",
        category: "Product, Development",
        image: null,
        class: "project-2"
    },
    {
        title: "Energetic Tumbler.",
        category: "Product, Development",
        image: null,
        class: "project-3"
    }
];

const ProjectGallery = () => {
    return (
        <section className="portfolio-section" id="work">
            <div className="portfolio-container">
                {/* Left Column: Sticky Text */}
                <div className="portfolio-left">
                    <div className="sticky-content">
                        <span className="section-tag">— Portfolio</span>
                        <h2>All Creative Works,<br />Selected projects.</h2>
                        <p className="portfolio-desc">
                            A curated selection of my work in branding, product design, and digital experiences. Each project represents a unique challenge and a creative solution.
                        </p>

                        <a href="#" className="explore-link">
                            Explore more <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Project List */}
                <div className="portfolio-right">
                    {projects.map((project, index) => {
                        const ref = useRef(null);
                        const { scrollYProgress } = useScroll({
                            target: ref,
                            offset: ["start end", "end start"]
                        });

                        const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
                        const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
                        const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0.6]);

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="project-item"
                                style={{ y, scale, opacity }}
                            >
                                <div className={`project-image-placeholder ${project.class}`}>
                                    <div className="overlay"></div>
                                    <div className="project-content-overlay">
                                        <h3>{project.title}</h3>
                                        <span>{project.category}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};

export default ProjectGallery;
