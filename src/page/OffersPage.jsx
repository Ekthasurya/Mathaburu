import PageHero from '../Component/PageHero';

const offerings = [
  { img: './Image/spotlight/DSC_0608.jpg',                                                      label: 'Mini Children\'s Park', desc: 'A safe play area for the little ones within resort grounds.' },
  { img: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720824/photo4_qdsaql.jpg',    label: 'Free Driver\'s Room',   desc: 'Complimentary accommodation for your driver during your stay.' },
  { img: './Image/parking.jpg',                                                                  label: 'Car Parking',           desc: 'Secure on-site car parking available for all guests.' },
  { img: './Image/roomservice.jpg',                                                              label: '24×7 Room Service',     desc: 'Around-the-clock service for all your in-room needs.' },
  { img: './Image/tourguide.jpg',                                                               label: 'Tour Guide',            desc: 'Experienced local guides for hill treks and village tours.' },
  { img: './Image/carService.webp',                                                             label: 'Car Service',           desc: 'Pickup and drop services arranged on request.' },
  { img: 'https://www.giggsmeat.com/wp-content/uploads/2021/04/NohFpw9UaY-min.jpg',            label: 'Barbecue',              desc: 'Evening barbecue sessions with local meats and snacks.' },
  { img: './Image/bonfire.jpg',                                                                  label: 'Bonfire',               desc: 'Gather around the fire under the stars every night.' },
];

export default function OffersPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Amenities & Services"
        title="Our Offerings"
        subtitle="Everything we provide to make your stay truly unforgettable."
        image="./Image/bonfire.jpg"
      />

      {/* ── Offerings grid ── */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">Included with Your Stay</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink mb-12">
            Amenities & Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {offerings.map(item => (
              <article key={item.label} className="bg-white border border-hairline overflow-hidden group">
                <div className="border-b border-hairline overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-garamond text-[1.05rem] font-semibold text-ink mb-2">{item.label}</h3>
                  <p className="text-muted text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages teaser ── */}
      <section className="py-20 md:py-24 border-t border-hairline">
        <div className="section-inner text-center max-w-2xl mx-auto">
          <p className="aurora-eyebrow text-laterite mb-4">Special Packages</p>
          <h2 className="font-garamond text-[2rem] md:text-[2.5rem] font-semibold text-ink mb-5">
            Planning a Special Occasion?
          </h2>
          <p className="text-muted text-[18px] leading-relaxed mb-8">
            We offer customised packages for family reunions, corporate offsites, honeymoons and group tours. 
            Reach out to us and we'll design the perfect stay for you.
          </p>
          <a
            href={`https://wa.me/917384804148?text=${encodeURIComponent('Hello! I am interested in a special package at Matha Buru Hill Eco Resort.')}`}
            target="_blank"
            rel="noreferrer"
            className="aurora-btn-secondary inline-flex items-center gap-2"
          >
            Enquire About Packages
          </a>
        </div>
      </section>
    </main>
  );
}
