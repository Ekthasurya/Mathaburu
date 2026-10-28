import './index.css';
import { Route, Routes } from 'react-router-dom';
import Navbar      from './Component/Navbar';
import Footer      from './Component/Footer';
import Whatapp     from './Component/Whatapp';

/* ── Pages ── */
import HomePage        from './page/HomePage';
import AboutPage       from './page/AboutPage';
import RoomsPage       from './page/RoomsPage';
import DiningPage      from './page/DiningPage';
import ExperiencesPage from './page/ExperiencesPage';
import ActivitiesPage  from './page/ActivitiesPage';
import GalleryPage     from './page/GalleryPage';
import OffersPage      from './page/OffersPage';
import ContactPage     from './page/ContactPage';
import BookingPage     from './page/BookingPage';
import RoomDetails     from './Component/RoomDetails';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 pt-[72px]">
      <p className="aurora-eyebrow text-laterite mb-4">404</p>
      <h1 className="font-garamond text-[3.5rem] font-semibold text-ink mb-4">Page Not Found</h1>
      <p className="text-muted text-[18px] mb-8 max-w-[38ch]">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="/" className="aurora-btn-primary">Return Home</a>
        <a href="/contact" className="aurora-btn-secondary">Contact Us</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/rooms"          element={<RoomsPage />} />
          <Route path="/rooms/details"  element={<RoomDetails />} />
          <Route path="/dining"         element={<DiningPage />} />
          <Route path="/experiences"    element={<ExperiencesPage />} />
          <Route path="/activities"     element={<ActivitiesPage />} />
          <Route path="/gallery"        element={<GalleryPage />} />
          <Route path="/offers"         element={<OffersPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="/booking"        element={<BookingPage />} />

          {/* Legacy redirects */}
          <Route path="/roomDetails"    element={<RoomDetails />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Whatapp />
      </div>
    </div>
  );
}

export default App;
