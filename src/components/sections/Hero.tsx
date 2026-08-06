import { motion } from 'framer-motion';
import { siteConfig } from '@/config';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-[#F8F6F2]">

      {/* ── Subtle background texture & gradients ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial glow top-right */}
        <div className="absolute top-0 right-0 w-[60vw] h-[70vh] rounded-full bg-gradient-radial from-[#E7D8C8]/60 via-[#F8F6F2]/30 to-transparent blur-3xl" />
        {/* Warm amber depth bottom-left */}
        <div className="absolute bottom-0 left-0 w-[40vw] h-[50vh] rounded-full bg-gradient-radial from-[#D6B48A]/20 via-[#F8F6F2]/10 to-transparent blur-3xl" />
        {/* Fine linen grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '160px',
          }}
        />
      </div>

      {/* ── Decorative geometric elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right corner arc */}
        <div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-[#D6B48A]/20"
        />
        <div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-10 -right-10 w-[320px] h-[320px] rounded-full border border-[#A08A78]/15"
        />
        {/* Bottom-left accent line */}
        <div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 left-0 w-[180px] h-px bg-gradient-to-r from-transparent via-[#A08A78]/40 to-transparent origin-left"
        />
        {/* Small floating diamond */}
        <div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute top-[38%] left-[44%] w-2 h-2 rotate-45 bg-[#D6B48A]/40 rounded-[1px]"
        />
        {/* Vertical rule — left gutter */}
        <div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/4 left-6 md:left-12 w-px h-[160px] bg-gradient-to-b from-transparent via-[#A08A78]/30 to-transparent origin-top"
        />
      </div>

      {/* ── Main split grid ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100dvh] py-32">

        {/* ── LEFT — Editorial text ── */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {/* Badge */}
          <div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-[#A08A78]/60" />
            <span className="uppercase tracking-[0.22em] text-[10px] text-[#A08A78] font-medium font-sans">
              {siteConfig.hero.badge}
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[#37322F] text-[2.6rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] leading-[1.08] tracking-[-0.01em] mb-8"
          >
            Defender direitos<br />
            <em className="not-italic italic font-light text-[#A08A78]">é também</em><br />
            acolher histórias.
          </motion.h1>

          {/* Divider */}
          <div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="w-16 h-px bg-[#D6B48A] mb-8 origin-left"
          />

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="text-[#37322F]/60 text-base md:text-lg font-light leading-relaxed font-sans max-w-md mb-12"
          >
            {siteConfig.hero.subtext}
          </motion.p>

          {/* CTAs */}
          <div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-col sm:flex-row gap-5 items-start"
          >
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#37322F] text-[#F8F6F2] px-7 py-4 text-[11px] uppercase tracking-[0.18em] font-medium font-sans transition-all duration-300 hover:bg-[#A08A78]"
            >
              {siteConfig.hero.primaryCta}
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-medium font-sans text-[#37322F]/70 hover:text-[#37322F] transition-colors duration-300 py-4 border-b border-[#A08A78]/30 hover:border-[#A08A78] pr-1"
            >
              {siteConfig.hero.secondaryCta}
            </a>
          </div>

          {/* Credentials strip */}
          <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 pt-10 border-t border-[#A08A78]/15 flex flex-wrap gap-x-8 gap-y-3"
          >
            {['10+ anos', 'Direito de Família', 'Mediação', 'Direitos das Mulheres'].map((c) => (
              <span key={c} className="text-[10px] uppercase tracking-[0.18em] text-[#A08A78]/80 font-sans">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Portrait frame ── */}
        <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer decorative ring */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-[#D6B48A]/25" />
            <div className="absolute -inset-8 rounded-[3rem] border border-[#E7D8C8]/40" />

            {/* Portrait container */}
            <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[460px] lg:w-[420px] lg:h-[540px] xl:w-[460px] xl:h-[590px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(55,50,47,0.12)]">

              {/* Placeholder — soft gradient awaiting real photo */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#E7D8C8] via-[#D6B48A]/60 to-[#A08A78]/40" />

              {/* Layered soft texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8F6F2]/30 via-transparent to-[#37322F]/10" />

              {/* Monogram / placeholder identity */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="flex flex-col items-center gap-5"
                >
                  {/* Initials circle */}
                  <div className="w-20 h-20 rounded-full border border-[#F8F6F2]/40 flex items-center justify-center bg-[#F8F6F2]/10 backdrop-blur-sm">
                    <span className="font-serif text-[#F8F6F2] text-3xl font-light tracking-wide">EX</span>
                  </div>
                  {/* Photo instruction */}
                      <img
                    src="/frenteeva2.jpg"
                    alt="Eva Xavier"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom gradient fade for depth */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#37322F]/20 to-transparent" />
            </div>

            {/* Floating credential badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="absolute -bottom-6 -left-6 bg-[#F8F6F2] border border-[#E7D8C8] shadow-[0_8px_32px_rgba(55,50,47,0.10)] rounded-2xl px-5 py-4"
            >
              <p className="font-serif text-[#37322F] text-2xl font-light leading-none">10+</p>
              <p className="text-[#A08A78] text-[10px] uppercase tracking-[0.18em] font-sans mt-1">anos de experiência</p>
            </motion.div>

            {/* Floating top-right accent */}
            <div
              initial={{ opacity: 0, x: -10, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#D6B48A]/30 border border-[#D6B48A]/40 flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-[#A08A78]/60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#A08A78]/50 to-transparent"
        />
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#A08A78]/50 font-sans">scroll</span>
      </div>
    </section>
  );
}
