import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/Home';
// import ProductsPage from './pages/Products';
import CartPage from './pages/CartPage';
import SignInSignUp from './pages/SignInSignUp';
import ProtectedRoute from './components/ProtectedRoute';
import ProductList from './pages/ProductList';
import AdminPanel from './pages/AdminPanel';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';


// Import the 15 common pages
import AboutUs from './components/common/AboutUs';
import Vision from './components/common/Vision';
import Mission from './components/common/Mission';
import Careers from './components/common/Careers';
import ContactUs from './components/common/ContactUs';
import FAQ from './components/common/FAQ';
import ServiceAndSupport from './components/common/ServiceAndSupport';
import Shipping from './components/common/Shipping';
import PrivacyPolicy from './components/common/Policy.jsx';
import TermsOfService from './components/common/TermsOfService';
import CookiePolicy from './components/common/CPolicy.jsx';
import Blog from './components/common/Blog';
import Recipes from './components/common/Recipes';
import QualityStandards from './components/common/QualityStandards';
import Sustainability from './components/common/Sustainability';
import ScrollToTop from './pages/ScrollToTop.jsx';

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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccess />} />


            {/* Add other routes here */}
            {/* Common Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/service-support" element={<ServiceAndSupport />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/cpolicy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/quality-standards" element={<QualityStandards />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </main>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
