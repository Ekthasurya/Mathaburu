import PageHero from '../Component/PageHero';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ACTIVITIES = [
  {
    img:   './Image/bonfire.jpg',
    title: 'Evening Bonfire',
    desc:  'Gather around a crackling bonfire under a canopy of stars. Roast snacks, share stories, and enjoy the serenity of the Purulia night sky.',
    tag:   'Nightly',
  },
  {
    img:   './Image/tourguide.jpg',
    title: 'Guided Hill Treks',
    desc:  'Explore the stunning Matha Buru hill trails with experienced local guides who know every path, viewpoint and hidden gem in the region.',
    tag:   'On Request',
  },
  {
    img:   './Image/santali.jpg',
    title: 'Tribal Cultural Shows',
    desc:  'Watch live performances of Santali dance, Chhau Nritya and Baul Sangeet arranged specially for our guests on select evenings.',
    tag:   'Seasonal',
  },
  {
    img:   './Image/chownach.jpg',
    title: 'Chhau Dance Experience',
    desc:  'Witness the iconic Purulia Chhau dance — a UNESCO-recognised martial art form presented with elaborate masks and vibrant costumes.',
    tag:   'By Arrangement',
  },
  {
    img:   './Image/carService.jpg',
    title: 'Local Village Tours',
    desc:  'Our car service takes you on curated tours of nearby tribal villages, ancient temples, and scenic viewpoints around Purulia.',
    tag:   'On Request',
  },
  {
    img:   './Image/patanach.jpg',
    title: 'Pata Nach Folk Art',
    desc:  'Experience the mesmerising Pata Nach tradition — a unique combination of scroll painting, storytelling and folk dance.',
    tag:   'Seasonal',
  },
  {
    img:   './Image/boul.jpg',
    title: 'Baul Music Sessions',
    desc:  'Enjoy intimate Baul Sangeet performances — the mystical music of wandering minstrels that blends spirituality and folk tradition.',
    tag:   'By Arrangement',
  },
  {
    img:   './Image/pic4.jpg',
    title: 'Sunrise Viewpoints',
    desc:  'Wake up early and let our guides take you to the finest sunrise viewpoints across the Matha Buru hills — a truly breathtaking experience.',
    tag:   'Daily',
  },
  {
    img:   './Image/spotlight/DSC_0608.jpg',
    title: 'Children\'s Park',
    desc:  'A safe, open play area within the resort grounds — perfect for families with young children to enjoy while parents relax.',
    tag:   'Always Open',
  },
];

const STATS = [
  { value: '4+',    label: 'Acre Resort' },
  { value: '10+',   label: 'Activities' },
  { value: '24/7',  label: 'Guided Support' },
  { value: '100%',  label: 'Eco Friendly' },
];

export default function ActivitiesPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Things To Do"
        title="Activities"
        subtitle="From dawn treks to evening bonfires — every moment at Matha Buru is an experience."
        image="./Image/pic4.jpg"
      />

      {/* ── Stats strip ── */}
      <section className="bg-ink py-10">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {STATS.map(s => (
              <div key={s.label} className="text-center px-4">
                <p className="font-garamond text-[2.4rem] font-semibold text-white leading-none">{s.value}</p>
                <p className="aurora-eyebrow text-white/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities grid ── */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">Explore</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink mb-12">
            What Awaits You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map(act => (
              <article key={act.title} className="bg-white border border-hairline overflow-hidden group flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={act.img}
                    alt={act.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-ink/80 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-sm">
                    {act.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-garamond text-xl font-semibold text-ink mb-3">{act.title}</h3>
                  <p className="text-muted text-[16px] leading-relaxed flex-1">{act.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nature strip ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {['./Image/pic1.jpg','./Image/pic2.jpg','./Image/pic5.jpg','./Image/pic6.jpg'].map((src, i) => (
            <div key={i} className="relative overflow-hidden aspect-square group">
              <img src={src} alt={`Nature ${i+1}`} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Book CTA ── */}
      <section className="py-20 md:py-24 bg-paper border-t border-hairline">
        <div className="section-inner text-center max-w-xl mx-auto">
          <p className="aurora-eyebrow text-laterite mb-4">Ready to Explore?</p>
          <h2 className="font-garamond text-[2.2rem] font-semibold text-ink mb-5">
            Plan Your Perfect Stay
          </h2>
          <p className="text-muted text-[18px] leading-relaxed mb-8">
            Tell us which activities interest you most and we'll personalise your itinerary.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="aurora-btn-primary">
              Book Now <FiArrowRight className="inline ml-1" />
            </Link>
            <Link to="/contact" className="aurora-btn-secondary">
              Ask Us Anything
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
