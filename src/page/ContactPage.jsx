import { useState } from 'react';
import PageHero from '../Component/PageHero';
import { FaLocationDot, FaYoutube } from 'react-icons/fa6';
import { FaFacebookSquare, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

const WA_URL = `https://wa.me/917384804148?text=${encodeURIComponent('Hello! I would like to chat with you.')}`;

const SOCIALS = [
  { href: 'https://youtube.com/@mathaburuhillecoresort?si=--Q2kcJiLIRYGMFN',                     icon: <FaYoutube size={20} />,        label: 'YouTube' },
  { href: 'https://www.facebook.com/share/T7P4FA7Lr7btkmrn/?mibextid=qi2Omg',                    icon: <FaFacebookSquare size={20} />, label: 'Facebook' },
  { href: WA_URL,                                                                                  icon: <FaWhatsapp size={20} />,       label: 'WhatsApp' },
  { href: 'https://www.instagram.com/mathaburuhillecoresort?igsh=MTkwdmRyeDdjcGpyeQ==',           icon: <RiInstagramFill size={20} />,  label: 'Instagram' },
];

export default function ContactPage() {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg]     = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello! My name is ${name}.\nEmail: ${email}\n\n${msg}`);
    window.open(`https://wa.me/917384804148?text=${text}`, '_blank');
  };

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We're available 24/7. Reach out for reservations, questions or a personalised quote."
        image="./Image/footer.jpg"
      />

      {/* ── Contact grid ── */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left — info */}
            <div className="flex flex-col gap-10">
              {/* Address */}
              <div>
                <p className="aurora-eyebrow text-laterite mb-3">Address</p>
                <div className="flex gap-3 items-start text-ink text-[17px] leading-relaxed">
                  <FaLocationDot size={20} className="mt-1 text-laterite shrink-0" />
                  <p>FOREST, Baghmundi - Purulia Rd, SONKUPI, Matha, Purulia, West Bengal 723152</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Matha+Buru+Hill+Resort"
                  target="_blank"
                  rel="noreferrer"
                  className="aurora-btn-secondary inline-flex items-center gap-2 mt-5 text-[12px] py-2.5"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Phone & Email */}
              <div>
                <p className="aurora-eyebrow text-laterite mb-3">Phone & Email</p>
                <div className="flex flex-col gap-3">
                  {[
                    { href: 'tel:7384804148',  icon: <FaMobileAlt size={16} />, label: '7384804148' },
                    { href: 'tel:7908586811',  icon: <FaMobileAlt size={16} />, label: '7908586811' },
                    { href: 'mailto:bikashchandramahato9@gmail.com', icon: <MdEmail size={16} />, label: 'bikashchandramahato9@gmail.com' },
                  ].map(c => (
                    <a key={c.href} href={c.href}
                      className="flex items-center gap-3 text-[17px] text-ink hover:text-laterite transition-colors">
                      <span className="text-muted">{c.icon}</span>
                      <span>{c.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="aurora-eyebrow text-laterite mb-3">Social Media</p>
                <div className="flex items-center gap-3">
                  {SOCIALS.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="p-2.5 border border-hairline text-muted hover:text-laterite hover:border-laterite transition-colors"
                      style={{ borderRadius: '2px' }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
                <p className="aurora-eyebrow text-muted mt-3">Tag us in your photos!</p>
              </div>
            </div>

            {/* Right — enquiry form */}
            <div>
              <p className="aurora-eyebrow text-laterite mb-3">Send a Message</p>
              <h2 className="font-garamond text-[2rem] font-semibold text-ink mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="bg-white border border-hairline p-8 flex flex-col gap-5">
                <div>
                  <label htmlFor="c-name" className="form-label">Name</label>
                  <input id="c-name" type="text" required value={name} onChange={e => setName(e.target.value)}
                    className="form-input" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="form-label">Email</label>
                  <input id="c-email" type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    className="form-input" placeholder="name@example.com" />
                </div>
                <div>
                  <label htmlFor="c-msg" className="form-label">Message</label>
                  <textarea id="c-msg" required rows={5} value={msg} onChange={e => setMsg(e.target.value)}
                    className="form-input resize-y"
                    placeholder="Tell us your dates, room requirements, or questions..." />
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Send via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="border-t border-hairline">
        <div className="h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.965152475939!2d86.06911777516798!3d23.134948979095103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5c564d5984763%3A0x6a648bda55d2aedb!2sMatha%20Buru%20Hill%20Resort!5e0!3m2!1sen!2sin!4v1728367128719!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map — Matha Buru Hill Resort"
          />
        </div>
      </section>
    </main>
  );
}
