import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const { clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();       // Remove token and update auth state
        clearCart();    // Clear the cart state
        navigate('/login'); // Redirect to login page (or home page if you prefer)
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
