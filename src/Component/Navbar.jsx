import { useState, useEffect } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
  { to: '/',            label: 'Home',        end: true },
  { to: '/about',       label: 'About' },
  { to: '/rooms',       label: 'Rooms' },
  { to: '/dining',      label: 'Dining' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/activities',  label: 'Activities' },
  { to: '/gallery',     label: 'Gallery' },
  { to: '/offers',      label: 'Offers' },
  { to: '/contact',     label: 'Contact' },
];

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to book a stay at Matha Buru Hill Eco Resort.')}`;

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => { setIsOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const barBg = isHome
    ? scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    : 'bg-ink shadow-lg';

  return (
    <>
      {/* ── Fixed bar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${barBg}`}
        style={{ height: '72px' }}
        role="banner"
      >
        <div className="section-inner w-full h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" aria-label="Matha Buru home" className="flex items-center gap-3 flex-shrink-0">
            <img src="./Image/logo.png" alt="Matha Buru logo" className="h-10 w-10 object-contain" />
            <div className="hidden sm:block">
              <p className="text-white font-garamond text-[15px] font-semibold leading-none tracking-wider">Matha Buru</p>
              <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] leading-none mt-0.5">Hill Eco Resort</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5 flex-1 justify-center" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <NavLink
                key={l.to} to={l.to} end={l.end}
                className={({ isActive }) =>
                  `aurora-nav-link ${isActive ? 'text-white !border-white/60' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Book Now CTA */}
          <Link
            to="/booking"
            className="hidden xl:inline-flex items-center gap-2 aurora-book-btn flex-shrink-0"
          >
            Book Now
          </Link>

          {/* WhatsApp — medium screens */}
          <a href={WA_URL} target="_blank" rel="noreferrer"
            className="hidden lg:inline-flex xl:hidden items-center gap-2 aurora-book-btn flex-shrink-0">
            <FaWhatsapp size={15} /> Book
          </a>

          {/* Hamburger */}
          <button
            className="xl:hidden text-white p-1 ml-auto"
            onClick={() => setIsOpen(v => !v)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 bg-ink/98 backdrop-blur flex flex-col pt-[72px] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-modal="true" role="dialog" aria-label="Navigation menu"
      >
        <nav className="flex flex-col divide-y divide-white/10 mt-4 overflow-y-auto">
          {NAV_LINKS.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-8 py-4 text-base uppercase tracking-widest transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-8 pt-6 pb-8 flex flex-col gap-3">
          <Link to="/booking" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 aurora-book-btn w-full py-4 text-base">
            Book Now
          </Link>
          <a href={WA_URL} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 aurora-btn-ghost w-full py-4 text-base"
            onClick={() => setIsOpen(false)}>
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}