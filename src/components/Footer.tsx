import { MapPin, Phone, Mail, Clock, Youtube, Linkedin, Globe } from "lucide-react";
import { useLang, pick } from "../i18n";
import { products, channelUrl } from "../data";
import type { PageKey } from "../App";

interface FooterProps {
  navigate: (p: PageKey) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const { lang, t } = useLang();

  return (
    <footer className="bg-navy-950 text-steel-300">
      {/* bilingual badge strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-steel-400">
          <Globe className="w-3.5 h-3.5 text-signal-500" />
          {t.footer.bilingualBadge}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="inline-block bg-white rounded-lg px-4 py-3 mb-4">
            <img
              src="/dt-flowwrap-demo/images/logo.png"
              alt="D.T Flow Wrap Machines — Pack anything beautifully"
              className="h-11 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-steel-400">{t.footer.tagline}</p>
          <div className="flex gap-3 mt-5">
            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-md bg-white/5 hover:bg-signal-500 hover:text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-md bg-white/5 hover:bg-signal-500 hover:text-white flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
            {t.footer.productsTitle}
          </h4>
          <ul className="space-y-2.5 text-sm">
            {products.map((p) => (
              <li key={p.id}>
                <button onClick={() => navigate("products")} className="hover:text-signal-400 transition-colors">
                  {pick(lang, p.name)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
            {t.footer.companyTitle}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><button onClick={() => navigate("home")} className="hover:text-signal-400 transition-colors">{t.footer.about}</button></li>
            <li><button onClick={() => navigate("services")} className="hover:text-signal-400 transition-colors">{t.nav.services}</button></li>
            <li><button onClick={() => navigate("testimonials")} className="hover:text-signal-400 transition-colors">{t.footer.testimonials}</button></li>
            <li><button onClick={() => navigate("videos")} className="hover:text-signal-400 transition-colors">{t.footer.videos}</button></li>
            <li><button onClick={() => navigate("quote")} className="hover:text-signal-400 transition-colors">{t.footer.quote}</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" />
              <span>
                <span className="block text-white font-medium">{t.footer.onOffice}</span>
                Toronto, ON
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-signal-500 shrink-0 mt-0.5" />
              <span>
                <span className="block text-white font-medium">{t.footer.qcOffice}</span>
                Montréal, QC
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-signal-500 shrink-0" />
              <a href="tel:16473720005" className="hover:text-signal-400 transition-colors">647-372-0005</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-signal-500 shrink-0" />
              <a href="mailto:info@flow-wrap-machines.com" className="hover:text-signal-400 transition-colors">
                info@flow-wrap-machines.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Clock className="w-4 h-4 text-signal-500 shrink-0" />
              {t.footer.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 pb-24 sm:pb-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel-500">
          <span>© {new Date().getFullYear()} D.T Flow Wrap Machines — {t.footer.rights}</span>
          <span>{t.common.since} · Toronto, ON · Montréal, QC · flow-wrap-machines.com</span>
        </div>
      </div>
    </footer>
  );
}
