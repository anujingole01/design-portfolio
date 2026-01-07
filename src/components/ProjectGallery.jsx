import { motion } from 'framer-motion';
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
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            <h2 className="section-title">Selected Work</h2>
            <div className="gallery-grid">
                {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
        </section>
    );
};

export default ProjectGallery;
