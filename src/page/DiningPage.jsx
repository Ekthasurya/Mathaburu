import PageHero from '../Component/PageHero';

const meals = [
  {
    img:   './Image/food2.jpg',
    label: 'Breakfast',
    desc:  'Start your morning with a wholesome spread of local fruits, eggs, freshly made rotis and hot chai.',
  },
  {
    img:   './Image/food1.jpg',
    label: 'Lunch',
    desc:  'A hearty afternoon meal featuring rice, dal, seasonal vegetables and traditional Bengali curries.',
  },
  {
    img:   './Image/food3.jpg',
    label: 'Dinner',
    desc:  'End your day with a satisfying dinner prepared from fresh, locally sourced produce — cooked over fire.',
  },
];

const extras = [
  'Barbecue evenings on request',
  'Bonfire snacks & tea',
  'Custom menus for dietary needs',
  'Packed meals for treks',
  'Local tribal cuisine on special occasions',
];

export default function DiningPage() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Fresh & Local"
        title="Dining"
        subtitle="Every meal is a celebration of local flavours, cooked with love and fresh ingredients."
        image="./Image/food1.jpg"
      />

      {/* ── Meals ── */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          <p className="aurora-eyebrow text-laterite mb-4">The Menu</p>
          <h2 className="font-garamond text-[2.2rem] md:text-[2.8rem] font-semibold text-ink mb-12">
            Three Meals, Infinite Flavour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {meals.map(meal => (
              <article key={meal.label} className="bg-white border border-hairline overflow-hidden group">
                <div className="border-b border-hairline overflow-hidden">
                  <img
                    src={meal.img}
                    alt={meal.label}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-garamond text-2xl font-semibold text-ink mb-3">{meal.label}</h3>
                  <p className="text-muted text-[17px] leading-relaxed">{meal.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extras ── */}
      <section className="py-20 md:py-24 border-t border-hairline">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="aurora-eyebrow text-laterite mb-4">Also Available</p>
              <h2 className="font-garamond text-[2.2rem] font-semibold text-ink mb-8">
                Beyond the Table
              </h2>
              <ul className="flex flex-col gap-4">
                {extras.map(e => (
                  <li key={e} className="flex items-start gap-3 text-[17px] text-muted border-b border-hairline pb-4 last:border-0">
                    <span className="text-laterite mt-1">—</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['./Image/food1.jpg','./Image/food2.jpg','./Image/food3.jpg','./Image/bonfire.jpg'].map((src,i) => (
                <div key={i} className="overflow-hidden aspect-square border border-hairline">
                  <img src={src} alt={`Dining ${i+1}`} loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
