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
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                        </p>

                        <a href="#" className="explore-link">
                            Explore more <span className="arrow">→</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Project List */}
                <div className="portfolio-right">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ margin: "-10%" }}
                        >
                            <div className={`project-image-placeholder ${project.class}`}>
                                <div className="overlay"></div>
                                <div className="project-content-overlay">
                                    <h3>{project.title}</h3>
                                    <span>{project.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
