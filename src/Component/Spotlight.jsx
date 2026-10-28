import React, { useState } from 'react';

const images = [
  './Image/pic1.jpg',
  './Image/pic2.jpg',
  './Image/pic3.jpg',
  './Image/pic4.jpg',
  './Image/pic5.jpg',
  './Image/pic6.jpg',
  './Image/spotlight/delux.jpg',
  './Image/spotlight/delux-single-bed.jpg',
  './Image/spotlight/DSC_0606.jpg',
  './Image/spotlight/DSC_0608.jpg',
  './Image/spotlight/DSC_0615.jpg',
  './Image/spotlight/DSC_0632.jpg',
  './Image/spotlight/DSC_0695.jpg',
  './Image/spotlight/DSC_0700.jpg',
];

export default function Spotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(images.length).padStart(2, '0');

  return (
    <section id="spotlight" className="bg-white py-20 md:py-28">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <p className="eyebrow text-muted mb-2">Gallery</p>
            <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink">
              Spotlight
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted tracking-widest text-sm">
              {currentFormatted} / {totalFormatted}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                aria-label="Previous photo"
                className="w-10 h-10 border border-hairline flex items-center justify-center text-ink hover:bg-paper focus-visible:outline-2 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next photo"
                className="w-10 h-10 border border-hairline flex items-center justify-center text-ink hover:bg-paper focus-visible:outline-2 transition-colors"
                style={{ borderRadius: '2px' }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border border-hairline bg-paper overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Spotlight gallery photo ${currentFormatted}`}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full aspect-[3/2] md:aspect-[16/9] object-cover transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}