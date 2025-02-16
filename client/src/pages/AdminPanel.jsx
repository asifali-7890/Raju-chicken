import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiPackage, FiInfo, FiDollarSign, FiUpload, FiXCircle } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        weight: '',
        price: '',
        imageFile: null
    });
    const [previewImage, setPreviewImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, imageFile: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const clearForm = () => {
        setFormData({
            name: '',
            description: '',
            weight: '',
            price: '',
            imageFile: null
        });
        setPreviewImage('');
        setMessage('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) formDataToSend.append(key, value);
        });

        try {
            const res = await axios.post('/api/admin/products', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (res.data.success) {
                setMessage('Product created successfully!');
                clearForm();
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to create product');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Management</h1>
                    <p className="text-gray-600">Create new product entries for your inventory</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {message && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 flex items-center"
                        >
                            <FiInfo className="mr-2" />
                            {message}
                        </motion.div>
                    )}

                    {error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 flex items-center"
                        >
                            <FiInfo className="mr-2" />
                            {error}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 flex items-center">
                                    <FiPackage className="mr-2 text-gray-400" />
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Weight Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 flex items-center">
                                    <FiPackage className="mr-2 text-gray-400" />
                                    Weight
                                </label>
                                <input
                                    type="text"
                                    name="weight"
                                    className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 800g"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 flex items-center">
                                <FiInfo className="mr-2 text-gray-400" />
                                Description
                            </label>
                            <textarea
                                name="description"
                                rows="3"
                                className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Price Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 flex items-center">
                                    <FiDollarSign className="mr-2 text-gray-400" />
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    min="0"
                                    required
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 flex items-center">
                                    <FiUpload className="mr-2 text-gray-400" />
                                    Product Image
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex flex-col items-center px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                                        <FiUpload className="w-6 h-6 text-gray-400 mb-2" />
                                        <span className="text-sm text-gray-600">
                                            {formData.imageFile ? formData.imageFile.name : 'Choose file'}
                                        </span>
                                        <input
                                            type="file"
                                            name="image"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </label>
                                    {previewImage && (
                                        <div className="relative">
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="w-16 h-16 rounded-lg object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, imageFile: null }));
                                                    setPreviewImage('');
                                                }}
                                                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm hover:text-red-600"
                                            >
                                                <FiXCircle className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 pt-6">
                            <button
                                type="button"
                                onClick={clearForm}
                                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                            >
                                Clear Form
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center justify-center disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <ImSpinner8 className="animate-spin mr-2" />
                                        Creating...
                                    </>
                                ) : (
                                    'Create Product'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default AdminPanel;