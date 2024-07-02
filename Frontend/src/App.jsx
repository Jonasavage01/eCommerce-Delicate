import './assets/css/App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation'
import ThankYouPage from './pages/ThankYouPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
        <Route path="/UserPage" element={<UserPage />} />

      </Routes>
    </Router>
  );
}

export default App;
