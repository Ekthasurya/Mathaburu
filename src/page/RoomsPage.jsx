import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PageHero from '../Component/PageHero';

const ROOMS = [
  {
    img:    './Image/non-ac.jpg',
    name:   'AC Cottage',
    tag1:   'Hilltop view',
    tag2:   'Perfect for couples',
    price:  'Starting from ₹ 2,200',
    guests: '2 adults · 1 child (below 7)',
    anchor: '#room-ac',
  },
  {
    img:    './Image/ac-and-non-ac.jpg',
    name:   'Non-AC Cottage',
    tag1:   'Garden setting',
    tag2:   'Budget-friendly',
    price:  'Starting from ₹ 1,600',
    guests: '2 adults · 1 child (below 7)',
    anchor: '#room-non-ac',
  },
  {
    img:    'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg',
    name:   'Single Bed Mat House',
    tag1:   'Traditional décor',
    tag2:   'Great for families',
    price:  'Starting from ₹ 2,100',
    guests: '4 adults · 2 children (below 7)',
    anchor: '#room-single',
  },
  {
    img:    'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg',
    name:   'Double Bed Mat House',
    tag1:   'Eco-authentic',
    tag2:   'Best views',
    price:  'Starting from ₹ 1,400',
    guests: '2 adults · 1 child (below 7)',
    anchor: '#room-double',
  },
];

export default function RoomsPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Accommodation"
        title="Rooms & Cottages"
        subtitle="From cosy eco-cottages to traditional mat houses — every space is designed for comfort in nature."
        image="./Image/CoverPic1.jpg"
      />

      {/* ── Aurora-style intro + grid ── */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          {/* Two-column intro */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-16">
            <div className="lg:w-[300px] flex-shrink-0">
              <p className="aurora-eyebrow text-laterite mb-4">Our Rooms</p>
              <h2 className="font-garamond text-[2.4rem] font-semibold text-ink leading-[1.1] mb-5">
                Designed for<br />Every Kind<br />of Stay
              </h2>
              <p className="text-muted text-[17px] leading-relaxed">
                Find the perfect space for relaxation, adventure or a peaceful weekend escape in the Purulia hills.
              </p>
            </div>
            <div className="flex-1 border-l border-hairline pl-12 hidden lg:block">
              <p className="text-muted text-[17px] leading-relaxed max-w-[55ch]">
                All our accommodations blend local craftsmanship with modern comforts.
                Choose between air-conditioned cottages for extra comfort, or our beloved
                mat houses that give you an authentic tribal living experience.
              </p>
            </div>
          </div>

          {/* Room cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROOMS.map(room => (
              <article key={room.name} className="aurora-room-card group flex flex-col">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={room.img}
                    alt={room.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 gap-2">
                  <h3 className="font-garamond text-[1.1rem] font-semibold text-ink">{room.name}</h3>
                  <p className="text-[12.5px] text-muted">{room.tag1} &bull; {room.tag2}</p>
                  <p className="text-[13px] text-muted">{room.guests}</p>
                  <p className="text-laterite font-semibold font-garamond text-[1.05rem] mt-auto pt-3">
                    {room.price}
                  </p>
                  <Link
                    to={`/rooms/details${room.anchor}`}
                    className="aurora-btn-secondary mt-2 text-center text-[12px] py-2.5"
                    aria-label={`View details for ${room.name}`}
                  >
                    View Details <FiArrowRight className="inline ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Policies ── */}
      <section className="py-20 md:py-24 border-t border-hairline">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">Policies</p>
          <h2 className="font-garamond text-[2rem] font-semibold text-ink mb-10">Stay Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Check-in / Check-out', body: 'Check-in from 12:00 noon. Check-out by 11:00 AM. Early / late subject to availability.' },
              { title: 'Children & Pets',      body: 'Children below 7 years stay free. Pets are not permitted within resort premises.' },
              { title: 'Cancellation',         body: 'Free cancellation up to 48 hours before arrival. After that, one night charge applies.' },
            ].map(p => (
              <div key={p.title} className="bg-paper border border-hairline p-7">
                <h3 className="font-garamond text-lg font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-muted text-[17px] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
