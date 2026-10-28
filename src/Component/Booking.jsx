import React, { useState } from 'react';

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const phoneNumber = "7384804148";
  const defaultMessage = "Hello! I would like to chat with you.";
  const countryCode = "91";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    // Keep existing WhatsApp behavior
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="bg-white py-20 md:py-28">
      <div className="section-inner max-w-2xl">
        <div className="text-center mb-12">
          <p className="eyebrow text-muted mb-3">Reservations &amp; Queries</p>
          <h2 className="font-garamond text-3xl md:text-4xl font-semibold text-ink mb-4">
            Send an Enquiry
          </h2>
          <p className="text-[18px] text-muted">
            Have questions about room availability or special requests? Drop your details below to connect directly with us.
          </p>
        </div>

        <form
          onSubmit={handleWhatsAppClick}
          className="bg-paper border border-hairline p-8 md:p-10 flex flex-col gap-6"
        >
          <div>
            <label htmlFor="enquiry-name" className="form-label">
              Name
            </label>
            <input
              id="enquiry-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="enquiry-email" className="form-label">
              Email
            </label>
            <input
              id="enquiry-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="enquiry-message" className="form-label">
              Message
            </label>
            <textarea
              id="enquiry-message"
              required
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="form-input resize-y"
              placeholder="Tell us your dates, room requirements, or questions..."
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-primary w-full text-center"
            >
              Send enquiry on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}