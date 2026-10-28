import React from 'react';

export default function Location() {
  return (
    <section id="location" className="bg-paper py-20 md:py-28">
      <div className="section-inner">
        <p className="eyebrow text-muted mb-4">Getting Here</p>
        <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-12">
          Location
        </h2>

        <div className="bg-white border border-hairline grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Map */}
          <div className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-[450px] border-b lg:border-b-0 lg:border-r border-hairline">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.965152475939!2d86.06911777516798!3d23.134948979095103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5c564d5984763%3A0x6a648bda55d2aedb!2sMatha%20Buru%20Hill%20Resort!5e0!3m2!1sen!2sin!4v1728367128719!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map — Matha Buru Hill Resort"
              className="w-full h-full"
            />
          </div>

          {/* Address */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center gap-4">
            <p className="eyebrow text-muted">Address</p>
            <h3 className="font-garamond text-2xl md:text-3xl font-semibold text-ink">
              Matha Buru Hill Resort
            </h3>
            <p className="text-[18px] text-muted leading-relaxed">
              FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia, West Bengal 723152
            </p>
            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Matha+Buru+Hill+Resort"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}