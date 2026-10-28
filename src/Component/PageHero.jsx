/**
 * PageHero — reusable banner at the top of every inner page.
 * Shows a full-width hero image with a dark overlay, eyebrow, and title.
 */
export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section
      className="relative w-full flex items-end"
      style={{ minHeight: '320px', paddingTop: '72px' }}
      aria-label={`${title} hero`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={title}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/85" />

      {/* Content */}
      <div className="relative section-inner w-full py-14 md:py-20">
        {eyebrow && (
          <p className="aurora-eyebrow text-white/60 mb-3 tracking-[0.22em]">{eyebrow}</p>
        )}
        <h1 className="font-garamond text-white font-semibold leading-[1.05]
                        text-[2.2rem] sm:text-[3rem] md:text-[3.8rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 mt-3 text-[1rem] sm:text-[1.1rem] max-w-[50ch] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
