import { useState, useEffect, useCallback } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PageHero from '../Component/PageHero';

/* ── All images grouped by category ── */
const CATEGORIES = [
  {
    label: 'All',
    images: [
      // Exterior & Nature
      { src: './Image/CoverPic1.jpg',              alt: 'Matha Buru — Resort panorama',        cat: 'Exterior' },
      { src: './Image/AboutUs.jpg',                alt: 'Resort grounds',                       cat: 'Exterior' },
      { src: './Image/pic1.jpg',                   alt: 'Hilltop view 1',                       cat: 'Exterior' },
      { src: './Image/pic2.jpg',                   alt: 'Hilltop view 2',                       cat: 'Exterior' },
      { src: './Image/pic3.jpg',                   alt: 'Hilltop view 3',                       cat: 'Exterior' },
      { src: './Image/pic4.jpg',                   alt: 'Hilltop view 4',                       cat: 'Exterior' },
      { src: './Image/pic5.jpg',                   alt: 'Scenic view 5',                        cat: 'Exterior' },
      { src: './Image/pic6.jpg',                   alt: 'Scenic view 6',                        cat: 'Exterior' },
      { src: './Image/pic7.jpg',                   alt: 'Scenic view 7',                        cat: 'Exterior' },
      { src: './Image/pic8.jpg',                   alt: 'Scenic view 8',                        cat: 'Exterior' },
      // Spotlight
      { src: './Image/spotlight/DSC_0606.jpg',     alt: 'Resort spotlight 1',                   cat: 'Exterior' },
      { src: './Image/spotlight/DSC_0608.jpg',     alt: 'Resort spotlight 2',                   cat: 'Exterior' },
      { src: './Image/spotlight/DSC_0615.jpg',     alt: 'Resort spotlight 3',                   cat: 'Exterior' },
      { src: './Image/spotlight/DSC_0632.jpg',     alt: 'Resort spotlight 4',                   cat: 'Exterior' },
      { src: './Image/spotlight/DSC_0695.jpg',     alt: 'Resort spotlight 5',                   cat: 'Exterior' },
      { src: './Image/spotlight/DSC_0700.jpg',     alt: 'Resort spotlight 6',                   cat: 'Exterior' },
      // AC Rooms
      { src: './Image/Ac/ac-and-non-ac.jpg',       alt: 'AC Cottage exterior',                  cat: 'Rooms' },
      { src: './Image/Ac/DSC_0615.jpg',            alt: 'AC Cottage interior 1',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0635.jpg',            alt: 'AC Cottage interior 2',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0657.jpg',            alt: 'AC Cottage interior 3',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0659.jpg',            alt: 'AC Cottage interior 4',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0660.jpg',            alt: 'AC Cottage interior 5',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0662.jpg',            alt: 'AC Cottage interior 6',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_0663.jpg',            alt: 'AC Cottage interior 7',                cat: 'Rooms' },
      { src: './Image/Ac/DSC_06662.jpg',           alt: 'AC Cottage interior 8',                cat: 'Rooms' },
      // Non-AC Rooms
      { src: './Image/non-ac/DSC_0639.jpg',        alt: 'Non-AC Cottage interior 1',            cat: 'Rooms' },
      { src: './Image/non-ac/DSC_0641.jpg',        alt: 'Non-AC Cottage interior 2',            cat: 'Rooms' },
      { src: './Image/non-ac/DSC_0643.jpg',        alt: 'Non-AC Cottage interior 3',            cat: 'Rooms' },
      { src: './Image/non-ac/DSC_0645.jpg',        alt: 'Non-AC Cottage interior 4',            cat: 'Rooms' },
      { src: './Image/non-ac/DSC_0648.jpg',        alt: 'Non-AC Cottage interior 5',            cat: 'Rooms' },
      { src: './Image/non-ac/DSC_06521.jpg',       alt: 'Non-AC Cottage interior 6',            cat: 'Rooms' },
      { src: './Image/non-ac/non-ac.jpg',          alt: 'Non-AC Cottage view',                  cat: 'Rooms' },
      // Single Bed
      { src: './Image/Single-Bed/DSC_0588.jpg',   alt: 'Single Bed Mat House 1',               cat: 'Rooms' },
      { src: './Image/Single-Bed/DSC_0667.jpg',   alt: 'Single Bed Mat House 2',               cat: 'Rooms' },
      { src: './Image/Single-Bed/DSC_0668.jpg',   alt: 'Single Bed Mat House 3',               cat: 'Rooms' },
      { src: './Image/Single-Bed/DSC_0672.jpg',   alt: 'Single Bed Mat House 4',               cat: 'Rooms' },
      { src: './Image/Single-Bed/DSC_0673.jpg',   alt: 'Single Bed Mat House 5',               cat: 'Rooms' },
      { src: './Image/Single-Bed/DSC_0675.jpg',   alt: 'Single Bed Mat House 6',               cat: 'Rooms' },
      { src: './Image/Single-Bed/delux.jpg',       alt: 'Single Bed Mat House deluxe',          cat: 'Rooms' },
      // Double Bed
      { src: './Image/Double-Bed-Room/DSC_0594.jpg', alt: 'Double Bed Mat House 1',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0598.jpg', alt: 'Double Bed Mat House 2',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0685.jpg', alt: 'Double Bed Mat House 3',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0686.jpg', alt: 'Double Bed Mat House 4',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0687.jpg', alt: 'Double Bed Mat House 5',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0688.jpg', alt: 'Double Bed Mat House 6',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0689.jpg', alt: 'Double Bed Mat House 7',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/DSC_0692.jpg', alt: 'Double Bed Mat House 8',            cat: 'Rooms' },
      { src: './Image/Double-Bed-Room/delux.jpg',    alt: 'Double Bed deluxe room',            cat: 'Rooms' },
      // Deluxe
      { src: './Image/delux.jpg',                  alt: 'Deluxe room',                          cat: 'Rooms' },
      { src: './Image/delux-single-bed.jpg',       alt: 'Deluxe single bed',                    cat: 'Rooms' },
      { src: './Image/spotlight/delux.jpg',        alt: 'Deluxe spotlight',                     cat: 'Rooms' },
      { src: './Image/spotlight/delux-single-bed.jpg', alt: 'Deluxe single spotlight',         cat: 'Rooms' },
      // Dining
      { src: './Image/food1.jpg',                  alt: 'Local cuisine — lunch spread',         cat: 'Dining' },
      { src: './Image/food2.jpg',                  alt: 'Breakfast platter',                    cat: 'Dining' },
      { src: './Image/food3.jpg',                  alt: 'Dinner at the resort',                 cat: 'Dining' },
      // Activities
      { src: './Image/bonfire.jpg',                alt: 'Evening bonfire',                      cat: 'Activities' },
      { src: './Image/parking.jpg',                alt: 'Car parking area',                     cat: 'Activities' },
      { src: './Image/roomservice.jpg',            alt: 'Room service',                         cat: 'Activities' },
      { src: './Image/tourguide.jpg',              alt: 'Tour guide experience',                cat: 'Activities' },
      { src: './Image/carService.jpg',             alt: 'Car service',                          cat: 'Activities' },
      // Culture
      { src: './Image/chownach.jpg',               alt: 'Chownach — Chhau dance',              cat: 'Culture' },
      { src: './Image/patanach.jpg',               alt: 'Pata Nach folk performance',          cat: 'Culture' },
      { src: './Image/santali.jpg',                alt: 'Santali tribal dance',                cat: 'Culture' },
      { src: './Image/boul.jpg',                   alt: 'Baul Sangeet music',                  cat: 'Culture' },
      // Footer / Misc
      { src: './Image/footer.jpg',                 alt: 'Resort landscape',                     cat: 'Exterior' },
      { src: './Image/footer1.jpg',                alt: 'Resort evening view',                  cat: 'Exterior' },
    ],
  },
];

const TABS = ['All', 'Exterior', 'Rooms', 'Dining', 'Activities', 'Culture'];

/* ── Lightbox Modal ── */
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Close lightbox"
      >
        <FiX size={28} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10
                   w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10"
        aria-label="Previous image"
      >
        <FiChevronLeft size={24} />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[80vh] object-contain"
          style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.6)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-ink/70 px-5 py-3">
          <p className="text-white/80 text-[14px] font-garamond">{img.alt}</p>
          <p className="text-white/40 text-[11px] uppercase tracking-widest mt-0.5">
            {index + 1} of {images.length}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10
                   w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10"
        aria-label="Next image"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
}

