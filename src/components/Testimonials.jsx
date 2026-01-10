import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: "Jared Warner",
        role: "CEO of BeServer",
        quote: "Amazing! The attention to detail and creative direction provided by Anuj completely transformed our brand identity. He brings a unique perspective that perfectly balances aesthetics and functionality.",
        image: null // Placeholder will be handled in CSS
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Marketing Director at TechFlow",
        quote: "Anuj is a visionary designer. His kinetic typography work added a layer of dynamism to our campaign that we didn't know we needed. Highly recommended for premium design work.",
        image: null
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Founder, StartUp Inc",
        quote: "Professional, timely, and incredibly talented. The dark mode implementation and smooth transitions on our site receive compliments daily.",
        image: null
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonial-content">
                    {/* Left Column: Photo */}
                    <motion.div
                        className="testimonial-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="testimonial-image-placeholder">
                            {/* In a real app, use <img src={testimonialsData[currentIndex].image} /> */}
                            <div className="placeholder-texture"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Quote */}
                    <div className="testimonial-text-wrapper">
                        <div className="quote-icon">“</div>

                        <div className="quote-container">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="quote-text">
                                        {testimonialsData[currentIndex].quote}
                                    </p>

                                    <div className="author-info">
                                        <h4>{testimonialsData[currentIndex].name}</h4>
                                        <span>{testimonialsData[currentIndex].role}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Dots */}
                        <div className="testimonial-dots">
                            {testimonialsData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
