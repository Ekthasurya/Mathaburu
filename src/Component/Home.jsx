import { useState } from 'react';
import { FiCalendar, FiUsers, FiHome, FiArrowRight, FiPlay } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to book a stay at Matha Buru Hill Eco Resort.')}`;

function buildWhatsAppMsg({ checkIn, checkOut, guests, rooms }) {
  return encodeURIComponent(
    `Hello! I'd like to book a stay at Matha Buru Hill Eco Resort.\n\nCheck-in: ${checkIn || 'TBD'}\nCheck-out: ${checkOut || 'TBD'}\nGuests: ${guests}\nRooms: ${rooms}`
  );
}

export default function Home() {
  const today      = new Date();
  const tomorrow   = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const fmtDate    = d => d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  const [checkIn,  setCheckIn]  = useState(today.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(tomorrow.toISOString().split('T')[0]);
  const [guests,   setGuests]   = useState('2 Adults, 0 Children');
  const [rooms,    setRooms]    = useState('1 Room');

  const handleCheck = (e) => {
    e.preventDefault();
    const msg = buildWhatsAppMsg({ checkIn, checkOut, guests, rooms });
    window.open(`https://wa.me/917384804148?text=${msg}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col"
      aria-label="Hero"
    >
      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('./Image/CoverPic1.jpg')" }}
        role="img"
        aria-label="Matha Buru Hill Eco Resort — Sonkupi, Purulia"
      />

      {/* ── Gradient overlay — darker at bottom, lighter mid ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/80" />

      {/* ── Hero content ── */}
      <div className="relative flex-1 flex flex-col justify-center section-inner pt-[72px] pb-32 md:pb-40">
        {/* Eyebrow */}
        <p className="aurora-eyebrow text-white/60 mb-5 tracking-[0.25em]">
          A Stay Beyond Ordinary
        </p>

        {/* Headline */}
        <h1 className="font-garamond text-white font-semibold leading-[1.05]
                        text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem]
                        max-w-[14ch] mb-4">
          Where Nature<br />Meets<br />Serenity
        </h1>

        {/* Sub-headline */}
        <p className="text-white/75 text-[1.05rem] sm:text-[1.15rem] max-w-[46ch] mb-10 leading-relaxed">
          Eco cottages, tribal culture and unforgettable experiences<br className="hidden md:block" />
          set in the heart of the Purulia hills.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center">
          <a href="/#room" className="aurora-btn-primary">
            Explore Rooms &nbsp;<FiArrowRight className="inline" />
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="aurora-btn-ghost flex items-center gap-2"
          >
            <FaWhatsapp size={17} />
            Book on WhatsApp
          </a>
        </div>

        {/* Watch video hint */}
        <button
          className="absolute right-8 bottom-36 md:right-16 md:bottom-44 hidden md:flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
          aria-label="Watch video"
        >
          <span className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center
                           group-hover:border-white group-hover:bg-white/10 transition-all duration-200">
            <FiPlay size={16} className="ml-0.5" />
          </span>
          <span className="text-[13px] uppercase tracking-widest">Watch Video</span>
        </button>
      </div>

      {/* ── Booking bar ── */}
      <div className="relative z-10 w-full">
        <form
          onSubmit={handleCheck}
          className="aurora-booking-bar"
          aria-label="Availability check"
        >
          {/* Check In */}
          <div className="aurora-booking-field">
            <label className="aurora-booking-label">
              <FiCalendar size={13} className="inline mr-1.5 opacity-60" />
              Check In
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              className="aurora-booking-input"
              aria-label="Check-in date"
            />
          </div>

          <div className="aurora-booking-divider" />

          {/* Check Out */}
          <div className="aurora-booking-field">
            <label className="aurora-booking-label">
              <FiCalendar size={13} className="inline mr-1.5 opacity-60" />
              Check Out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="aurora-booking-input"
              aria-label="Check-out date"
            />
          </div>

          <div className="aurora-booking-divider" />

          {/* Guests */}
          <div className="aurora-booking-field">
            <label className="aurora-booking-label">
              <FiUsers size={13} className="inline mr-1.5 opacity-60" />
              Guests
            </label>
            <select
              value={guests}
              onChange={e => setGuests(e.target.value)}
              className="aurora-booking-input"
              aria-label="Number of guests"
            >
              <option>1 Adult</option>
              <option>2 Adults, 0 Children</option>
              <option>2 Adults, 1 Child</option>
              <option>2 Adults, 2 Children</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
          </div>

          <div className="aurora-booking-divider" />

          {/* Rooms */}
          <div className="aurora-booking-field">
            <label className="aurora-booking-label">
              <FiHome size={13} className="inline mr-1.5 opacity-60" />
              Rooms
            </label>
            <select
              value={rooms}
              onChange={e => setRooms(e.target.value)}
              className="aurora-booking-input"
              aria-label="Number of rooms"
            >
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
              <option>4+ Rooms</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="aurora-availability-btn">
            Check Availability &nbsp;<FiArrowRight className="inline" />
          </button>
        </form>
      </div>
    </section>
  );
}