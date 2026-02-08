import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/Button';
import Card from '../components/Card';
import LoginCharacter from '../components/LoginCharacter';
import ShinyText from '../components/ShinyText';
import './Auth.css';

/**
 * Interactive Login Page with Animated Character
 */
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [shake, setShake] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        setShake(false);

        const result = await login(email, password);

        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.error);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }

        setLoading(false);
    };

    return (
        <div className="auth-page">
            <motion.div
                className="auth-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Card className={`auth-card interactive-login ${shake ? 'shake' : ''}`}>
                    {/* Animated Character */}
                    <LoginCharacter isPasswordFocused={isPasswordFocused} />

                    <div className="auth-header">
                        <h1 className="gradient-text">
                            <ShinyText>Welcome Back</ShinyText>
                        </h1>
                        <p>Login to access your temporary emails</p>
                    </div>

                    {error && (
                        <motion.div
                            className="auth-error"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="auth-form" ref={formRef}>
                        {/* Email Input with Floating Label */}
                        <div className="floating-input-group">
                            <input
                                type="email"
                                id="email"
                                className="floating-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email" className="floating-label">
                                Email Address
                            </label>
                        </div>

                        {/* Password Input with Floating Label and Toggle */}
                        <div className="floating-input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="floating-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="password" className="floating-label">
                                Password
                            </label>
                            <button
                                type="button"
                                className="password-toggle-btn"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>

                        <div style={{ textAlign: 'right', marginTop: '-8px' }}>
                            <Link to="/forgot-password" className="auth-link" style={{ fontSize: '14px' }}>
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            loading={loading}
                        >
                            Login
                        </Button>
                    </form>

                    <div className="auth-footer">
                        Don't have an account?{' '}
                        <Link to="/signup" className="auth-link">
                            Sign up
                        </Link>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Login;
