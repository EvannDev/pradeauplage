"use client";

import { useState, useEffect, useCallback } from "react";

type GalleryItem = {
  cls: string;
  src: string;
  fullSrc: string;
  alt: string;
  caption: string;
};

const ITEMS: GalleryItem[] = [
  {
    cls: "gallery__item--a",
    src: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1400&q=80",
    fullSrc: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=2000&q=90",
    alt: "Plage et eau turquoise",
    caption: "Vue depuis la terrasse",
  },
  {
    cls: "gallery__item--b",
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1400&q=90",
    alt: "Plat de fruits de mer",
    caption: "Plateau de la mer",
  },
  {
    cls: "gallery__item--c",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=90",
    alt: "Pinède sur la Côte d'Azur",
    caption: "Sous la pinède",
  },
  {
    cls: "gallery__item--d",
    src: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1400&q=90",
    alt: "Apéritif au coucher du soleil",
    caption: "L'heure dorée",
  },
  {
    cls: "gallery__item--e",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90",
    alt: "Salle du restaurant",
    caption: "Notre salle",
  },
  {
    cls: "gallery__item--f",
    src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1400&q=90",
    alt: "Champ de lavande de Provence",
    caption: "Esprit Provence",
  },
  {
    cls: "gallery__item--g",
    src: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80",
    fullSrc: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1400&q=90",
    alt: "Tartare et entrée fraîche",
    caption: "L'entrée du jour",
  },
  {
    cls: "gallery__item--h",
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=1400&q=80",
    fullSrc: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=2000&q=90",
    alt: "Côte méditerranéenne au coucher du soleil",
    caption: "Coucher de soleil sur Giens",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;
  const current = isOpen ? ITEMS[lightboxIndex] : null;

  const openAt = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + ITEMS.length) % ITEMS.length : null)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % ITEMS.length : null)),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    // Prevent page scroll when lightbox is open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <section className="section" id="galerie">
        <div className="container">
          <div className="section__head">
            <div>
              <div className="eyebrow reveal">Galerie</div>
              <h2
                className="section__title reveal reveal--delay-1"
                style={{ marginTop: 20 }}
              >
                L&apos;<em>album</em> de l&apos;été.
              </h2>
            </div>
            <p className="section__intro reveal reveal--delay-2">
              Quelques instantanés du lieu, des plats et de l&apos;ambiance —
              pour donner un avant-goût avant votre venue.
            </p>
          </div>

          <div className="gallery reveal" role="list" aria-label="Galerie photos Pradeau Plage">
            {ITEMS.map((item, i) => (
              <figure
                key={item.cls}
                role="listitem"
                className={`gallery__item ${item.cls}`}
                style={{ "--i": i } as React.CSSProperties}
                tabIndex={0}
                aria-label={`${item.alt} — appuyer pour agrandir`}
                onClick={() => openAt(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openAt(i);
                  }
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption className="gallery__caption">
                  <span className="gallery__caption-text">{item.caption}</span>
                  <span className="gallery__caption-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7" />
                    </svg>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Vue agrandie de la galerie"
        className={`lightbox${isOpen ? " is-open" : ""}`}
        aria-hidden={isOpen ? undefined : "true"}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {/* Close */}
        <button className="lightbox__close" aria-label="Fermer" onClick={close}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Prev */}
        <button
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Image précédente"
          onClick={(e) => { e.stopPropagation(); prev(); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Image + caption */}
        {current && (
          <div className="lightbox__content" key={lightboxIndex}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.fullSrc} alt={current.alt} />
            <p className="lightbox__caption">{current.caption}</p>
          </div>
        )}

        {/* Next */}
        <button
          className="lightbox__nav lightbox__nav--next"
          aria-label="Image suivante"
          onClick={(e) => { e.stopPropagation(); next(); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dot counter */}
        <div className="lightbox__dots" aria-hidden="true">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              className={`lightbox__dot${i === lightboxIndex ? " is-active" : ""}`}
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
              tabIndex={-1}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter label */}
        {isOpen && (
          <div className="lightbox__counter" aria-live="polite">
            {lightboxIndex! + 1} / {ITEMS.length}
          </div>
        )}
      </div>
    </>
  );
}
