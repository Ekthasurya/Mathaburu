export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="section-inner">
        {/* Eyebrow */}
        <p className="eyebrow text-muted mb-6">About the resort</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <div className="border border-hairline">
            <img
              src="./Image/AboutUs.jpg"
              alt="Matha Buru Hill Eco Resort — view of the resort grounds"
              width={640}
              height={427}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-6">
              About Us
            </h2>
            <p className="text-[18px] text-muted leading-relaxed">
              Welcome to Matha Buru Eco Hill Resort, located in the serene hills of Purulia, West Bengal.
              Our resort offers luxurious accommodations, eco-friendly practices, and exceptional hospitality,
              all amidst breathtaking natural landscapes. Whether you're here for relaxation, adventure, or
              business, we provide a perfect blend of comfort and elegance. Experience tranquility, indulge
              in delicious cuisine, and explore nature at Matha Buru Eco Hill Resort — your ideal escape
              from the everyday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}