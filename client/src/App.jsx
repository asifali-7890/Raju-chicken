import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
// import ProductsPage from './pages/Products';
import CartPage from './pages/CartPage';
import AboutUsPage from './pages/AboutUs';
import SignInSignUp from './pages/SignInSignUp';
import ProtectedRoute from './components/ProtectedRoute';
import ProductList from './pages/ProductList';
import AdminPanel from './pages/AdminPanel';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<SignInSignUp />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
