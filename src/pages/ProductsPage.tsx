import { ArrowRight, CheckCircle2, Gauge, Info } from "lucide-react";
import { useLang, pick } from "../i18n";
import { products } from "../data";
import Reveal from "../components/Reveal";
import type { PageKey } from "../App";

interface PageProps {
  navigate: (p: PageKey, preset?: string) => void;
}

export default function ProductsPage({ navigate }: PageProps) {
  const { lang, t } = useLang();

  return (
    <div className="pt-28 sm:pt-32">
      {/* Header */}
      <section className="bg-navy-900 blueprint-grid pb-14 -mt-28 sm:-mt-32 pt-40 sm:pt-44">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.products.label}
            </p>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
              {t.products.title}
            </h1>
            <p className="mt-4 text-steel-300 max-w-2xl leading-relaxed">{t.products.subtitle}</p>
          </Reveal>

          {/* Quick jump chips */}
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium text-steel-300 hover:border-signal-500 hover:text-white transition-colors"
                >
                  {pick(lang, p.name)}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product rows */}
      <section className="bg-cloud">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 space-y-16 sm:space-y-24">
          {products.map((p, i) => (
            <Reveal key={p.id}>
              <article
                id={p.id}
                className="scroll-mt-32 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -inset-3 hazard-stripes opacity-[0.12] rounded-xl" />
                  <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-navy-900/20 border border-steel-300/50">
                    <img
                      src={p.image}
                      alt={pick(lang, p.name)}
                      loading="lazy"
                      className="w-full aspect-[3/2] object-cover"
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded bg-navy-950/85 text-white text-xs font-bold backdrop-blur">
                      <Gauge className="w-3.5 h-3.5 text-signal-400" />
                      {t.common.upTo} {p.speed.value} {pick(lang, p.speed.unit)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-2.5 py-1 rounded bg-signal-500/10 text-signal-600 text-[11px] font-bold uppercase tracking-wider mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display font-black text-navy-900 text-2xl sm:text-3xl tracking-tight">
                    {pick(lang, p.name)}
                  </h2>
                  <p className="mt-3 text-steel-500 leading-relaxed">{pick(lang, p.desc)}</p>

                  <h3 className="mt-6 font-display font-bold text-navy-900 text-sm uppercase tracking-wider">
                    {t.common.keyFeatures}
                  </h3>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                    {p.features[lang].map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-navy-800">
                        <CheckCircle2 className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 font-display font-bold text-navy-900 text-sm uppercase tracking-wider">
                    {t.common.typicalApplications}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.applications[lang].map((a) => (
                      <span
                        key={a}
                        className="px-3 py-1.5 rounded-full bg-white border border-steel-300/70 text-xs font-medium text-navy-800"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  {p.models && p.models.length > 0 && (
                    <>
                      <h3 className="mt-6 font-display font-bold text-navy-900 text-sm uppercase tracking-wider">
                        {t.products.modelsLabel}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.models.map((m) => (
                          <span
                            key={m}
                            className="px-3 py-1.5 rounded-md bg-navy-900 text-white text-xs font-bold tracking-wide"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </>
                  )}

                  <button
                    onClick={() => navigate("quote", p.id)}
                    className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-navy-900 text-white font-bold text-sm hover:bg-signal-500 hover:text-navy-950 transition-colors shadow-lg"
                  >
                    {t.products.configure}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Spec note */}
          <Reveal>
            <div className="flex gap-3 items-start bg-white border border-steel-300/60 rounded-lg p-5 text-sm text-steel-500">
              <Info className="w-5 h-5 text-signal-500 shrink-0 mt-0.5" />
              {t.products.note}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
