import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { EnvelopeIcon, LockClosedIcon, ArrowPathIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const SignInSignUp = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const res = await axios.post('/api/auth/send-otp', { email });
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

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        try {
            const res = await axios.post('/api/auth/verify-otp', { email, otp });
            if (res.data.success) {
                setMessage(res.data.message);
                login(res.data.token);
                navigate('/');
            } else {
                setError(res.data.error);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Error verifying OTP');
        }
        setLoading(false);
    };

    const handleResendOTP = async () => {
        setLoading(true);
        try {
            await axios.post('/api/auth/resend-otp', { email });
            setMessage('New OTP sent successfully!');
        } catch (err) {
            setError(err.response?.data?.error || 'Error resending OTP');
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
                {/* Illustration Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 hidden md:flex flex-col justify-center items-center text-white">
                    <img
                        src="/images/auth-illustration.svg"
                        alt="Secure Login"
                        className="w-64 h-64 mb-8"
                    />
                    <h3 className="text-2xl font-bold mb-4">Secure Access</h3>
                    <p className="text-center text-blue-100">
                        Your security is our priority. Experience seamless authentication with our
                        encrypted OTP verification system.
                    </p>
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            {otpSent ? 'Verify Identity' : 'Welcome Back'}
                        </h2>
                        <p className="text-gray-600">
                            {otpSent
                                ? 'Enter the 6-digit code sent to your email'
                                : 'Sign in or create an account to continue'}
                        </p>
                    </div>

                    {/* Messages */}
                    {message && (
                        <div className="flex items-center bg-green-100 p-3 rounded-lg mb-6 animate-fade-in">
                            <CheckCircleIcon className="h-6 w-6 text-green-600 mr-2" />
                            <span className="text-green-700">{message}</span>
                        </div>
                    )}
                    {error && (
                        <div className="flex items-center bg-red-100 p-3 rounded-lg mb-6 animate-fade-in">
                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mr-2" />
                            <span className="text-red-700">{error}</span>
                        </div>
                    )}

                    {!otpSent ? (
                        <form onSubmit={handleSendOTP} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                {loading ? (
                                    <>
                                        <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                                        Sending OTP...
                                    </>
                                ) : 'Continue with Email'}
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        {/* Google SVG icon */}
                                    </svg>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        {/* GitHub SVG icon */}
                                    </svg>
                                    GitHub
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOTP} className="space-y-6">
                            <div>
                                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                                    Verification Code
                                </label>
                                <div className="relative">
                                    <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="otp"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter 6-digit code"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                {loading ? (
                                    <>
                                        <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                                        Verifying...
                                    </>
                                ) : 'Verify Account'}
                            </button>

                            <div className="text-center text-sm text-gray-600">
                                Didn't receive code?{' '}
                                <button
                                    type="button"
                                    onClick={handleResendOTP}
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Resend OTP
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={() => setOtpSent(false)}
                                className="w-full text-gray-600 hover:text-blue-600 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to email entry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignInSignUp;