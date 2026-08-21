import { ArrowRight, ChevronRight, Star, ShieldCheck, Languages, Wrench, Package2, Quote, Play } from "lucide-react";
import { useLang, pick } from "../i18n";
import { products, testimonials } from "../data";
import Reveal from "../components/Reveal";
import type { PageKey } from "../App";

interface PageProps {
  navigate: (p: PageKey, preset?: string) => void;
}

export default function HomePage({ navigate }: PageProps) {
  const { lang, t } = useLang();

  const statsRow = [
    { value: "150+", label: t.hero.statMachines },
    { value: t.hero.statResponseValue, label: t.hero.statResponse },
    { value: "EN · FR", label: t.hero.statSupport },
    { value: "5+", label: t.hero.statYears },
  ];

  const whyItems = [
    { icon: ShieldCheck, title: t.home.why1Title, text: t.home.why1Text },
    { icon: Languages, title: t.home.why2Title, text: t.home.why2Text },
    { icon: Wrench, title: t.home.why3Title, text: t.home.why3Text },
    { icon: Package2, title: t.home.why4Title, text: t.home.why4Text },
  ];

  return (
    <div>
      {/* ================================ HERO ================================ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-navy-950">
        {/* Static fallback image — also the video poster (loads instantly, covers reduced-motion) */}
        <img
          src="/dt-flowwrap-demo/images/hero.webp"
          alt="Horizontal flow-wrap packaging machine running snack bars at full line rate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/dt-flowwrap-demo/images/hero.webp"
          aria-hidden="true"
        >
          <source src="/dt-flowwrap-demo/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        <div className="absolute inset-0 blueprint-grid opacity-50" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="hazard-stripes h-1.5 w-14 rounded-full" />
              <span className="text-signal-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                {t.hero.eyebrow}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-black text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl text-balance">
              {t.hero.title1}{" "}
              <span className="text-signal-500">{t.hero.titleAccent}</span>{" "}
              {t.hero.title2}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-steel-300 text-base sm:text-lg leading-relaxed">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("quote")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-signal-500 text-navy-950 font-bold text-base hover:bg-signal-400 transition-all shadow-xl shadow-signal-500/30 hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("products")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {t.hero.ctaSecondary}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-steel-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-500 inline-block" />
              {t.hero.ctaNote}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden max-w-4xl border border-white/10">
              {statsRow.map((s) => (
                <div key={s.label} className="bg-navy-900/80 backdrop-blur px-5 py-4">
                  <dt className="text-[11px] uppercase tracking-wider text-steel-400 mb-1">{s.label}</dt>
                  <dd className="font-display font-extrabold text-white text-xl sm:text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============================= INDUSTRIES ============================= */}
      <section className="bg-white py-14 border-b border-steel-300/40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-steel-500 mb-2">
              {t.industries.label}
            </p>
            <h2 className="text-center font-display font-extrabold text-navy-900 text-xl sm:text-2xl mb-8">
              {t.industries.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {t.industries.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-steel-300/70 text-sm font-medium text-navy-800 bg-cloud hover:border-signal-500 hover:text-signal-600 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================== PRODUCTS ============================== */}
      <section className="bg-cloud py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-signal-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  {t.home.productsLabel}
                </p>
                <h2 className="font-display font-black text-navy-900 text-3xl sm:text-4xl tracking-tight">
                  {t.home.productsTitle}
                </h2>
                <p className="mt-3 text-steel-500 max-w-2xl">{t.home.productsSubtitle}</p>
              </div>
              <button
                onClick={() => navigate("products")}
                className="inline-flex items-center gap-1.5 text-signal-600 font-bold text-sm hover:gap-3 transition-all shrink-0"
              >
                {t.common.viewAll}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <button
                  onClick={() => navigate("products")}
                  className="group text-left bg-white rounded-lg overflow-hidden border border-steel-300/50 hover:border-signal-500/60 shadow-sm hover:shadow-xl hover:shadow-navy-900/10 transition-all hover:-translate-y-1 w-full"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={p.image}
                      alt={pick(lang, p.name)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-navy-950/85 text-white text-[11px] font-bold backdrop-blur">
                      {t.common.upTo} {p.speed.value} {pick(lang, p.speed.unit)}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-extrabold text-navy-900 text-lg leading-snug group-hover:text-signal-600 transition-colors">
                      {pick(lang, p.name)}
                    </h3>
                    <p className="mt-2 text-sm text-steel-500 leading-relaxed line-clamp-2">
                      {pick(lang, p.tagline)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-signal-600 text-sm font-bold">
                      {t.common.learnMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== WHY US ============================== */}
      <section className="bg-navy-900 blueprint-grid py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.home.whyLabel}
            </p>
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight max-w-2xl text-balance">
              {t.home.whyTitle}
            </h2>
            <p className="mt-3 text-steel-400 max-w-2xl">{t.home.whySubtitle}</p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full bg-navy-800/70 backdrop-blur border border-white/10 rounded-lg p-6 hover:border-signal-500/50 transition-colors">
                  <span className="w-11 h-11 rounded-md bg-signal-500/15 flex items-center justify-center mb-5">
                    <item.icon className="w-5.5 h-5.5 text-signal-400" />
                  </span>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== TESTIMONIAL TEASER ========================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              {t.home.testimonialsLabel}
            </p>
            <h2 className="font-display font-black text-navy-900 text-3xl sm:text-4xl tracking-tight text-center mb-12">
              {t.home.testimonialsTitle}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((tm, i) => (
              <Reveal key={tm.name} delay={i * 100}>
                <figure className="h-full flex flex-col bg-cloud rounded-lg p-6 border border-steel-300/50">
                  <Quote className="w-7 h-7 text-signal-500 mb-4" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: tm.rating }).map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-signal-500 text-signal-500" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-navy-800 leading-relaxed flex-1 line-clamp-6">
                    "{pick(lang, tm.quote)}"
                  </blockquote>
                  <figcaption className="mt-5 pt-4 border-t border-steel-300/60">
                    <span className="block font-bold text-navy-900 text-sm">{tm.name}</span>
                    <span className="block text-xs text-steel-500 mt-0.5">
                      {pick(lang, tm.role)} · {tm.company} · {tm.location}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <button
                onClick={() => navigate("testimonials")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-navy-900 text-navy-900 font-bold text-sm hover:bg-navy-900 hover:text-white transition-colors"
              >
                {t.common.readStory}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================= VIDEO TEASER ============================= */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <img
          src="/dt-flowwrap-demo/images/facility.webp"
          alt="NordPack showroom with packaging machines"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
          <Reveal className="flex-1">
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.home.videosLabel}
            </p>
            <h2 className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight">
              {t.home.videosTitle}
            </h2>
            <p className="mt-3 text-steel-300 max-w-lg">{t.home.videosSubtitle}</p>
            <button
              onClick={() => navigate("videos")}
              className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-signal-500 text-navy-950 font-bold hover:bg-signal-400 transition-colors"
            >
              <Play className="w-4 h-4 fill-navy-950" />
              {t.common.watchVideo}
            </button>
          </Reveal>
          <Reveal delay={150} className="flex-1 w-full">
            <button
              onClick={() => navigate("videos")}
              className="group relative w-full aspect-video rounded-lg overflow-hidden border border-white/20 shadow-2xl"
              aria-label={t.common.playVideo}
            >
              <img
                src="https://i.ytimg.com/vi/EHck-oMl4Pg/hqdefault.jpg"
                alt="D.T T-250 chocolate wrapper video thumbnail"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-signal-500 flex items-center justify-center shadow-xl shadow-signal-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-navy-950 fill-navy-950 ml-1" />
                </span>
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* ================================ CTA ================================ */}
      <section className="bg-signal-500 relative overflow-hidden">
        <div className="absolute inset-0 hazard-stripes opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <Reveal>
            <h2 className="font-display font-black text-navy-950 text-3xl sm:text-4xl tracking-tight">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-3 text-navy-900/80 font-medium max-w-xl">{t.home.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => navigate("quote")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-navy-950 text-white font-bold hover:bg-navy-800 transition-colors shadow-xl"
              >
                {t.home.ctaButton}
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:16473720005"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-navy-950 text-navy-950 font-bold hover:bg-navy-950 hover:text-white transition-colors"
              >
                {t.home.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
