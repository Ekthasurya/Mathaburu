import { useState } from 'react';
import PageHero from '../Component/PageHero';

/* ── Spotlight gallery ── */
const GALLERY = [
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

/* ── Cultural traditions ── */
const CULTURES = [
  {
    img:   './Image/chownach.jpg',
    alt:   'Chownach — Purulia Chhau dance performers',
    title: 'Chownach',
    body:  'Purulia Chhau Nach is a vibrant and highly stylised form of the Chhau dance, originating from the Purulia district. Known for its elaborate masks, energetic martial movements and depictions of mythological stories from the Ramayana, Mahabharata and Puranas.',
  },
  {
    img:     './Image/patanach.jpg',
    alt:     'Pata Nach — performers with Patachitra scroll paintings',
    title:   'Pata Nach',
    body:    'Pata Nach is a traditional folk performance combining dance, painting and storytelling. Performers use Patachitra scroll paintings to narrate stories from mythology or local folklore.',
    reverse: true,
  },
  {
    img:   './Image/santali.jpg',
    alt:   'Santali dance — tribal community performers',
    title: 'Santali Dance',
    body:  'Santali dance is a vibrant folk tradition of the Santali tribal community, performed during festivals, harvests, weddings and other communal celebrations.',
  },
  {
    img:     './Image/boul.jpg',
    alt:     'Baul Sangeet — wandering minstrel with ektara',
    title:   'Baul Sangeet',
    body:    'Baul Sangeet is a mystical folk music tradition from Bengal. Bauls are wandering minstrels who use music to express spiritual experiences, blending Sufism, Vaishnavism and Tantric philosophies.',
    reverse: true,
  },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(i => (i === 0 ? GALLERY.length - 1 : i - 1));
  const next = () => setCurrent(i => (i === GALLERY.length - 1 ? 0 : i + 1));
  const fmt  = n => String(n).padStart(2, '0');

  return (
    <div>
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="aurora-eyebrow text-laterite mb-2">Gallery</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink">
            Spotlight
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="eyebrow text-muted text-sm">{fmt(current + 1)} / {fmt(GALLERY.length)}</span>
          <div className="flex gap-1">
            {[{fn: prev, label: '←'}, {fn: next, label: '→'}].map(({fn, label}) => (
              <button
                key={label}
                onClick={fn}
                aria-label={label === '←' ? 'Previous' : 'Next'}
                className="w-10 h-10 border border-hairline flex items-center justify-center
                           text-ink hover:bg-paper transition-colors"
                style={{ borderRadius: '2px' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-hairline overflow-hidden bg-paper">
        <img
          key={current}
          src={GALLERY[current]}
          alt={`Gallery photo ${fmt(current + 1)}`}
          loading="lazy"
          className="w-full aspect-[16/9] object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-7 gap-1.5 mt-2">
        {GALLERY.map((src, i) => (
          <button
            key={src}
            onClick={() => setCurrent(i)}
            aria-label={`View photo ${i + 1}`}
            className={`border-2 overflow-hidden aspect-square transition-colors ${
              i === current ? 'border-laterite' : 'border-transparent'
            }`}
          >
            <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExperiencesPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Immerse Yourself"
        title="Experiences"
        subtitle="Discover the living culture, art and natural beauty of Purulia — right at your doorstep."
        image="./Image/santali.jpg"
      />

      {/* ── Photo gallery ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-inner">
          <Gallery />
        </div>
      </section>

      {/* ── Cultural traditions ── */}
      <section className="py-20 md:py-28 bg-paper border-t border-hairline">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">Local Culture</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink mb-16">
            Cultural Traditions
          </h2>

          <div className="flex flex-col gap-0">
            {CULTURES.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 md:grid-cols-2 border border-hairline ${i > 0 ? 'border-t-0' : ''}`}
              >
                <div className={`${item.reverse ? 'md:order-2 md:border-l' : 'md:order-1 md:border-r'} border-b border-hairline md:border-b-0 border-hairline overflow-hidden`}>
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={`${item.reverse ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center p-8 md:p-10 lg:p-14`}>
                  <h3 className="font-garamond text-2xl md:text-3xl font-semibold text-ink mb-4">{item.title}</h3>
                  <p className="text-[18px] text-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
