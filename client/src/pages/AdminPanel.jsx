import { useState } from 'react';
import axios from 'axios';
import { FiUploadCloud, FiX, FiCheckCircle } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        weight: '',
        price: '',
        image: null
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
            setFormData(prev => ({ ...prev, image: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const clearForm = () => {
        setFormData({
            name: '',
            description: '',
            weight: '',
            price: '',
            image: null
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
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Create New Product</h1>
                        <p className="text-gray-600 mt-2">Fill in the details below to add a new product</p>
                    </div>

                    {message && (
                        <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-center text-green-700">
                            <FiCheckCircle className="w-5 h-5 mr-2" />
                            {message}
                        </div>
                    )}

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-center text-red-700">
                            <FiX className="w-5 h-5 mr-2" />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Weight Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Weight
                                </label>
                                <input
                                    type="text"
                                    name="weight"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.weight}
                                    onChange={handleInputChange}
                                    placeholder="e.g. 800g"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                name="description"
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Price Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    min="0"
                                    required
                                />
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Product Image
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 transition-colors">
                                        <div className="text-center">
                                            <FiUploadCloud className="w-6 h-6 text-gray-400 mx-auto" />
                                            <span className="text-sm text-gray-600 mt-2">
                                                {formData.image ? formData.image.name : 'Click to upload'}
                                            </span>
                                        </div>
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
                                                className="w-16 h-16 rounded-lg object-cover border"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData(prev => ({ ...prev, image: null }));
                                                    setPreviewImage('');
                                                }}
                                                className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm hover:text-red-600"
                                            >
                                                <FiX className="w-5 h-5" />
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
        </div>
    );
};

export default AdminPanel;