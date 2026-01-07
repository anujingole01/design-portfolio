import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const linkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    return (
        <header>
            <div className="nav-header">
                <div className="logo">ANUJ INGOLE</div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? 'CLOSE' : 'MENU'}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="menu-overlay"
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="menu-container">
                            <motion.div
                                className="menu-links"
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                            >
                                {['Work', 'About', 'Services', 'Contact'].map((link, index) => (
                                    <div className="overflow-hidden" key={index}>
                                        <motion.div variants={linkVars}>
                                            <a href={`#${link.toLowerCase()}`} onClick={toggleMenu} className="menu-link">{link}</a>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                            <div className="menu-footer">
                                <p>Designed in 2026</p>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navigation;
