const CULTURES = [
  {
    img: './Image/chownach.jpg',
    alt: 'Chownach — Purulia Chhau dance performers in elaborate masks',
    title: 'Chownach',
    body: 'Purulia Chhau Nach is a vibrant and highly stylised form of the Chhau dance, originating from the Purulia district in West Bengal. Known for its elaborate masks, energetic martial movements and depictions of mythological stories from the Ramayana, Mahabharata and Puranas.',
  },
  {
    img: './Image/patanach.jpg',
    alt: 'Pata Nach — performers with Patachitra scroll paintings',
    title: 'Pata Nach',
    body: 'Pata Nach is a traditional folk performance combining dance, painting and storytelling. Performers use Patachitra scroll paintings to narrate stories from mythology or local folklore. As the scrolls are unravelled, dancers sing songs that explain the painted scenes.',
    reverse: true,
  },
  {
    img: './Image/santali.jpg',
    alt: 'Santali dance — Santali tribal community performers',
    title: 'Santali Dance',
    body: "Santali dance is a vibrant folk tradition of the Santali tribal community, one of the largest indigenous groups in India. These dances are an integral part of Santali culture, performed during festivals, harvests, weddings and other communal celebrations.",
  },
  {
    img: './Image/boul.jpg',
    alt: 'Baul Sangeet — wandering minstrel with ektara',
    title: 'Baul Sangeet',
    body: "Baul Sangeet is a mystical folk music tradition from Bengal and Bangladesh. Bauls are wandering minstrels who use music to express spiritual experiences. Their songs blend Sufism, Vaishnavism and Tantric philosophies into a unique syncretic tradition.",
    reverse: true,
  },
];

export default function Culture() {
  return (
    <section id="culture" className="bg-paper py-20 md:py-28">
      <div className="section-inner">
        <p className="eyebrow text-muted mb-4">Local culture</p>
        <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-16">
          Cultural Traditions
        </h2>

        <div className="flex flex-col gap-0">
          {CULTURES.map((item, i) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 md:grid-cols-2 border border-hairline
                          ${i > 0 ? 'border-t-0' : ''}`}
            >
              {/* Image — always on top on mobile */}
              <div className={`${item.reverse ? 'md:order-2' : 'md:order-1'} border-b border-hairline md:border-b-0 ${item.reverse ? 'md:border-l border-hairline' : 'md:border-r border-hairline'}`}>
                <img
                  src={item.img}
                  alt={item.alt}
                  width={640}
                  height={427}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Text */}
              <div className={`${item.reverse ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center p-8 md:p-10 lg:p-14`}>
                <h3 className="font-garamond text-2xl md:text-3xl font-semibold text-ink mb-4">
                  {item.title}
                </h3>
                <p className="text-[18px] text-muted leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}