import React from 'react';
import { FaLocationDot, FaYoutube } from 'react-icons/fa6';
import { FaFacebookSquare, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to chat with you.')}`;

export default function ContactUs() {
  return (
    <section id="contact" className="bg-ink text-paper py-20 md:py-24 border-t border-hairline/20">
      <div className="section-inner">
        <div className="mb-14">
          <p className="eyebrow text-paper/60 mb-2">Get In Touch</p>
          <h2 className="font-garamond text-3xl md:text-5xl font-semibold text-white">
            The Matha Buru
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 border-t border-hairline/20 pt-10">
          {/* Col 1: Reservations */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-paper/70">Reservations Office</h3>
            <div className="flex gap-3 items-start text-paper/90 text-[17px] leading-relaxed">
              <FaLocationDot size={20} className="mt-1 text-laterite shrink-0" aria-hidden="true" />
              <p>
                Matha FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia, West Bengal 723152
              </p>
            </div>
          </div>

          {/* Col 2: Hours & Phones */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-paper/70">Office Hours &amp; Phone</h3>
            <p className="text-[17px] text-paper/90">24/7 Availability — Feel free to contact us anytime!</p>

            <div className="flex flex-col gap-2 pt-2 text-[17px]">
              <a
                href="tel:7384804148"
                className="flex items-center gap-3 text-white hover:text-laterite transition-colors"
              >
                <FaMobileAlt size={18} className="text-paper/70 shrink-0" aria-hidden="true" />
                <span>7384804148</span>
              </a>
              <a
                href="tel:7908586811"
                className="flex items-center gap-3 text-white hover:text-laterite transition-colors"
              >
                <FaMobileAlt size={18} className="text-paper/70 shrink-0" aria-hidden="true" />
                <span>7908586811</span>
              </a>
              <a
                href="mailto:bikashchandramahato9@gmail.com"
                className="flex items-center gap-3 text-white hover:text-laterite transition-colors pt-1"
              >
                <MdEmail size={18} className="text-paper/70 shrink-0" aria-hidden="true" />
                <span className="break-all">bikashchandramahato9@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 3: Social & Tag */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow text-paper/70">Get Social</h3>
            <div className="flex items-center gap-4 text-paper/80">
              <a
                href="https://youtube.com/@mathaburuhillecoresort?si=--Q2kcJiLIRYGMFN"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-hairline/20 hover:border-laterite hover:text-laterite transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/T7P4FA7Lr7btkmrn/?mibextid=qi2Omg"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-hairline/20 hover:border-laterite hover:text-laterite transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <FaFacebookSquare size={20} />
              </a>
              <a
                href={WA_URL}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-hairline/20 hover:border-laterite hover:text-laterite transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.instagram.com/mathaburuhillecoresort?igsh=MTkwdmRyeDdjcGpyeQ=="
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-hairline/20 hover:border-laterite hover:text-laterite transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <RiInstagramFill size={20} />
              </a>
            </div>

            <div className="pt-2">
              <span className="eyebrow text-paper/60 inline-block">
                Tag us in your Photos!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}