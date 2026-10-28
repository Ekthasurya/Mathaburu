import { useState } from 'react';
import { FiCalendar, FiUsers, FiHome, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import PageHero from '../Component/PageHero';

const ROOM_TYPES = [
  { id: 'ac',         label: 'AC Cottage',           price: '₹2,200', img: './Image/Ac/DSC_0615.jpg' },
  { id: 'non-ac',     label: 'Non-AC Cottage',        price: '₹1,600', img: './Image/non-ac/DSC_0639.jpg' },
  { id: 'single-mat', label: 'Single Bed Mat House',  price: '₹2,100', img: './Image/Single-Bed/DSC_0667.jpg' },
  { id: 'double-mat', label: 'Double Bed Mat House',  price: '₹1,400', img: './Image/Double-Bed-Room/DSC_0685.jpg' },
];

const ADD_ONS = [
  { id: 'bonfire',   label: 'Evening Bonfire',       img: './Image/bonfire.jpg' },
  { id: 'trek',      label: 'Guided Hill Trek',      img: './Image/tourguide.jpg' },
  { id: 'culture',   label: 'Cultural Show',         img: './Image/santali.jpg' },
  { id: 'car',       label: 'Car Service',           img: './Image/carService.jpg' },
  { id: 'bbq',       label: 'Barbecue Evening',      img: './Image/bonfire.jpg' },
];

/* ── Confirmation Modal ── */
function ConfirmModal({ data, onClose }) {
  const msg = encodeURIComponent(
    `🌿 *Matha Buru Booking Request*\n\n` +
    `👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📧 Email: ${data.email}\n\n` +
    `📅 Check-in: ${data.checkIn}\n📅 Check-out: ${data.checkOut}\n` +
    `👥 Guests: ${data.guests}\n🏠 Room: ${data.roomType}\n\n` +
    `➕ Add-ons: ${data.addOns.length ? data.addOns.join(', ') : 'None'}\n\n` +
    `📝 Special Requests:\n${data.special || 'None'}`
  );

  return (
    <div className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur flex items-center justify-center p-4"
      role="dialog" aria-modal="true" aria-label="Booking confirmation">
      <div className="bg-white max-w-lg w-full p-8 md:p-10 relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-sal/10 border border-sal/20 flex items-center justify-center">
            <FiCheck size={22} className="text-sal" />
          </div>
          <div>
            <h2 className="font-garamond text-2xl font-semibold text-ink">Booking Ready!</h2>
            <p className="text-muted text-[14px]">Your request is prepared to send via WhatsApp</p>
          </div>
        </div>

        <div className="bg-paper border border-hairline p-5 mb-6 space-y-2 text-[15px]">
          {[
            ['Name',       data.name],
            ['Phone',      data.phone],
            ['Check-in',   data.checkIn],
            ['Check-out',  data.checkOut],
            ['Guests',     data.guests],
            ['Room',       data.roomType],
            ['Add-ons',    data.addOns.join(', ') || 'None'],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3">
              <span className="text-muted w-24 flex-shrink-0">{k}</span>
              <span className="text-ink font-medium">{v}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={`https://wa.me/917384804148?text=${msg}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white
                       py-3.5 text-[13px] uppercase tracking-widest font-semibold transition-colors
                       hover:bg-[#1da851]"
            style={{ borderRadius: '2px' }}
          >
            <FaWhatsapp size={18} /> Confirm on WhatsApp
          </a>
          <button onClick={onClose}
            className="px-6 py-3.5 border border-hairline text-muted text-[13px] uppercase tracking-widest
                       hover:border-ink hover:text-ink transition-colors"
            style={{ borderRadius: '2px' }}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  const today    = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);

  const [form, setForm] = useState({
    name:     '',
    phone:    '',
    email:    '',
    checkIn:  today.toISOString().split('T')[0],
    checkOut: tomorrow.toISOString().split('T')[0],
    guests:   '2 Adults',
    rooms:    '1',
    roomType: 'AC Cottage',
    special:  '',
    addOns:   [],
  });
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors]       = useState({});

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const toggleAddOn = (label) => {
    setForm(f => ({
      ...f,
      addOns: f.addOns.includes(label)
        ? f.addOns.filter(a => a !== label)
        : [...f.addOns, label],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.checkIn)      e.checkIn = 'Required';
    if (!form.checkOut)     e.checkOut = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setShowModal(true);
  };

  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Reserve Your Stay"
        title="Book a Room"
        subtitle="Complete the form below and we'll confirm your booking via WhatsApp instantly."
        image="./Image/CoverPic1.jpg"
      />

      <section className="py-20 md:py-28 bg-paper">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Left — form ── */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-hairline p-8 md:p-10">

                {/* Personal info */}
                <fieldset className="mb-8">
                  <legend className="aurora-eyebrow text-laterite mb-5">Guest Information</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b-name" className="form-label">Full Name *</label>
                      <input id="b-name" type="text" value={form.name} onChange={set('name')}
                        className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                        placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="b-phone" className="form-label">Phone *</label>
                      <input id="b-phone" type="tel" value={form.phone} onChange={set('phone')}
                        className={`form-input ${errors.phone ? 'border-red-400' : ''}`}
                        placeholder="+91 98765 43210" />
                      {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="b-email" className="form-label">Email Address</label>
                      <input id="b-email" type="email" value={form.email} onChange={set('email')}
                        className="form-input" placeholder="name@example.com" />
                    </div>
                  </div>
                </fieldset>

                {/* Stay details */}
                <fieldset className="mb-8">
                  <legend className="aurora-eyebrow text-laterite mb-5">Stay Details</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="b-checkin" className="form-label">
                        <FiCalendar className="inline mr-1.5" size={12} /> Check-in *
                      </label>
                      <input id="b-checkin" type="date" value={form.checkIn} onChange={set('checkIn')}
                        className={`form-input ${errors.checkIn ? 'border-red-400' : ''}`} />
                    </div>
                    <div>
                      <label htmlFor="b-checkout" className="form-label">
                        <FiCalendar className="inline mr-1.5" size={12} /> Check-out *
                      </label>
                      <input id="b-checkout" type="date" value={form.checkOut} onChange={set('checkOut')}
                        className={`form-input ${errors.checkOut ? 'border-red-400' : ''}`} />
                    </div>
                    <div>
                      <label htmlFor="b-guests" className="form-label">
                        <FiUsers className="inline mr-1.5" size={12} /> Guests
                      </label>
                      <select id="b-guests" value={form.guests} onChange={set('guests')} className="form-input">
                        {['1 Adult','2 Adults','2 Adults, 1 Child','2 Adults, 2 Children','3 Adults','4 Adults','Group (5+)'].map(g => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="b-rooms" className="form-label">
                        <FiHome className="inline mr-1.5" size={12} /> No. of Rooms
                      </label>
                      <select id="b-rooms" value={form.rooms} onChange={set('rooms')} className="form-input">
                        {['1','2','3','4','5+'].map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                </fieldset>

                {/* Room type */}
                <fieldset className="mb-8">
                  <legend className="aurora-eyebrow text-laterite mb-5">Choose Room Type</legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ROOM_TYPES.map(rt => (
                      <label
                        key={rt.id}
                        className={`cursor-pointer border-2 overflow-hidden transition-colors ${
                          form.roomType === rt.label ? 'border-laterite' : 'border-hairline hover:border-ink/40'
                        }`}
                      >
                        <input type="radio" name="roomType" value={rt.label}
                          checked={form.roomType === rt.label}
                          onChange={set('roomType')} className="sr-only" />
                        <img src={rt.img} alt={rt.label} loading="lazy"
                          className="w-full aspect-[4/3] object-cover" />
                        <div className="p-2.5">
                          <p className="text-[12px] font-semibold text-ink leading-snug">{rt.label}</p>
                          <p className="text-[11px] text-laterite font-semibold mt-0.5">{rt.price}/night</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Add-ons */}
                <fieldset className="mb-8">
                  <legend className="aurora-eyebrow text-laterite mb-5">Add-on Experiences</legend>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {ADD_ONS.map(ao => {
                      const selected = form.addOns.includes(ao.label);
                      return (
                        <label key={ao.id}
                          className={`cursor-pointer border-2 overflow-hidden transition-colors relative ${
                            selected ? 'border-sal' : 'border-hairline hover:border-ink/40'
                          }`}>
                          <input type="checkbox" checked={selected}
                            onChange={() => toggleAddOn(ao.label)} className="sr-only" />
                          <img src={ao.img} alt={ao.label} loading="lazy"
                            className="w-full aspect-square object-cover" />
                          {selected && (
                            <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-sal flex items-center justify-center">
                              <FiCheck size={11} className="text-white" />
                            </div>
                          )}
                          <div className="p-2">
                            <p className="text-[11px] font-semibold text-ink text-center leading-tight">{ao.label}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Special requests */}
                <fieldset className="mb-8">
                  <legend className="aurora-eyebrow text-laterite mb-5">Special Requests</legend>
                  <textarea
                    id="b-special"
                    rows={4}
                    value={form.special}
                    onChange={set('special')}
                    className="form-input resize-y"
                    placeholder="Any dietary requirements, accessibility needs, special occasions, or other requests..."
                  />
                </fieldset>

                <button type="submit" className="aurora-availability-btn w-full text-center">
                  Review Booking <FiArrowRight className="inline ml-2" />
                </button>
              </form>
            </div>

            {/* ── Right — sidebar ── */}
            <div className="flex flex-col gap-6">
              {/* Resort image */}
              <div className="overflow-hidden border border-hairline">
                <img src="./Image/CoverPic1.jpg" alt="Matha Buru" loading="lazy"
                  className="w-full aspect-[4/3] object-cover" />
              </div>

              {/* Why book direct */}
              <div className="bg-paper border border-hairline p-6">
                <p className="aurora-eyebrow text-laterite mb-4">Why Book Direct?</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Best rate guaranteed',
                    'Instant WhatsApp confirmation',
                    'Flexible cancellation policy',
                    'Personalised experience',
                    'Free room upgrade (subject to availability)',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-muted">
                      <FiCheck size={14} className="text-sal mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="bg-white border border-hairline p-6">
                <p className="aurora-eyebrow text-laterite mb-4">Policies</p>
                <div className="flex flex-col gap-3 text-[14px] text-muted">
                  {[
                    ['Check-in',  '12:00 Noon onwards'],
                    ['Check-out', 'By 11:00 AM'],
                    ['Children',  'Below 7 stay free'],
                    ['Payment',   'On arrival (cash/UPI)'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-hairline pb-2 last:border-0">
                      <span className="font-semibold text-ink">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resort images strip */}
              <div className="grid grid-cols-2 gap-2">
                {['./Image/pic1.jpg','./Image/food1.jpg','./Image/bonfire.jpg','./Image/santali.jpg'].map((src, i) => (
                  <div key={i} className="overflow-hidden aspect-square border border-hairline">
                    <img src={src} alt={`Resort ${i+1}`} loading="lazy"
                      className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Confirmation modal */}
      {showModal && (
        <ConfirmModal data={form} onClose={() => setShowModal(false)} />
      )}
    </main>
  );
}
