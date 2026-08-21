import { useCallback, useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { LanguageProvider, useLang } from "./i18n";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import VideosPage from "./pages/VideosPage";
import QuotePage from "./pages/QuotePage";

export type PageKey = "home" | "products" | "services" | "testimonials" | "videos" | "quote";

const pageMeta: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "D.T Flow Wrap Machines | Pack Anything Beautifully — Ontario & Québec",
    description:
      "Horizontal flow-wrap, VFFS, roll film, stand-up pouch, cartoning and carry-card packaging systems — installed and supported across North America, in English and French.",
  },
  products: {
    title: "Products | D.T Flow Wrap Machines — Flow-Wrap, VFFS, Pouch, Cartoning",
    description:
      "Explore our full range: T-series horizontal flow-wrap machines, V-series vertical VFFS systems, roll film handling, stand-up bag machines, box & carton packing and carry card packaging.",
  },
  services: {
    title: "Services | D.T Flow Wrap Machines — Installation, Training, Support",
    description:
      "Installation & commissioning, bilingual operator training, after-sales support with Canadian-stocked parts, and custom line configuration.",
  },
  testimonials: {
    title: "Testimonials | D.T Flow Wrap Machines",
    description:
      "What food and consumer goods manufacturers across North America say about D.T packaging lines, installation and after-sales support.",
  },
  videos: {
    title: "Videos | D.T Flow Wrap Machines",
    description:
      "Watch our packaging machines at work — T-series flow wrappers, V-series vertical baggers and more, straight from our YouTube channel.",
  },
  quote: {
    title: "Get a Quote | D.T Flow Wrap Machines",
    description:
      "Tell us what you're packaging and get a configured quote from a real engineer within one business day — in English or French.",
  },
};

function StickyMobileCTA({ page, navigate }: { page: PageKey; navigate: (p: PageKey) => void }) {
  const { t } = useLang();
  if (page === "quote") return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-navy-950/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 flex gap-2.5">
      <a
        href="tel:16473720005"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-md border border-white/25 text-white text-sm font-bold"
      >
        <Phone className="w-4 h-4" />
        {t.hero.callNow}
      </a>
      <button
        onClick={() => navigate("quote")}
        className="flex-1 inline-flex items-center justify-center py-3 rounded-md bg-signal-500 text-white text-sm font-bold shadow-lg shadow-signal-500/30"
      >
        {t.nav.quote}
      </button>
    </div>
  );
}

function Site() {
  const [page, setPage] = useState<PageKey>("home");
  const [quotePreset, setQuotePreset] = useState<string | null>(null);

  const navigate = useCallback((p: PageKey, preset?: string) => {
    setQuotePreset(p === "quote" ? (preset ?? null) : null);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (preset && p === "quote") return;
  }, []);

  useEffect(() => {
    document.title = pageMeta[page].title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pageMeta[page].description);
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} navigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "products" && <ProductsPage navigate={navigate} />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "testimonials" && <TestimonialsPage navigate={navigate} />}
        {page === "videos" && <VideosPage />}
        {page === "quote" && <QuotePage presetProduct={quotePreset} />}
      </main>
      <Footer navigate={navigate} />
      <StickyMobileCTA page={page} navigate={navigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
