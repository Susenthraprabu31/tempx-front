import React from 'react';
import { motion } from 'framer-motion';
import '../styles/UnderConstruction.css';

const UnderConstruction = () => {
    // Generate small random particles for the background
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div className="construction-container">
            {/* Background floating particles */}
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0.1, 0.5, 0.1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}

            <motion.div
                className="construction-card glass"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
                <div className="construction-icon-wrapper">
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        {/* Wrench and sparkles icon */}
                        <svg className="construction-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                    </motion.div>
                </div>

                <motion.h1
                    className="construction-title gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Major Upgrade in Progress
                </motion.h1>

                <motion.p
                    className="construction-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    We're currently brewing something amazing! Our website is undergoing a highly anticipated upgrade to bring you an extraordinary new experience.
                </motion.p>

                <motion.div
                    className="progress-wrapper"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <div className="progress-container">
                        <motion.div
                            className="progress-bar"
                            initial={{ width: "0%" }}
                            animate={{ width: "65%" }}
                            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', textAlign: 'right' }}>
                        65% Complete
                    </p>
                </motion.div>

                <motion.div
                    className="social-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    {/* Twitter/X icon */}
                    <button className="social-btn" aria-label="Twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </button>
                    {/* GitHub icon */}
                    <button className="social-btn" aria-label="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </button>
                    {/* Mail icon */}
                    <button className="social-btn" aria-label="Email">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default UnderConstruction;
