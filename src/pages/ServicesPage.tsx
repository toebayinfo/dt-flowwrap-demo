import { ArrowRight, CheckCircle2, Wrench, GraduationCap, Headset, Settings2, ShieldCheck } from "lucide-react";
import { useLang, pick } from "../i18n";
import { services } from "../data";
import Reveal from "../components/Reveal";
import type { PageKey } from "../App";

interface PageProps {
  navigate: (p: PageKey, preset?: string) => void;
}

const iconMap: Record<string, typeof Wrench> = {
  Wrench,
  GraduationCap,
  Headset,
  Settings2,
};

export default function ServicesPage({ navigate }: PageProps) {
  const { lang, t } = useLang();

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-900 blueprint-grid pt-40 sm:pt-44 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.services.label}
            </p>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
              {t.services.title}
            </h1>
            <p className="mt-4 text-steel-300 max-w-2xl leading-relaxed">{t.services.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Wrench;
            return (
              <Reveal key={s.id} delay={(i % 2) * 100}>
                <div className="h-full bg-white rounded-lg border border-steel-300/50 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-navy-900/10 hover:border-signal-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-12 h-12 rounded-md bg-navy-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-signal-400" />
                    </span>
                    <h2 className="font-display font-extrabold text-navy-900 text-xl">
                      {pick(lang, s.title)}
                    </h2>
                  </div>
                  <p className="text-steel-500 leading-relaxed">{pick(lang, s.desc)}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points[lang].map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-navy-800">
                        <CheckCircle2 className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Training image band */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="/dt-flowwrap-demo/images/service-training.png"
          alt="NordPack technician training operators at a machine HMI"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <Reveal>
            <div className="max-w-md">
              <h3 className="font-display font-black text-white text-2xl sm:text-3xl tracking-tight">
                {t.home.why3Title}
              </h3>
              <p className="mt-3 text-steel-300 text-sm sm:text-base leading-relaxed">
                {t.home.why3Text}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 text-center">
              {t.services.processLabel}
            </p>
            <h2 className="font-display font-black text-navy-900 text-3xl sm:text-4xl tracking-tight text-center mb-14">
              {t.services.processTitle}
            </h2>
          </Reveal>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
            {/* connector line */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-steel-300" />
            {t.services.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative text-center lg:text-left">
                  <span className="relative z-10 inline-flex w-12 h-12 rounded-full bg-navy-900 text-signal-400 font-display font-black text-lg items-center justify-center border-4 border-white shadow-lg mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime promise */}
      <section className="bg-navy-900 blueprint-grid py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:items-center">
          <Reveal className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-signal-400" />
              <h2 className="font-display font-black text-white text-3xl tracking-tight">
                {t.services.promiseTitle}
              </h2>
            </div>
            <ul className="space-y-3">
              {[t.services.promise1, t.services.promise2, t.services.promise3, t.services.promise4].map((p) => (
                <li key={p} className="flex gap-3 text-steel-300">
                  <CheckCircle2 className="w-5 h-5 text-signal-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="shrink-0">
            <button
              onClick={() => navigate("quote")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-signal-500 text-navy-950 font-bold hover:bg-signal-400 transition-colors shadow-xl shadow-signal-500/25"
            >
              {t.common.requestQuote}
              <ArrowRight className="w-5 h-5" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
