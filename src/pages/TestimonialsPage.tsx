import { ArrowRight, Quote, Star, BadgeCheck } from "lucide-react";
import { useLang, pick } from "../i18n";
import { testimonials } from "../data";
import Reveal from "../components/Reveal";
import type { PageKey } from "../App";

interface PageProps {
  navigate: (p: PageKey, preset?: string) => void;
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-signal-500 text-signal-500" />
      ))}
    </div>
  );
}

export default function TestimonialsPage({ navigate }: PageProps) {
  const { lang, t } = useLang();
  const [featured, ...rest] = testimonials;

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-900 blueprint-grid pt-40 sm:pt-44 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.testimonials.label}
            </p>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
              {t.testimonials.title}
            </h1>
            <p className="mt-4 text-steel-300 max-w-2xl leading-relaxed">{t.testimonials.subtitle}</p>
            <span className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-signal-500/15 border border-signal-500/40 text-signal-400 text-sm font-bold">
              <BadgeCheck className="w-4 h-4" />
              {t.testimonials.badge}
            </span>
          </Reveal>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <figure className="relative bg-white rounded-xl border border-steel-300/50 shadow-xl shadow-navy-900/5 p-8 sm:p-12">
              <span className="absolute -top-5 left-8 sm:left-12 w-11 h-11 rounded-md bg-signal-500 flex items-center justify-center shadow-lg shadow-signal-500/30">
                <Quote className="w-5.5 h-5.5 text-navy-950" />
              </span>
              <Stars n={featured.rating} />
              <blockquote className="mt-5 font-display text-navy-900 text-xl sm:text-2xl font-bold leading-relaxed text-balance">
                "{pick(lang, featured.quote)}"
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-navy-900 text-signal-400 font-display font-black flex items-center justify-center text-lg">
                  {featured.name.charAt(0)}
                </span>
                <div>
                  <span className="block font-bold text-navy-900">{featured.name}</span>
                  <span className="block text-sm text-steel-500">
                    {pick(lang, featured.role)} · {featured.company} · {featured.location}
                  </span>
                </div>
                <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-signal-600">
                  <BadgeCheck className="w-4 h-4" />
                  {t.testimonials.verified}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((tm, i) => (
            <Reveal key={tm.name} delay={(i % 3) * 100}>
              <figure className="h-full flex flex-col bg-cloud rounded-lg p-6 border border-steel-300/50 hover:border-signal-500/50 hover:shadow-lg transition-all">
                <Stars n={tm.rating} />
                <blockquote className="mt-4 text-sm text-navy-800 leading-relaxed flex-1">
                  "{pick(lang, tm.quote)}"
                </blockquote>
                <div className="mt-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-navy-900/5 text-navy-800 text-[11px] font-semibold">
                    {pick(lang, tm.machine)}
                  </span>
                </div>
                <figcaption className="mt-4 pt-4 border-t border-steel-300/60 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-navy-900 text-signal-400 font-display font-black flex items-center justify-center text-sm shrink-0">
                    {tm.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <span className="block font-bold text-navy-900 text-sm truncate">{tm.name}</span>
                    <span className="block text-xs text-steel-500 truncate">
                      {pick(lang, tm.role)} · {tm.company} · {tm.location}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <button
              onClick={() => navigate("quote")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-signal-500 text-navy-950 font-bold hover:bg-signal-400 transition-colors shadow-xl shadow-signal-500/25"
            >
              {t.common.requestQuote}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
