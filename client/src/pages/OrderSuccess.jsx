const OrderSuccess = () => {
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-4xl font-bold text-green-800 mb-4">Order Placed Successfully!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for your order! We appreciate your business and are excited to prepare your items for shipment.
                </p>
                <p className="text-gray-600 mb-4">
                    You will receive an email confirmation shortly with the details of your order.
                </p>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Order Summary</h2>
                    <p className="text-gray-600">Order Number: <span className="font-bold">#123456</span></p>
                    <p className="text-gray-600">Estimated Delivery: <span className="font-bold">3-5 business days</span></p>
                </div>
                <div className="mt-8">
                    <a href="/" className="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition duration-300">
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;