export default function GalleryPage() {
  const [tab, setTab]             = useState('All');
  const [lightboxIdx, setLightbox] = useState(null);

  const allImages = CATEGORIES[0].images;
  const filtered  = tab === 'All' ? allImages : allImages.filter(i => i.cat === tab);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() => setLightbox(i => (i === 0 ? filtered.length - 1 : i - 1)), [filtered.length]);
  const nextImg = useCallback(() => setLightbox(i => (i === filtered.length - 1 ? 0 : i + 1)), [filtered.length]);

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Photo Gallery"
        title="Gallery"
        subtitle="A visual journey through Matha Buru — rooms, culture, cuisine and nature."
        image="./Image/pic3.jpg"
      />

      {/* ── Filter tabs ── */}
      <section className="py-16 md:py-20 bg-paper">
        <div className="section-inner">
          {/* Tab bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-[12px] uppercase tracking-widest border transition-colors duration-150 ${
                  tab === t
                    ? 'bg-ink text-white border-ink'
                    : 'bg-transparent text-ink border-hairline hover:border-ink'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {t}
              </button>
            ))}
            <span className="ml-auto aurora-eyebrow text-muted self-center">
              {filtered.length} photos
            </span>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {filtered.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                onClick={() => openLightbox(idx)}
                className={`group overflow-hidden border border-hairline bg-paper/50 relative
                  ${idx % 7 === 0 ? 'col-span-2 row-span-2' : ''}
                `}
                aria-label={`View: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105
                    ${idx % 7 === 0 ? 'aspect-square' : 'aspect-[4/3]'}
                  `}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-[11px] uppercase tracking-widest">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
        />
      )}
    </main>
  );
}
