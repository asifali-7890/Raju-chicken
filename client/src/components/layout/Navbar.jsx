// src/components/Navbar.js
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCartIcon,
    UserIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import rajuChicken from '../../assets/images/rajuChicken.png';
import { AuthContext } from '../../context/AuthContext.jsx';
import LogoutButton from '../../pages/LogoutButton';
import { CartContext } from '../../context/CartContext.jsx';


const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');
    const { cartItems } = useContext(CartContext);
    // const [cartItems] = useState(3);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - Left Side */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src={rajuChicken}
                                alt="Raju Chicken Logo"
                                className="h-12 w-auto"
                            />
                            <span className="ml-2 text-xl uppercase font-extrabold text-gray-800 hidden md:block tracking-wide">
                                Raju Chicken
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar - Middle */}
                    <div className="flex-1 max-w-2xl mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search chicken products..."
                                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Auth Section */}
                        {isLoggedIn ? (
                            <LogoutButton />
                        ) : (
                            <Link
                                to="/login"
                                className="group flex items-center p-2 text-gray-700 hover:text-orange-600 transition-colors"
                            >
                                <UserIcon className="h-6 w-6 text-gray-500" />
                                <span className="ml-2 hidden md:inline">Login</span>
                            </Link>
                        )}

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="group flex items-center p-2 text-gray-700 hover:text-orange-600 transition-colors"
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            {cartItems.length > 0 && (
                                <span className="ml-1 text-sm font-medium bg-orange-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartItems.length}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
