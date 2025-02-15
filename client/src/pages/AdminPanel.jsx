import { useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Use FormData to send file + text fields
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('weight', weight);
        formData.append('price', price);
        formData.append('image', imageFile); // field name must match upload.single('image')
        // Log each key-value pair in the form data
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }

        try {
            const res = await axios.post('http://localhost:5000/api/admin/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (res.data.success) {
                setMessage('Product created successfully!');
                // Clear fields
                setName('');
                setDescription('');
                setWeight('');
                setPrice('');
                setImageFile(null);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Failed to create product');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Panel - Create Product</h2>
            {message && <div className="bg-green-100 text-green-700 p-2 mb-2">{message}</div>}
            {error && <div className="bg-red-100 text-red-700 p-2 mb-2">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        className="border p-2 w-full"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Weight</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="e.g. '800g'"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Price (₹)</label>
                    <input
                        type="number"
                        className="border p-2 w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="0"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input
                        type="file"
                        name="image"            // <-- Added this line
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default AdminPanel;
