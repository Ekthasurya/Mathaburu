import PageHero from '../Component/PageHero';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        subtitle="A sanctuary where nature, culture and hospitality come together."
        image="./Image/AboutUs.jpg"
      />

      {/* ── Who we are ── */}
      <section className="py-20 md:py-28">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="border border-hairline overflow-hidden">
              <img
                src="./Image/AboutUs.jpg"
                alt="Matha Buru Hill Eco Resort — resort grounds"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="aurora-eyebrow text-laterite mb-4">About the Resort</p>
              <h2 className="font-garamond text-[2rem] md:text-[2.5rem] font-semibold text-ink leading-snug mb-6">
                Matha Buru<br />Hill Eco Resort
              </h2>
              <p className="text-[18px] text-muted leading-relaxed mb-5">
                Welcome to Matha Buru Eco Hill Resort, located in the serene hills of Purulia, West Bengal.
                Our resort offers luxurious accommodations, eco-friendly practices, and exceptional hospitality,
                all amidst breathtaking natural landscapes.
              </p>
              <p className="text-[18px] text-muted leading-relaxed">
                Whether you're here for relaxation, adventure, or a family escape, we provide a perfect blend
                of comfort and authenticity. Experience tranquility, indulge in local cuisine, and immerse
                yourself in tribal culture — your ideal escape from the everyday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="bg-paper py-20 md:py-24 border-t border-hairline">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">Why Choose Us</p>
          <h2 className="font-garamond text-[2rem] md:text-[2.5rem] font-semibold text-ink mb-12">
            The Matha Buru Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Eco-Friendly',      body: 'We are committed to sustainable tourism — minimal environmental impact, maximum natural beauty.' },
              { title: 'Tribal Culture',    body: 'Immerse yourself in the rich traditions of Purulia — Chhau dance, Baul music, and Santali art.' },
              { title: 'Fresh Local Food',  body: 'All meals are prepared with locally sourced ingredients, bringing authentic Bengali flavours to your table.' },
              { title: 'Hilltop Views',     body: 'Wake up to panoramic views of the Purulia hills — a breathtaking backdrop for every moment.' },
              { title: '24/7 Service',      body: 'Our dedicated team is available around the clock to ensure your stay is absolutely seamless.' },
              { title: 'Peaceful Setting',  body: 'Far from the city noise, our resort offers a rare stillness that restores the mind and spirit.' },
            ].map(h => (
              <div key={h.title} className="border-l-2 border-laterite pl-6">
                <h3 className="font-garamond text-xl font-semibold text-ink mb-2">{h.title}</h3>
                <p className="text-muted text-[17px] leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="py-20 md:py-24 border-t border-hairline">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['./Image/pic1.jpg','./Image/pic2.jpg','./Image/pic5.jpg','./Image/pic6.jpg'].map((src, i) => (
              <div key={i} className="overflow-hidden aspect-square">
                <img src={src} alt={`Resort photo ${i+1}`} loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
