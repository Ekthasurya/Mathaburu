import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ROOMS = [
  {
    img: './Image/non-ac.jpg',
    name: 'AC Cottage',
    tag1: 'Hilltop view',
    tag2: 'Perfect for couples',
    slug: 'ac-cottage',
  },
  {
    img: './Image/ac-and-non-ac.jpg',
    name: 'Non-AC Cottage',
    tag1: 'Garden setting',
    tag2: 'Budget-friendly',
    slug: 'non-ac-cottage',
  },
  {
    img: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg',
    name: 'Single Bed Mat House',
    tag1: 'Traditional décor',
    tag2: 'Great for families',
    slug: 'single-mat-house',
  },
  {
    img: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg',
    name: 'Double Bed Mat House',
    tag1: 'Eco-authentic stay',
    tag2: 'Best views',
    slug: 'double-mat-house',
  },
];

export default function Rooms() {
  return (
    <section id="room" className="bg-paper py-20 md:py-28">
      <div className="section-inner">

        {/* ── Aurora-style two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left — text column */}
          <div className="lg:w-[320px] flex-shrink-0 lg:pt-4">
            <p className="aurora-eyebrow text-laterite mb-4">Our Rooms</p>
            <h2 className="font-garamond text-[2.4rem] md:text-[2.8rem] font-semibold text-ink leading-[1.1] mb-5">
              Designed for<br />Every Kind<br />of Stay
            </h2>
            <p className="text-muted text-[17px] leading-relaxed mb-8">
              From cosy eco-cottages to traditional mat houses, find the perfect space for relaxation, adventure or a peaceful weekend escape.
            </p>
            <a href="/roomDetails" className="aurora-btn-secondary inline-flex items-center gap-2">
              View All Rooms <FiArrowRight />
            </a>
          </div>

          {/* Right — horizontal card strip */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {ROOMS.map((room) => (
                <article
                  key={room.slug}
                  className="aurora-room-card group"
                >
                  {/* Image */}
                  <div className="overflow-hidden aspect-[4/3] bg-ink/10">
                    <img
                      src={room.img}
                      alt={room.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-garamond text-[1.05rem] font-semibold text-ink leading-snug mb-1">
                        {room.name}
                      </h3>
                      <p className="text-[12.5px] text-muted">
                        {room.tag1}&nbsp;&bull;&nbsp;{room.tag2}
                      </p>
                    </div>
                    <a
                      href="/roomDetails"
                      aria-label={`View details for ${room.name}`}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-hairline flex items-center justify-center
                                 text-muted hover:text-ink hover:border-ink transition-colors duration-150"
                    >
                      <FiArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}