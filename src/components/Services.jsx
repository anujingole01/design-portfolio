import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        title: "Product Designer.",
        count: "124 Projects",
        icon: "ben-shape", // Placeholder class
        active: true
    },
    {
        title: "Branding Designer.",
        count: "37 Projects",
        icon: "pen-tool",
        active: false
    },
    {
        title: "Full Stack Developer.",
        count: "62 Projects",
        icon: "monitor",
        active: false
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                {/* Top Section: Header & Quotes */}
                <div className="services-header">
                    <div className="header-left">
                        <span className="section-tag">— Contact</span>
                        <h2>Any Type Of Query<br />& Discussion.</h2>
                        <p className="header-desc">
                            Collaborate with me to create seamless, user-centric digital experiences that drive results.
                        </p>
                        <a href="mailto:hi@anujingole.com" className="email-link">
                            hi@anujingole.com <span className="arrow">→</span>
                        </a>
                    </div>

                    <div className="header-right">
                        <h3>You can't use up creativity,<br />the more you use, more you have<br />in your signifant mind.</h3>
                        <p className="header-desc">
                            Creativity is an infinite resource. I leverage years of design expertise to bring unique visions to life, tailored to your brand's specific needs.
                        </p>

                        <div className="stats-container">
                            <div className="stat-item">
                                <span className="stat-number">14</span>
                                <span className="stat-label">Years of<br />Experience.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">187</span>
                                <span className="stat-label">Satisfied<br />Clients.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Service Cards */}
                <div className="services-cards">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`service-card ${service.active ? 'active' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-icon">
                                {/* Simple shape placeholder */}
                                <div className={`icon-shape ${service.icon}`}></div>
                            </div>
                            <div className="card-content">
                                <h4>{service.title}</h4>
                                <span>{service.count}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
