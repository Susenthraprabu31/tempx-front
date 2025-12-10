import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';
import './Auth.css';

/**
 * Signup Page - Direct signup (OTP verification temporarily disabled)
 */
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Direct signup without OTP verification
            const response = await fetch('https://tempx-back.onrender.com/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Store token and user data
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));

                // Navigate to inbox
                navigate('/inbox');
            } else {
                setError(data.message || 'Failed to create account. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <motion.div
                className="auth-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="auth-card">
                    <motion.div
                        className="auth-header"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="gradient-text">Get Started</h1>
                        <p>Create your account to start using TempMailX</p>
                    </motion.div>

                    {error && (
                        <motion.div
                            className="auth-error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {error}
                        </motion.div>
                    )}

                    <motion.form
                        onSubmit={handleSubmit}
                        className="auth-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Input
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Input
                            type="password"
                            label="Password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                            loading={loading}
                        >
                            Create Account
                        </Button>
                    </motion.form>

                    <motion.div
                        className="auth-footer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Already have an account?{' '}
                        <Link to="/login" className="auth-link">
                            Login
                        </Link>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
};

export default Signup;
