import { useState, useEffect, useRef } from 'react';
import './LoginCharacter.css';

/**
 * Animated Character Component for Login Form
 * Features eye tracking and hand covering animation
 * @param {Object} props
 * @param {boolean} props.isPasswordFocused - Whether password field is focused
 */
const LoginCharacter = ({ isPasswordFocused }) => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const characterRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!characterRef.current) return;

            const rect = characterRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance from center
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Limit eye movement range
            const maxMove = 8;
            const x = Math.max(-maxMove, Math.min(maxMove, deltaX / 15));
            const y = Math.max(-maxMove, Math.min(maxMove, deltaY / 15));

            setEyePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="login-character-container" ref={characterRef}>
            <svg
                className="login-character"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Head */}
                <defs>
                    <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#748ffc" />
                        <stop offset="100%" stopColor="#4f7cff" />
                    </linearGradient>
                </defs>
                <circle
                    cx="60"
                    cy="60"
                    r="45"
                    fill="url(#headGradient)"
                    className="character-head"
                />

                {/* Eyes */}
                <g className={`character-eyes ${isPasswordFocused ? 'covered' : ''}`}>
                    {/* Left Eye */}
                    <ellipse
                        cx="45"
                        cy="55"
                        rx="8"
                        ry="10"
                        fill="white"
                        className="eye-white"
                    />
                    <circle
                        cx={45 + eyePosition.x}
                        cy={55 + eyePosition.y}
                        r="4"
                        fill="#1e2447"
                        className="eye-pupil"
                    />

                    {/* Right Eye */}
                    <ellipse
                        cx="75"
                        cy="55"
                        rx="8"
                        ry="10"
                        fill="white"
                        className="eye-white"
                    />
                    <circle
                        cx={75 + eyePosition.x}
                        cy={55 + eyePosition.y}
                        r="4"
                        fill="#1e2447"
                        className="eye-pupil"
                    />
                </g>

                {/* Hands */}
                <g className={`character-hands ${isPasswordFocused ? 'covering' : ''}`}>
                    {/* Left Hand */}
                    <circle
                        cx="30"
                        cy="55"
                        r="12"
                        fill="#5c7cfa"
                        className="hand hand-left"
                    />
                    {/* Right Hand */}
                    <circle
                        cx="90"
                        cy="55"
                        r="12"
                        fill="#5c7cfa"
                        className="hand hand-right"
                    />
                </g>

                {/* Mouth */}
                <path
                    d="M 45 75 Q 60 80 75 75"
                    stroke="#1e2447"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="character-mouth"
                />
            </svg>
        </div>
    );
};

export default LoginCharacter;
