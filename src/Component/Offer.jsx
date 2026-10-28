import React from 'react';

const offerings = [
  { img: './Image/spotlight/DSC_0608.jpg',                                                      label: 'Mini Childrens Park' },
  { img: 'https://res.cloudinary.com/dhd5do52g/image/upload/v1734720824/photo4_qdsaql.jpg',    label: 'Free Drivers Room' },
  { img: './Image/parking.jpg',                                                                  label: 'Car Parking' },
  { img: './Image/roomservice.jpg',                                                              label: '24 x 7 Room Service' },
  { img: './Image/tourguide.jpg',                                                               label: 'Tour Guide' },
  { img: './Image/carService.webp',                                                             label: 'Car Service' },
  { img: 'https://www.giggsmeat.com/wp-content/uploads/2021/04/NohFpw9UaY-min.jpg',            label: 'Barbique' },
  { img: './Image/bonfire.jpg',                                                                  label: 'Bonfire' },
];

export default function Offer() {
  return (
    <section id="offer" className="bg-white py-20 md:py-28">
      <div className="section-inner">
        <p className="eyebrow text-muted mb-4">Amenities &amp; Services</p>
        <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-12">
          Our Offerings
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {offerings.map((item) => (
            <div
              key={item.label}
              className="bg-paper border border-hairline overflow-hidden flex flex-col"
            >
              <div className="border-b border-hairline">
                <img
                  src={item.img}
                  alt={item.label}
                  width={300}
                  height={225}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-[17px] font-medium text-ink">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}