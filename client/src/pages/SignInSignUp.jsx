import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const SignInSignUp = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // Send OTP when email is submitted
    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const res = await axios.post('http://localhost:5000/api/auth/send-otp', { email });
            if (res.data.success) {
                setMessage(res.data.message);
                setOtpSent(true);
            } else {
                setError(res.data.error);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Error sending OTP');
        }
        setLoading(false);
    };

    // Verify OTP when user submits it
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
            if (res.data.success) {
                setMessage(res.data.message);
                login(res.data.token); // Update context with the token and mark user as logged in
                navigate('/'); // Redirect to home
            } else {
                setError(res.data.error);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Error verifying OTP');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-100 flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In / Sign Up</h2>
                {message && <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{message}</div>}
                {error && <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">{error}</div>}
                {!otpSent ? (
                    <form onSubmit={handleSendOTP}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
                        >
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOTP}>
                        <div className="mb-4">
                            <label htmlFor="otp" className="block text-gray-700">Enter OTP</label>
                            <input
                                type="text"
                                name="otp"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors"
                        >
                            {loading ? 'Verifying OTP...' : 'Verify OTP'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignInSignUp;
