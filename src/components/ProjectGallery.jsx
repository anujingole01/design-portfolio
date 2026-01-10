import { motion } from 'framer-motion';
import './ProjectGallery.css';


const categories = [
    { title: "Instagram Posts", id: "insta" },
    { title: "My Designs", id: "designs" },
    { title: "Stories", id: "stories" },
    { title: "Product Design", id: "product" }
];

const PlaceholderCard = () => {
    return (
        <motion.div
            className="placeholder-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="placeholder-content">
                <span>Coming Soon</span>
            </div>
        </motion.div>
    )
}

const ProjectSection = ({ title, id }) => {
    return (
        <div className="project-category" id={id}>
            <h3 className="category-title">{title}</h3>
            <div className="category-grid">
                {/* 4 Placeholders for each category */}
                {[1, 2, 3, 4].map(i => (
                    <PlaceholderCard key={i} />
                ))}
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    return (
        <section className="gallery-section" id="work">
            <h2 className="section-title">Selected Work</h2>
            <div className="gallery-container">
                {categories.map(cat => (
                    <ProjectSection key={cat.id} title={cat.title} id={cat.id} />
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
