"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // ── Reveal on scroll ──────────────────────────────────────────────
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // ── Animated counters ──────────────────────────────────────────────
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const target = parseInt(el.dataset.count ?? "0", 10);
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(target * eased).toLocaleString("fr-FR");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach((el) =>
      countObserver.observe(el)
    );

    // ── Parallax ──────────────────────────────────────────────────────
    const onScroll = () => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0");
        const rect = el.getBoundingClientRect();
        const offset =
          (rect.top + rect.height / 2 - window.innerHeight / 2) * speed * -0.5;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── Smooth anchor scroll with nav offset ──────────────────────────
    const handleAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id.length < 2) return;
      const section = document.querySelector(id);
      if (!section) return;
      e.preventDefault();
      const top =
        section.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      io.disconnect();
      countObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleAnchor);
    };
  }, []);

  return null;
}
