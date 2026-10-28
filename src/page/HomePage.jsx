import { useState } from 'react';
import { FiCalendar, FiUsers, FiHome, FiArrowRight, FiStar } from 'react-icons/fi';
import { FaWhatsapp, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to book a stay at Matha Buru Hill Eco Resort.')}`;

function buildMsg({ checkIn, checkOut, guests, rooms }) {
  return encodeURIComponent(`Hello! I'd like to book.\nCheck-in: ${checkIn || 'TBD'}\nCheck-out: ${checkOut || 'TBD'}\nGuests: ${guests}\nRooms: ${rooms}`);
}

const QUICK_LINKS = [
  { label: 'Rooms',       sub: 'Cottages & Mat Houses', to: '/rooms',       img: './Image/Ac/DSC_0635.jpg' },
  { label: 'Dining',      sub: 'Fresh local cuisine',   to: '/dining',      img: './Image/food1.jpg' },
  { label: 'Experiences', sub: 'Culture & gallery',     to: '/experiences', img: './Image/chownach.jpg' },
  { label: 'Activities',  sub: 'Treks & bonfires',      to: '/activities',  img: './Image/bonfire.jpg' },
];

const ROOMS_PREVIEW = [
  { img: './Image/Ac/DSC_0615.jpg',              name: 'AC Cottage',           price: '₹2,200', tag: 'Most Popular', to: '/rooms/details#room-ac' },
  { img: './Image/non-ac/DSC_0639.jpg',          name: 'Non-AC Cottage',       price: '₹1,600', tag: 'Best Value',   to: '/rooms/details#room-non-ac' },
  { img: './Image/Single-Bed/DSC_0672.jpg',      name: 'Single Bed Mat House', price: '₹2,100', tag: 'For Families', to: '/rooms/details#room-single' },
];

const DINING_IMGS = [
  { src: './Image/food2.jpg', label: 'Breakfast' },
  { src: './Image/food1.jpg', label: 'Lunch' },
  { src: './Image/food3.jpg', label: 'Dinner' },
];

const TESTIMONIALS = [
  {
    name:    'Rina Sharma',
    location: 'Kolkata',
    rating:   5,
    text:    'Absolutely magical place! The hilltop view from our cottage at sunrise was something I will never forget. The bonfire evening was pure joy — highly recommend Matha Buru!',
    img:     './Image/pic2.jpg',
  },
  {
    name:    'Arjun Mahato',
    location: 'Dhanbad',
    rating:   5,
    text:    'The food was exceptional — fresh, homely and delicious. The Santali dance performance was a truly authentic cultural experience. Will visit again with family.',
    img:     './Image/pic5.jpg',
  },
  {
    name:    'Priya & Rohan',
    location: 'Mumbai',
    rating:   5,
    text:    'Came for our anniversary and it was perfect. The staff arranged bonfire and Baul music for us. The AC cottage was clean, comfortable and the views were stunning!',
    img:     './Image/pic6.jpg',
  },
];

const CULTURE_PREVIEW = [
  { img: './Image/chownach.jpg', title: 'Chownach',     sub: 'Purulia Chhau Dance' },
  { img: './Image/santali.jpg',  title: 'Santali Dance', sub: 'Tribal Folk Art' },
  { img: './Image/boul.jpg',     title: 'Baul Sangeet', sub: 'Mystical Folk Music' },
  { img: './Image/patanach.jpg', title: 'Pata Nach',    sub: 'Scroll Storytelling' },
];

const OFFERS_PREVIEW = [
  { img: './Image/bonfire.jpg',              label: 'Evening Bonfire' },
  { img: './Image/tourguide.jpg',            label: 'Guided Trek' },
  { img: './Image/roomservice.jpg',          label: '24×7 Room Service' },
  { img: './Image/spotlight/DSC_0608.jpg',   label: 'Children\'s Park' },
  { img: './Image/carService.jpg',           label: 'Car Service' },
  { img: './Image/parking.jpg',              label: 'Free Parking' },
];

const STATS = [
  { value: '500+', label: 'Happy Guests' },
  { value: '4',    label: 'Room Types' },
  { value: '10+',  label: 'Activities' },
  { value: '24/7', label: 'Support' },
];

export default function HomePage() {
  const today    = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
  const [checkIn,  setCheckIn]  = useState(today.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(tomorrow.toISOString().split('T')[0]);
  const [guests,   setGuests]   = useState('2 Adults, 0 Children');
  const [rooms,    setRooms]    = useState('1 Room');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleCheck = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/917384804148?text=${buildMsg({ checkIn, checkOut, guests, rooms })}`, '_blank');
  };

  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section id="home" className="relative w-full min-h-screen flex flex-col" aria-label="Hero">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('./Image/CoverPic1.jpg')" }}
          role="img" aria-label="Matha Buru Hill Eco Resort" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink/85" />

        <div className="relative flex-1 flex flex-col justify-center section-inner pt-[72px] pb-40 md:pb-52">
          <p className="aurora-eyebrow text-white/60 mb-5 tracking-[0.28em]">Sonkupi · Purulia · West Bengal</p>
          <h1 className="font-garamond text-white font-semibold leading-[1.02]
                          text-[2.8rem] sm:text-[3.8rem] md:text-[5.2rem] lg:text-[6.5rem]
                          max-w-[13ch] mb-5">
            Where Nature<br />Meets<br />Serenity
          </h1>
          <p className="text-white/75 text-[1.05rem] sm:text-[1.2rem] max-w-[46ch] mb-10 leading-relaxed">
            Eco cottages, tribal culture and unforgettable experiences<br className="hidden md:block" />
            set in the heart of the Purulia hills.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/booking" className="aurora-btn-primary">
              Book Your Stay &nbsp;<FiArrowRight className="inline" />
            </Link>
            <Link to="/rooms" className="aurora-btn-ghost">
              Explore Rooms
            </Link>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              className="aurora-btn-ghost flex items-center gap-2">
              <FaWhatsapp size={17} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Booking bar */}
        <div className="relative z-10 w-full">
          <form onSubmit={handleCheck} className="aurora-booking-bar">
            <div className="aurora-booking-field">
              <label className="aurora-booking-label"><FiCalendar size={12} className="inline mr-1.5 opacity-60" />Check In</label>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="aurora-booking-input" />
            </div>
            <div className="aurora-booking-divider" />
            <div className="aurora-booking-field">
              <label className="aurora-booking-label"><FiCalendar size={12} className="inline mr-1.5 opacity-60" />Check Out</label>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="aurora-booking-input" />
            </div>
            <div className="aurora-booking-divider" />
            <div className="aurora-booking-field">
              <label className="aurora-booking-label"><FiUsers size={12} className="inline mr-1.5 opacity-60" />Guests</label>
              <select value={guests} onChange={e => setGuests(e.target.value)} className="aurora-booking-input">
                <option>1 Adult</option><option>2 Adults, 0 Children</option>
                <option>2 Adults, 1 Child</option><option>2 Adults, 2 Children</option>
                <option>3 Adults</option><option>4 Adults</option>
              </select>
            </div>
            <div className="aurora-booking-divider" />
            <div className="aurora-booking-field">
              <label className="aurora-booking-label"><FiHome size={12} className="inline mr-1.5 opacity-60" />Rooms</label>
              <select value={rooms} onChange={e => setRooms(e.target.value)} className="aurora-booking-input">
                <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option><option>4+ Rooms</option>
              </select>
            </div>
            <button type="submit" className="aurora-availability-btn">
              Check Availability &nbsp;<FiArrowRight className="inline" />
            </button>
          </form>
        </div>
      </section>

      {/* ─────────────────── STATS ─────────────────── */}
      <section className="bg-ink py-12">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map(s => (
              <div key={s.label} className="text-center py-4 md:py-0">
                <p className="font-garamond text-[2.6rem] font-semibold text-white leading-none">{s.value}</p>
                <p className="aurora-eyebrow text-white/40 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── QUICK NAV ─────────────────── */}
      <section className="bg-paper py-20 md:py-24">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-3">Discover</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-tight">
              Everything We Offer
            </h2>
            <Link to="/gallery" className="aurora-btn-secondary inline-flex items-center gap-2 flex-shrink-0">
              View Gallery <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {QUICK_LINKS.map(item => (
              <Link key={item.to} to={item.to}
                className="group relative overflow-hidden block" style={{ aspectRatio: '3/4' }}>
                <img src={item.img} alt={item.label} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-107" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-garamond font-semibold text-[1.15rem]">{item.label}</p>
                  <p className="text-white/55 text-[11px] uppercase tracking-widest mt-1">{item.sub}</p>
                  <span className="text-white/50 text-[11px] flex items-center gap-1 mt-2 uppercase tracking-widest">
                    Explore <FiArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── ROOMS ─────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-hairline">
        <div className="section-inner">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="lg:w-[280px] flex-shrink-0 lg:pt-4">
              <p className="aurora-eyebrow text-laterite mb-4">Accommodation</p>
              <h2 className="font-garamond text-[2.4rem] font-semibold text-ink leading-[1.1] mb-5">
                Designed for<br />Every Kind<br />of Stay
              </h2>
              <p className="text-muted text-[17px] leading-relaxed mb-8">
                From air-conditioned cottages to authentic mat houses — comfort meets nature at every room type.
              </p>
              <Link to="/rooms" className="aurora-btn-secondary inline-flex items-center gap-2">
                View All Rooms <FiArrowRight />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {ROOMS_PREVIEW.map(room => (
                <article key={room.name} className="aurora-room-card group flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={room.img} alt={room.name} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-ink/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                      {room.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-garamond text-[1.05rem] font-semibold text-ink">{room.name}</h3>
                    <p className="text-laterite font-semibold font-garamond text-[1rem] mt-auto pt-3">{room.price}/night</p>
                    <Link to={room.to} className="aurora-btn-secondary mt-3 text-center text-[11.5px] py-2.5">
                      View Details <FiArrowRight className="inline ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── ABOUT TEASER ─────────────────── */}
      <section className="py-20 md:py-28 bg-paper border-t border-hairline">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="overflow-hidden aspect-[3/4] border border-hairline">
                <img src="./Image/AboutUs.jpg" alt="Resort grounds" loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col gap-3 pt-8">
                <div className="overflow-hidden aspect-square border border-hairline">
                  <img src="./Image/pic7.jpg" alt="Hilltop" loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="overflow-hidden aspect-square border border-hairline">
                  <img src="./Image/pic8.jpg" alt="Nature" loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
            <div>
              <p className="aurora-eyebrow text-laterite mb-4">Our Story</p>
              <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-snug mb-6">
                A Sanctuary in<br />the Purulia Hills
              </h2>
              <p className="text-[18px] text-muted leading-relaxed mb-5">
                Matha Buru Hill Eco Resort sits atop the serene hills of Purulia, West Bengal — 
                a haven of tribal culture, fresh air and eco-conscious hospitality.
              </p>
              <p className="text-[18px] text-muted leading-relaxed mb-8">
                Every detail, from the mat house architecture to the locally sourced meals, 
                is designed to connect you to the land and its people.
              </p>
              <Link to="/about" className="aurora-btn-secondary inline-flex items-center gap-2">
                Our Full Story <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── DINING ─────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-hairline">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
            <div>
              <p className="aurora-eyebrow text-laterite mb-3">Fresh & Local</p>
              <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink">Dining</h2>
            </div>
            <Link to="/dining" className="aurora-btn-secondary inline-flex items-center gap-2 flex-shrink-0">
              Full Menu <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DINING_IMGS.map(d => (
              <Link key={d.label} to="/dining"
                className="group border border-hairline overflow-hidden block">
                <div className="overflow-hidden border-b border-hairline">
                  <img src={d.src} alt={d.label} loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <p className="font-garamond text-xl font-medium text-ink">{d.label}</p>
                  <FiArrowRight size={16} className="text-muted group-hover:text-ink transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CULTURE STRIP ─────────────────── */}
      <section className="py-20 md:py-28 bg-paper border-t border-hairline">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
            <div>
              <p className="aurora-eyebrow text-laterite mb-3">Local Culture</p>
              <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink">Cultural Experiences</h2>
            </div>
            <Link to="/experiences" className="aurora-btn-secondary inline-flex items-center gap-2 flex-shrink-0">
              All Experiences <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CULTURE_PREVIEW.map(c => (
              <Link key={c.title} to="/experiences"
                className="group relative overflow-hidden block aspect-[3/4]">
                <img src={c.img} alt={c.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-garamond font-semibold text-[1.05rem]">{c.title}</p>
                  <p className="text-white/55 text-[11px] uppercase tracking-widest mt-0.5">{c.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── AMENITIES ─────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-hairline">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
            <div>
              <p className="aurora-eyebrow text-laterite mb-3">What We Provide</p>
              <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink">Amenities</h2>
            </div>
            <Link to="/offers" className="aurora-btn-secondary inline-flex items-center gap-2 flex-shrink-0">
              All Offerings <FiArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {OFFERS_PREVIEW.map(o => (
              <div key={o.label} className="group overflow-hidden border border-hairline">
                <div className="overflow-hidden border-b border-hairline">
                  <img src={o.img} alt={o.label} loading="lazy"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-108" />
                </div>
                <div className="p-2.5 text-center">
                  <p className="text-[12px] font-medium text-ink leading-tight">{o.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── TESTIMONIALS ─────────────────── */}
      <section className="py-20 md:py-28 bg-ink border-t border-hairline/10">
        <div className="section-inner">
          <p className="aurora-eyebrow text-white/40 mb-4">Guest Reviews</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-white mb-12">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className={`border p-7 flex flex-col gap-5 cursor-pointer transition-all duration-200 ${
                  i === activeTestimonial
                    ? 'border-laterite bg-white/5'
                    : 'border-white/10 hover:border-white/25'
                }`}
                onClick={() => setActiveTestimonial(i)}
              >
                <FaQuoteLeft size={20} className="text-laterite/60" />
                <p className="text-white/80 text-[17px] leading-relaxed flex-1 font-garamond italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-10 h-10 overflow-hidden border border-white/20">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold">{t.name}</p>
                    <p className="text-white/40 text-[12px]">{t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <FiStar key={s} size={12} className="text-gold fill-current" style={{ fill: '#b8923a' }} />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── PHOTO BANNER ─────────────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {['./Image/footer.jpg','./Image/footer1.jpg','./Image/pic3.jpg','./Image/spotlight/DSC_0632.jpg'].map((src, i) => (
          <div key={i} className="relative overflow-hidden group aspect-[4/3]">
            <img src={src} alt={`Gallery ${i+1}`} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors" />
          </div>
        ))}
      </section>

      {/* ─────────────────── FINAL CTA ─────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('./Image/spotlight/DSC_0700.jpg')" }} />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative section-inner text-center">
          <p className="aurora-eyebrow text-white/60 mb-4">Reserve Your Escape</p>
          <h2 className="font-garamond text-[2.4rem] md:text-[3.5rem] font-semibold text-white leading-tight mb-5">
            Your Perfect Hill Retreat<br />Awaits
          </h2>
          <p className="text-white/70 text-[1.1rem] max-w-[44ch] mx-auto mb-10 leading-relaxed">
            Book directly with us for the best rates, instant confirmation and a personalised experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="aurora-book-btn text-[13px] px-8 py-4">
              Book Now <FiArrowRight className="inline ml-1" />
            </Link>
            <Link to="/gallery" className="aurora-btn-ghost">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}