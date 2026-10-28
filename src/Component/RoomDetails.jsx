import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SiTicktick } from 'react-icons/si';
import PageHero from './PageHero';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to book a stay at Matha Buru Hill Eco Resort.')}`;

/* ─── image sets ─── */
const AC_IMAGES = [
  { src: './Image/Ac/ac-and-non-ac.jpg',  alt: 'AC Cottage — exterior view' },
  { src: './Image/Ac/DSC_0615.jpg',        alt: 'AC Cottage — view 2' },
  { src: './Image/Ac/DSC_0635.jpg',        alt: 'AC Cottage — view 3' },
  { src: './Image/Ac/DSC_0657.jpg',        alt: 'AC Cottage — view 4' },
  { src: './Image/Ac/DSC_0659.jpg',        alt: 'AC Cottage — view 5' },
  { src: './Image/Ac/DSC_0660.jpg',        alt: 'AC Cottage — view 6' },
  { src: './Image/Ac/DSC_0662.jpg',        alt: 'AC Cottage — view 7' },
  { src: './Image/Ac/DSC_0663.jpg',        alt: 'AC Cottage — view 8' },
  { src: './Image/Ac/DSC_06662.jpg',       alt: 'AC Cottage — view 9' },
  { src: './Image/Ac/non-ac.jpg',          alt: 'AC Cottage — view 10' },
];
const NON_AC_IMAGES = [
  { src: './Image/non-ac/ac-and-non-ac.jpg', alt: 'Non-AC Cottage — exterior' },
  { src: './Image/non-ac/DSC_0639.jpg',      alt: 'Non-AC Cottage — view 2' },
  { src: './Image/non-ac/DSC_0641.jpg',      alt: 'Non-AC Cottage — view 3' },
  { src: './Image/non-ac/DSC_0643.jpg',      alt: 'Non-AC Cottage — view 4' },
  { src: './Image/non-ac/DSC_0645.jpg',      alt: 'Non-AC Cottage — view 5' },
  { src: './Image/non-ac/DSC_0646.jpg',      alt: 'Non-AC Cottage — view 6' },
  { src: './Image/non-ac/DSC_0648.jpg',      alt: 'Non-AC Cottage — view 7' },
  { src: './Image/non-ac/DSC_0649.jpg',      alt: 'Non-AC Cottage — view 8' },
  { src: './Image/non-ac/DSC_06521.jpg',     alt: 'Non-AC Cottage — view 9' },
  { src: './Image/non-ac/non-ac.jpg',        alt: 'Non-AC Cottage — view 10' },
];
const SINGLE_BED_IMAGES = [
  { src: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg', alt: 'Single Bed Mat House — view 1' },
  { src: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg', alt: 'Single Bed Mat House — view 2' },
  { src: './Image/Single-Bed/DSC_0667.jpg', alt: 'Single Bed Mat House — view 3' },
  { src: './Image/Single-Bed/DSC_0668.jpg', alt: 'Single Bed Mat House — view 4' },
  { src: './Image/Single-Bed/DSC_0672.jpg', alt: 'Single Bed Mat House — view 5' },
  { src: './Image/Single-Bed/DSC_0673.jpg', alt: 'Single Bed Mat House — view 6' },
  { src: './Image/Single-Bed/DSC_0675.jpg', alt: 'Single Bed Mat House — view 7' },
];
const DOUBLE_BED_IMAGES = [
  { src: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720757/photo1_andt5j.jpg',  alt: 'Double Bed Mat House — view 1' },
  { src: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720782/photo2_wbqzgb.jpg',  alt: 'Double Bed Mat House — view 2' },
  { src: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720963/photo5_ftbakx.jpg',  alt: 'Double Bed Mat House — view 3' },
  { src: './Image/Double-Bed-Room/DSC_0685.jpg', alt: 'Double Bed Mat House — view 4' },
  { src: './Image/Double-Bed-Room/DSC_0686.jpg', alt: 'Double Bed Mat House — view 5' },
  { src: './Image/Double-Bed-Room/DSC_0687.jpg', alt: 'Double Bed Mat House — view 6' },
  { src: './Image/Double-Bed-Room/DSC_0688.jpg', alt: 'Double Bed Mat House — view 7' },
  { src: './Image/Double-Bed-Room/DSC_0689.jpg', alt: 'Double Bed Mat House — view 8' },
  { src: './Image/Double-Bed-Room/DSC_0692.jpg', alt: 'Double Bed Mat House — view 9' },
];

function RoomGallery({ images }) {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const PER_PAGE = 5;
  const total = images.length;
  const canPrev = offset > 0;
  const canNext = offset + PER_PAGE < total;

  return (
    <div className="flex flex-col gap-3">
      <div className="border border-hairline">
        <img src={images[active].src} alt={images[active].alt}
          loading="lazy" className="w-full aspect-[3/2] object-cover" />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setOffset(o => Math.max(0, o - PER_PAGE))} disabled={!canPrev}
          className="flex-none w-9 h-9 border border-hairline flex items-center justify-center
                     text-ink disabled:opacity-30 hover:bg-paper transition-colors" style={{ borderRadius: 0 }}>←</button>
        <div className="flex-1 grid gap-2" style={{ gridTemplateColumns: `repeat(${PER_PAGE}, 1fr)` }}>
          {images.slice(offset, offset + PER_PAGE).map((img, i) => {
            const idx = offset + i;
            return (
              <button key={img.src} onClick={() => setActive(idx)}
                aria-label={`View photo ${idx + 1}`}
                className={`border p-0 ${idx === active ? 'border-laterite' : 'border-hairline'}`}
                style={{ borderRadius: 0 }}>
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full aspect-square object-cover" />
              </button>
            );
          })}
        </div>
        <button onClick={() => setOffset(o => Math.min(o + PER_PAGE, total - PER_PAGE))} disabled={!canNext}
          className="flex-none w-9 h-9 border border-hairline flex items-center justify-center
                     text-ink disabled:opacity-30 hover:bg-paper transition-colors" style={{ borderRadius: 0 }}>→</button>
      </div>
      <p className="eyebrow text-muted text-right">
        {String(active + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}
      </p>
    </div>
  );
}

function Feat({ text }) {
  return (
    <li className="feature-item">
      <SiTicktick size={16} className="mt-1.5 shrink-0 text-sal" aria-hidden="true" />
      <span className="text-[17px]">{text}</span>
    </li>
  );
}

function RoomSection({ id, title, guests, price, images, features }) {
  return (
    <section id={id} className="py-16 md:py-24 border-b border-hairline last:border-0">
      <div className="section-inner">
        <p className="aurora-eyebrow text-laterite mb-3">Accommodation</p>
        <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-2">{title}</h2>
        <p className="eyebrow text-muted mb-10">{guests}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <RoomGallery images={images} />
          <div>
            <p className="text-2xl text-laterite font-semibold font-garamond mb-8">{price}</p>
            <h3 className="font-garamond text-xl font-semibold text-ink mb-4">Features</h3>
            <ul className="flex flex-col gap-3 mb-10">
              {features.map(f => <Feat key={f} text={f} />)}
            </ul>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book Now on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RoomDetails() {
  const { hash } = useLocation();

  /* Scroll to anchored room on load */
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Accommodation"
        title="Room Details"
        subtitle="Explore our full range of rooms — photos, features and prices."
        image="./Image/CoverPic1.jpg"
      />

      <RoomSection id="room-ac"     title="AC Cottage"           guests="2 adults · 1 child below 7"   price="Starting from ₹ 2,200" images={AC_IMAGES}       features={['Cozy queen-sized bed','Air conditioning','Beautiful hillside view','Private balcony with panoramic views','Free 24×7 Wi-Fi','Ensuite bathroom with complimentary toiletries','Perfect for solo travellers or couples.']} />
      <RoomSection id="room-non-ac" title="Non-AC Cottage"       guests="2 adults · 1 child below 7"   price="Starting from ₹ 1,600" images={NON_AC_IMAGES}   features={['Cozy queen-sized bed','Beautiful hillside view','Private balcony with panoramic views','Free 24×7 Wi-Fi','Ensuite bathroom with complimentary toiletries','Perfect for solo travellers or couples.']} />
      <RoomSection id="room-single" title="Single Bed Mat House" guests="4 adults · 2 children below 7" price="Starting from ₹ 2,100" images={SINGLE_BED_IMAGES} features={['King-sized bed with premium bedding','Beautiful hillside view','Private balcony with panoramic views','Free 24×7 Wi-Fi','Spacious bathroom with rain shower','Ensuite bathroom with complimentary toiletries','Ideal for couples or small families.']} />
      <RoomSection id="room-double" title="Double Bed Mat House" guests="2 adults · 1 child below 7"   price="Starting from ₹ 1,400" images={DOUBLE_BED_IMAGES} features={['King-sized bed or twin beds','Beautiful hillside view','Private balcony with panoramic views','Free 24×7 Wi-Fi','Spacious bathroom with rain shower','Ensuite bathroom with complimentary toiletries','Superior room with additional space and premium amenities.']} />
    </main>
  );
}