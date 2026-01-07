import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProjectGallery.css';

const projects = [
    {
        id: 1,
        title: "Aurum Atelier",
        category: "Branding",
        img: "/images/project1.png",
        col: 1,
        speed: 0.1
    },
    {
        id: 2,
        title: "Cyber Pulse",
        category: "Art Direction",
        img: "/images/project2.png",
        col: 2,
        speed: 0.2
    },
    {
        id: 3,
        title: "Neo Renascence",
        category: "Print",
        img: "/images/project3.png",
        col: 1,
        speed: 0.05
    },
    {
        id: 4,
        title: "Future Flux",
        category: "UI/UX",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Fallback/Unsplash
        col: 2,
        speed: 0.15
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-10%" }}
        >
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
        </motion.div>
    );
};

const ProjectGallery = () => {
    return (
        <section className="gallery-section" id="work">
            <h2 className="section-title">SELECTED WORK</h2>
            <div className="gallery-grid">
                <div className="column">
                    {projects.filter(p => p.col === 1).map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
                <div className="column down-shift">
                    {projects.filter(p => p.col === 2).map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
