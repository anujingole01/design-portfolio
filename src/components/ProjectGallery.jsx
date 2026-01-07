import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProjectGallery.css';

const projects = [
    {
        id: 1,
        title: "Aurum Atelier",
        category: "Branding",
        img: "/images/project1.png"
    },
    {
        id: 2,
        title: "Cyber Pulse",
        category: "Art Direction",
        img: "/images/project2.png"
    },
    {
        id: 3,
        title: "Neo Renascence",
        category: "Print",
        img: "/images/project3.png"
    },
    {
        id: 4,
        title: "Future Flux",
        category: "UI/UX",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <motion.img
                    src={project.img}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
                <div className="overlay">
                    <h3>{project.title}</h3>
                    <span>{project.category}</span>
                </div>
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="gallery-section-wrapper">
            <div className="sticky-container">
                <h2 className="section-title">SELECTED WORK</h2>
                <motion.div className="horizontal-gallery" style={{ x }}>
                    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectGallery;
