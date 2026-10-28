import React from 'react';

const meals = [
  { img: './Image/food2.jpg', label: 'Breakfast' },
  { img: './Image/food1.jpg', label: 'Lunch' },
  { img: './Image/food3.jpg', label: 'Dinner' },
];

export default function Dyning() {
  return (
    <section id="dyning" className="bg-paper py-20 md:py-28">
      <div className="section-inner">
        <p className="eyebrow text-muted mb-4">Fresh &amp; Local</p>
        <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-12">
          Dining
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {meals.map((meal) => (
            <div
              key={meal.label}
              className="bg-white border border-hairline overflow-hidden flex flex-col"
            >
              <div className="border-b border-hairline">
                <img
                  src={meal.img}
                  alt={meal.label}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-garamond text-xl font-medium text-ink">
                  {meal.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}