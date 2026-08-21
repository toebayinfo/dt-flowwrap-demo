import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, PackageCheck, Send, Lock } from "lucide-react";
import { useLang, pick } from "../i18n";
import { products } from "../data";
import Reveal from "../components/Reveal";

interface QuotePageProps {
  presetProduct?: string | null;
}

interface FormState {
  systems: string[];
  notSure: boolean;
  product: string;
  speed: string;
  format: string;
  timeline: string;
  budget: string;
  message: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  region: string;
  prefLang: "en" | "fr";
}

export default function QuotePage({ presetProduct }: QuotePageProps) {
  const { lang, t } = useLang();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState<FormState>({
    systems: presetProduct ? [presetProduct] : [],
    notSure: false,
    product: "",
    speed: "",
    format: "",
    timeline: "",
    budget: "",
    message: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "",
    prefLang: lang,
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleSystem = (id: string) => {
    setForm((f) => ({
      ...f,
      notSure: false,
      systems: f.systems.includes(id) ? f.systems.filter((s) => s !== id) : [...f.systems, id],
    }));
  };

  const stepValid = useMemo(() => {
    if (step === 0) return form.systems.length > 0 || form.notSure;
    if (step === 2)
      return form.name.trim().length > 1 && /.+@.+\..+/.test(form.email) && form.company.trim().length > 1;
    return true;
  }, [step, form]);

  const steps = [t.quote.step1, t.quote.step2, t.quote.step3];
  const formats = [
    t.quote.formatPillow,
    t.quote.formatGusset,
    t.quote.formatStandup,
    t.quote.formatCarton,
    t.quote.formatCard,
    t.quote.formatOther,
  ];
  const timelines = [t.quote.timeline1, t.quote.timeline2, t.quote.timeline3, t.quote.timeline4];
  const budgets = [t.quote.budget1, t.quote.budget2, t.quote.budget3, t.quote.budget4, t.quote.budget5];

  const next = () => {
    if (!stepValid) {
      setTouched(true);
      return;
    }
    setTouched(false);
    setStep((s) => Math.min(s + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setTouched(false);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = () => {
    if (!stepValid) {
      setTouched(true);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inputCls =
    "w-full px-4 py-3 rounded-md border border-steel-300 bg-white text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500 focus:border-signal-500 transition-shadow placeholder:text-steel-400";
  const labelCls = "block text-sm font-semibold text-navy-900 mb-1.5";
  const selectCls = `${inputCls} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2364748B%22 stroke-width=%222%22%3E%3Cpath d=%22m6 9 6 6 6-6%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.9rem_center] pr-10`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-cloud flex items-center justify-center px-6 pt-28 pb-16">
        <Reveal>
          <div className="max-w-lg w-full bg-white rounded-xl border border-steel-300/50 shadow-xl p-10 text-center">
            <span className="inline-flex w-16 h-16 rounded-full bg-signal-500/15 items-center justify-center mb-6">
              <PackageCheck className="w-8 h-8 text-signal-600" />
            </span>
            <h1 className="font-display font-black text-navy-900 text-3xl tracking-tight">
              {t.quote.successTitle}
            </h1>
            <p className="mt-4 text-steel-500 leading-relaxed">{t.quote.successText}</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(0);
                setForm({
                  systems: [],
                  notSure: false,
                  product: "",
                  speed: "",
                  format: "",
                  timeline: "",
                  budget: "",
                  message: "",
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  region: "",
                  prefLang: lang,
                });
              }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy-900 text-white font-bold text-sm hover:bg-signal-500 hover:text-navy-950 transition-colors"
            >
              {t.quote.successAgain}
            </button>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="bg-cloud min-h-screen">
      {/* Header */}
      <section className="bg-navy-900 blueprint-grid pt-40 sm:pt-44 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.quote.label}
            </p>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
              {t.quote.title}
            </h1>
            <p className="mt-4 text-steel-300 leading-relaxed">{t.quote.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Form card */}
      <div className="max-w-3xl mx-auto px-6 -mt-10 pb-20">
        <Reveal>
          <div className="bg-white rounded-xl border border-steel-300/50 shadow-xl shadow-navy-900/10 overflow-hidden">
            {/* Progress */}
            {step < 3 && (
              <div className="border-b border-steel-300/50 px-6 sm:px-10 pt-6 pb-5">
                <div className="flex items-center justify-between mb-3">
                  {steps.map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                          i < step
                            ? "bg-signal-500 text-navy-950"
                            : i === step
                              ? "bg-navy-900 text-white"
                              : "bg-steel-300/60 text-steel-500"
                        }`}
                      >
                        {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </span>
                      <span
                        className={`hidden sm:block text-xs font-semibold ${
                          i === step ? "text-navy-900" : "text-steel-400"
                        }`}
                      >
                        {s}
                      </span>
                      {i < steps.length - 1 && <span className="hidden sm:block w-10 lg:w-16 h-px bg-steel-300 mx-1" />}
                    </div>
                  ))}
                </div>
                <div className="h-1.5 bg-steel-300/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-signal-500 rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / 3) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <div className="p-6 sm:p-10">
              {/* STEP 0 — needs */}
              {step === 0 && (
                <div>
                  <h2 className="font-display font-extrabold text-navy-900 text-2xl tracking-tight">
                    {t.quote.step1Title}
                  </h2>
                  <p className="mt-2 text-sm text-steel-500">{t.quote.step1Subtitle}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {products.map((p) => {
                      const active = form.systems.includes(p.id);
                      return (
                        <button
                          key={p.id}
                          onClick={() => toggleSystem(p.id)}
                          className={`flex items-center gap-3 p-3.5 rounded-lg border-2 text-left transition-all ${
                            active
                              ? "border-signal-500 bg-signal-500/5"
                              : "border-steel-300/70 hover:border-steel-400"
                          }`}
                        >
                          <img
                            src={p.image}
                            alt=""
                            className="w-14 h-14 rounded-md object-cover shrink-0"
                          />
                          <span className={`text-sm font-semibold leading-snug ${active ? "text-navy-900" : "text-navy-800"}`}>
                            {pick(lang, p.name)}
                          </span>
                          {active && <CheckCircle2 className="w-5 h-5 text-signal-500 ml-auto shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setForm((f) => ({ ...f, notSure: !f.notSure, systems: [] }))}
                    className={`mt-3 w-full flex items-center gap-3 p-3.5 rounded-lg border-2 text-left transition-all ${
                      form.notSure ? "border-signal-500 bg-signal-500/5" : "border-dashed border-steel-300 hover:border-steel-400"
                    }`}
                  >
                    <span className="text-sm font-semibold text-navy-800">{t.quote.notSure}</span>
                    {form.notSure && <CheckCircle2 className="w-5 h-5 text-signal-500 ml-auto" />}
                  </button>

                  {form.systems.length > 0 && (
                    <p className="mt-4 text-xs font-semibold text-signal-600">
                      {form.systems.length} {t.quote.selectedSystems}
                    </p>
                  )}
                </div>
              )}

              {/* STEP 1 — project details */}
              {step === 1 && (
                <div>
                  <h2 className="font-display font-extrabold text-navy-900 text-2xl tracking-tight">
                    {t.quote.step2Title}
                  </h2>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="q-product">{t.quote.productLabel}</label>
                      <input
                        id="q-product"
                        className={inputCls}
                        placeholder={t.quote.productPlaceholder}
                        value={form.product}
                        onChange={(e) => set("product", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-speed">{t.quote.speedLabel}</label>
                      <input
                        id="q-speed"
                        className={inputCls}
                        placeholder={t.quote.speedPlaceholder}
                        inputMode="numeric"
                        value={form.speed}
                        onChange={(e) => set("speed", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-format">{t.quote.formatLabel}</label>
                      <select
                        id="q-format"
                        className={selectCls}
                        value={form.format}
                        onChange={(e) => set("format", e.target.value)}
                      >
                        <option value="">—</option>
                        {formats.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-timeline">{t.quote.timelineLabel}</label>
                      <select
                        id="q-timeline"
                        className={selectCls}
                        value={form.timeline}
                        onChange={(e) => set("timeline", e.target.value)}
                      >
                        <option value="">—</option>
                        {timelines.map((tl) => (
                          <option key={tl} value={tl}>{tl}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-budget">{t.quote.budgetLabel}</label>
                      <select
                        id="q-budget"
                        className={selectCls}
                        value={form.budget}
                        onChange={(e) => set("budget", e.target.value)}
                      >
                        <option value="">—</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls} htmlFor="q-message">{t.quote.messageLabel}</label>
                      <textarea
                        id="q-message"
                        rows={4}
                        className={`${inputCls} resize-y`}
                        placeholder={t.quote.messagePlaceholder}
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 — contact */}
              {step === 2 && (
                <div>
                  <h2 className="font-display font-extrabold text-navy-900 text-2xl tracking-tight">
                    {t.quote.step3Title}
                  </h2>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls} htmlFor="q-name">{t.quote.nameLabel} *</label>
                      <input
                        id="q-name"
                        className={inputCls}
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-company">{t.quote.companyLabel} *</label>
                      <input
                        id="q-company"
                        className={inputCls}
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-email">{t.quote.emailLabel} *</label>
                      <input
                        id="q-email"
                        type="email"
                        className={inputCls}
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-phone">{t.quote.phoneLabel}</label>
                      <input
                        id="q-phone"
                        type="tel"
                        className={inputCls}
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label className={labelCls} htmlFor="q-region">{t.quote.regionLabel}</label>
                      <input
                        id="q-region"
                        className={inputCls}
                        value={form.region}
                        onChange={(e) => set("region", e.target.value)}
                        autoComplete="address-level1"
                      />
                    </div>
                    <div>
                      <span className={labelCls}>{t.quote.langLabel}</span>
                      <div className="flex rounded-md border border-steel-300 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => set("prefLang", "en")}
                          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                            form.prefLang === "en" ? "bg-navy-900 text-white" : "bg-white text-navy-800 hover:bg-cloud"
                          }`}
                        >
                          {t.quote.langEn}
                        </button>
                        <button
                          type="button"
                          onClick={() => set("prefLang", "fr")}
                          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                            form.prefLang === "fr" ? "bg-navy-900 text-white" : "bg-white text-navy-800 hover:bg-cloud"
                          }`}
                        >
                          {t.quote.langFr}
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 flex items-center gap-2 text-xs text-steel-500">
                    <Lock className="w-3.5 h-3.5" />
                    {t.quote.privacy}
                  </p>
                </div>
              )}

              {/* STEP 3 — review */}
              {step === 3 && (
                <div>
                  <h2 className="font-display font-extrabold text-navy-900 text-2xl tracking-tight">
                    {t.quote.reviewTitle}
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div className="bg-cloud rounded-lg p-5 border border-steel-300/50">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-steel-500 mb-3">
                        {t.quote.reviewSystems}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {form.notSure && (
                          <span className="px-3 py-1.5 rounded-full bg-navy-900 text-white text-xs font-semibold">
                            {t.quote.notSure}
                          </span>
                        )}
                        {form.systems.map((id) => {
                          const p = products.find((pr) => pr.id === id);
                          return p ? (
                            <span key={id} className="px-3 py-1.5 rounded-full bg-navy-900 text-white text-xs font-semibold">
                              {pick(lang, p.name)}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>

                    <div className="bg-cloud rounded-lg p-5 border border-steel-300/50">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-steel-500 mb-3">
                        {t.quote.reviewProject}
                      </h3>
                      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                        {form.product && (
                          <div><dt className="text-steel-500">{t.quote.productLabel}</dt><dd className="font-semibold text-navy-900">{form.product}</dd></div>
                        )}
                        {form.speed && (
                          <div><dt className="text-steel-500">{t.quote.speedLabel}</dt><dd className="font-semibold text-navy-900">{form.speed}</dd></div>
                        )}
                        {form.format && (
                          <div><dt className="text-steel-500">{t.quote.formatLabel}</dt><dd className="font-semibold text-navy-900">{form.format}</dd></div>
                        )}
                        {form.timeline && (
                          <div><dt className="text-steel-500">{t.quote.timelineLabel}</dt><dd className="font-semibold text-navy-900">{form.timeline}</dd></div>
                        )}
                        {form.budget && (
                          <div><dt className="text-steel-500">{t.quote.budgetLabel}</dt><dd className="font-semibold text-navy-900">{form.budget}</dd></div>
                        )}
                        {form.message && (
                          <div className="sm:col-span-2"><dt className="text-steel-500">{t.quote.messageLabel}</dt><dd className="font-semibold text-navy-900">{form.message}</dd></div>
                        )}
                      </dl>
                    </div>

                    <div className="bg-cloud rounded-lg p-5 border border-steel-300/50">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-steel-500 mb-3">
                        {t.quote.reviewContact}
                      </h3>
                      <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                        <div><dt className="text-steel-500">{t.quote.nameLabel}</dt><dd className="font-semibold text-navy-900">{form.name}</dd></div>
                        <div><dt className="text-steel-500">{t.quote.companyLabel}</dt><dd className="font-semibold text-navy-900">{form.company}</dd></div>
                        <div><dt className="text-steel-500">{t.quote.emailLabel}</dt><dd className="font-semibold text-navy-900">{form.email}</dd></div>
                        {form.phone && <div><dt className="text-steel-500">{t.quote.phoneLabel}</dt><dd className="font-semibold text-navy-900">{form.phone}</dd></div>}
                        {form.region && <div><dt className="text-steel-500">{t.quote.regionLabel}</dt><dd className="font-semibold text-navy-900">{form.region}</dd></div>}
                        <div><dt className="text-steel-500">{t.quote.langLabel}</dt><dd className="font-semibold text-navy-900">{form.prefLang === "fr" ? "Français" : "English"}</dd></div>
                      </dl>
                    </div>
                  </div>
                </div>
              )}

              {/* Error */}
              {touched && !stepValid && (
                <p className="mt-5 text-sm font-semibold text-red-600">{t.quote.required}</p>
              )}

              {/* Nav buttons */}
              <div className="mt-8 flex items-center justify-between gap-4">
                {step > 0 ? (
                  <button
                    onClick={back}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border-2 border-steel-300 text-navy-800 font-bold text-sm hover:border-navy-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t.quote.back}
                  </button>
                ) : (
                  <span />
                )}

                {step < 2 && (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-navy-900 text-white font-bold text-sm hover:bg-signal-500 hover:text-navy-950 transition-colors"
                  >
                    {t.quote.continue}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {step === 2 && (
                  <button
                    onClick={next}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-navy-900 text-white font-bold text-sm hover:bg-signal-500 hover:text-navy-950 transition-colors"
                  >
                    {t.quote.review}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
                {step === 3 && (
                  <button
                    onClick={submit}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-signal-500 text-navy-950 font-bold text-sm hover:bg-signal-400 transition-colors shadow-lg shadow-signal-500/30"
                  >
                    <Send className="w-4 h-4" />
                    {t.quote.submit}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* What happens next — reduces friction, sets expectations */}
        <Reveal delay={120}>
          <div className="mt-10">
            <h2 className="font-display font-extrabold text-navy-900 text-xl tracking-tight text-center mb-6">
              {t.quote.nextTitle}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: t.quote.next1Title, text: t.quote.next1Text },
                { title: t.quote.next2Title, text: t.quote.next2Text },
                { title: t.quote.next3Title, text: t.quote.next3Text },
              ].map((s, i) => (
                <div key={s.title} className="bg-white rounded-lg border border-steel-300/50 p-5 text-center">
                  <span className="inline-flex w-9 h-9 rounded-full bg-signal-500/10 text-signal-600 font-display font-black items-center justify-center mb-3">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-bold text-navy-900 text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-steel-500 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
