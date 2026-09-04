import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';

// Pages critiques — chargées immédiatement
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

// Pages secondaires — chargées à la demande
const AboutPage           = lazy(() => import('./pages/AboutPage'));
const ContactPage         = lazy(() => import('./pages/ContactPage'));
const TrackingPage        = lazy(() => import('./pages/TrackingPage'));
const WishlistPage        = lazy(() => import('./pages/WishlistPage'));
const AdminPage           = lazy(() => import('./pages/AdminPage'));
const FAQPage             = lazy(() => import('./pages/FAQPage'));
const MentionsLegalesPage = lazy(() => import('./pages/MentionsLegalesPage'));
const ConfidentialitePage = lazy(() => import('./pages/ConfidentialitePage'));
const CGVPage             = lazy(() => import('./pages/CGVPage'));
const RetractationPage    = lazy(() => import('./pages/RetractationPage'));
const CookiesPage         = lazy(() => import('./pages/CookiesPage'));
const RetoursPage         = lazy(() => import('./pages/RetoursPage'));
const LivraisonPage       = lazy(() => import('./pages/LivraisonPage'));
const PaiementPage        = lazy(() => import('./pages/PaiementPage'));
const GarantiePage        = lazy(() => import('./pages/GarantiePage'));
const NotFoundPage        = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return <div style={{ minHeight: '60vh' }} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <CartDrawer />
            <div style={{ flex: 1 }}>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/product/:slug" element={<ProductPage />} />
                  <Route path="/uber-uns" element={<AboutPage />} />
                  <Route path="/kontakt" element={<ContactPage />} />
                  <Route path="/auftragsverfolgung" element={<TrackingPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/confirmation" element={<OrderConfirmationPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  {/* Pages légales — URLs en allemand */}
                  <Route path="/impressum" element={<MentionsLegalesPage />} />
                  <Route path="/datenschutz" element={<ConfidentialitePage />} />
                  <Route path="/agb" element={<CGVPage />} />
                  <Route path="/widerrufsbelehrung" element={<RetractationPage />} />
                  <Route path="/cookie-richtlinie" element={<CookiesPage />} />
                  <Route path="/rueckgabe" element={<RetoursPage />} />
                  <Route path="/lieferung" element={<LivraisonPage />} />
                  <Route path="/zahlung" element={<PaiementPage />} />
                  <Route path="/garantie" element={<GarantiePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </div>
            <Footer />
          </div>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
