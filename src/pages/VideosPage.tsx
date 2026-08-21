import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import { useLang, pick } from "../i18n";
import { videos, channelUrl, type Video } from "../data";
import Reveal from "../components/Reveal";

function VideoCard({ video, playLabel }: { video: Video; playLabel: string }) {
  const { lang } = useLang();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-steel-300/50 shadow-sm hover:shadow-xl hover:shadow-navy-900/10 hover:border-signal-500/50 transition-all">
      <div className="relative aspect-video bg-navy-950">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={pick(lang, video.title)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={playLabel}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={pick(lang, video.title)}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy-950/25 group-hover:bg-navy-950/10 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-signal-500/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-navy-950 fill-navy-950 ml-0.5" />
              </span>
            </span>
            {video.duration && (
              <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-navy-950/85 text-white text-[11px] font-bold">
                {video.duration}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="p-5">
        <span className="inline-block px-2.5 py-1 rounded bg-signal-500/10 text-signal-600 text-[11px] font-bold uppercase tracking-wider mb-2.5">
          {pick(lang, video.category)}
        </span>
        <h3 className="font-display font-bold text-navy-900 text-base leading-snug">
          {pick(lang, video.title)}
        </h3>
        <p className="mt-1.5 text-sm text-steel-500 leading-relaxed line-clamp-2">
          {pick(lang, video.desc)}
        </p>
      </div>
    </div>
  );
}

export default function VideosPage() {
  const { t } = useLang();

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-900 blueprint-grid pt-40 sm:pt-44 pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-signal-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              {t.videos.label}
            </p>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl tracking-tight">
              {t.videos.title}
            </h1>
            <p className="mt-4 text-steel-300 max-w-2xl leading-relaxed">{t.videos.subtitle}</p>
          </Reveal>
        </div>
      </section>

      {/* Video grid */}
      <section className="bg-cloud py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 100}>
                <VideoCard video={v} playLabel={t.common.playVideo} />
              </Reveal>
            ))}
          </div>

          {/* Channel CTA */}
          <Reveal>
            <div className="mt-14 bg-navy-900 rounded-xl blueprint-grid px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-md bg-[#FF0000] flex items-center justify-center shrink-0">
                  <Youtube className="w-6 h-6 text-white" />
                </span>
                <p className="text-white font-display font-bold text-lg">{t.videos.subscribers}</p>
              </div>
              <a
                href={channelUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FF0000] text-white font-bold text-sm hover:bg-[#e00000] transition-colors shrink-0"
              >
                <Youtube className="w-4 h-4" />
                {t.videos.visitChannel}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
