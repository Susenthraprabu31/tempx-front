import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EmailProvider } from './context/EmailContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import SignupVerifyOTP from './pages/SignupVerifyOTP';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Inbox from './pages/Inbox';
import Outbox from './pages/Outbox';
import Compose from './pages/Compose';
import EmailReader from './pages/EmailReader';
import UnderConstruction from './pages/UnderConstruction';
import './styles/index.css';

const IS_UNDER_CONSTRUCTION = true;

/**
 * Main App Component
 * Handles routing and context providers
 */
function App() {
    if (IS_UNDER_CONSTRUCTION) {
        return <UnderConstruction />;
    }

    return (
        <AuthProvider>
            <EmailProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<Landing />} />
                        {/* <Route path="/login" element={<Login />} /> */}
                        {/* <Route path="/signup" element={<Signup />} /> */}
                        {/* <Route path="/signup/verify-otp" element={<SignupVerifyOTP />} /> */}
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/verify-otp" element={<VerifyOTP />} />
                        <Route path="/reset-password" element={<ResetPassword />} />

                        {/* App routes (public since login/signup disabled) */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/inbox" element={<Inbox />} />
                        <Route path="/outbox" element={<Outbox />} />
                        <Route path="/compose" element={<Compose />} />
                        <Route path="/email/:id" element={<EmailReader />} />

                        {/* Catch all - redirect to home */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <Footer />
                </Router>
            </EmailProvider>
        </AuthProvider>
    );
}

export default App;
