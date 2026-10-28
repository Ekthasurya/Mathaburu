import { Link } from 'react-router-dom';
import { FaYoutube, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to chat with you.')}`;

const NAV_COLS = [
  {
    heading: 'Explore',
    links: [
      { to: '/',            label: 'Home' },
      { to: '/about',       label: 'About Us' },
      { to: '/rooms',       label: 'Rooms & Cottages' },
      { to: '/rooms/details', label: 'Room Details' },
      { to: '/dining',      label: 'Dining' },
    ],
  },
  {
    heading: 'Discover',
    links: [
      { to: '/experiences', label: 'Experiences' },
      { to: '/activities',  label: 'Activities' },
      { to: '/gallery',     label: 'Gallery' },
      { to: '/offers',      label: 'Offers & Amenities' },
      { to: '/contact',     label: 'Contact Us' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">

      {/* ── Pre-footer CTA strip ── */}
      <div className="border-b border-hairline/10">
        <div className="section-inner py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="aurora-eyebrow text-white/40 mb-2">Ready to Escape?</p>
            <h3 className="font-garamond text-[1.8rem] font-semibold text-white leading-snug">
              Book Your Perfect Stay Today
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/booking"
              className="inline-flex items-center gap-2 aurora-book-btn px-7 py-3.5">
              Book Now <FiArrowRight size={14} />
            </Link>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 aurora-btn-ghost px-6 py-3.5 text-[12.5px]">
              <FaWhatsapp size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="section-inner py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="./Image/logo.png" alt="Matha Buru logo" className="h-10 w-10 object-contain" />
              <div>
                <p className="text-white font-garamond text-[15px] font-semibold leading-none">Matha Buru</p>
                <p className="text-paper/40 text-[10px] uppercase tracking-[0.2em] mt-0.5">Hill Eco Resort</p>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed mb-5 max-w-[26ch]">
              A sanctuary in the Purulia hills — where nature, culture and hospitality meet.
            </p>
            {/* Image strip */}
            <div className="grid grid-cols-3 gap-1.5 mb-5">
              {['./Image/pic1.jpg','./Image/bonfire.jpg','./Image/food2.jpg'].map((src, i) => (
                <div key={i} className="overflow-hidden aspect-square">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Social */}
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://youtube.com/@mathaburuhillecoresort?si=--Q2kcJiLIRYGMFN', icon: <FaYoutube size={17} />, label: 'YouTube' },
                { href: 'https://www.facebook.com/share/T7P4FA7Lr7btkmrn/?mibextid=qi2Omg', icon: <FaFacebookSquare size={17} />, label: 'Facebook' },
                { href: WA_URL, icon: <FaWhatsapp size={17} />, label: 'WhatsApp' },
                { href: 'https://www.instagram.com/mathaburuhillecoresort?igsh=MTkwdmRyeDdjcGpyeQ==', icon: <RiInstagramFill size={17} />, label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  className="p-2 border border-hairline/20 text-paper/50 hover:text-white hover:border-white/30 transition-colors"
                  style={{ borderRadius: '2px' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(col => (
            <div key={col.heading}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-paper/40 font-semibold mb-5">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.to}>
                    <Link to={l.to}
                      className="text-[15px] text-paper/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-paper/40 font-semibold mb-5">Contact</p>
            <p className="text-[15px] leading-relaxed mb-4">
              FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia, West Bengal 723152
            </p>
            <a href="tel:7384804148" className="block text-[15px] text-paper/70 hover:text-white transition-colors">+91 7384804148</a>
            <a href="tel:7908586811" className="block text-[15px] text-paper/70 hover:text-white transition-colors mt-1">+91 7908586811</a>
            <a href="mailto:bikashchandramahato9@gmail.com"
              className="block text-[13.5px] text-paper/70 hover:text-white transition-colors mt-2 break-all">
              bikashchandramahato9@gmail.com
            </a>
            <div className="mt-5 border border-hairline/15 overflow-hidden" style={{ borderRadius: '2px' }}>
              <img src="./Image/footer1.jpg" alt="Resort view" loading="lazy"
                className="w-full aspect-[16/7] object-cover opacity-60 hover:opacity-80 transition-opacity" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline/10 py-5">
        <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-paper/35">
          <p>© {new Date().getFullYear()} Matha Buru Hill Eco Resort. All rights reserved.</p>
          <p>Design by PixelCrafters</p>
        </div>
      </div>
    </footer>
  );
}