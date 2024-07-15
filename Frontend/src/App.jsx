import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary'; 

// Lazy loading de páginas
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Shop = lazy(() => import('./pages/Shop'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ShoppingCart = lazy(() => import('./pages/ShoppingCart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage'));
const OrderDetailsPage = lazy(() => import('./pages/OrderDetailsPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
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
            <Route path="/OrderHistoryPage" element={<OrderHistoryPage />} />
            <Route path="/orderdetails/:id" element={<OrderDetailsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
