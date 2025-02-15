import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);

    if (!cartItems.length) {
        return <div className="p-4">Your cart is empty.</div>;
    }

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">My Cart</h1>
            {cartItems.map((item) => (
                <div key={item.product._id} className="border-none bg-slate-200 shadow-md p-4 rounded mb-4 flex gap-4">
                    <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-44 h-44 object-cover rounded"
                    />
                    <div className="flex-1">
                        <h2 className="font-semibold text-lg">{item.product.name}</h2>
                        <p className="text-gray-600">{item.product.description}</p>
                        <p className="text-gray-700">Weight: {item.product.weight}</p>
                        <p className="text-orange-600 font-bold">₹{item.product.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => decrementQuantity(item.product._id)}
                            className="bg-gray-200 cursor-pointer w-8 h-8 rounded text-xl flex items-center justify-center hover:bg-gray-300"
                        >
                            –
                        </button>
                        <span className="text-lg font-medium">{item.quantity}</span>
                        <button
                            onClick={() => incrementQuantity(item.product._id)}
                            className="bg-gray-200 cursor-pointer w-8 h-8 rounded text-xl flex items-center justify-center hover:bg-gray-300"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
            <div className="text-right mt-4">
                <span className="text-lg font-semibold">Total: ₹{totalPrice}</span>
            </div>
        </div>
    );
};

export default CartPage;
