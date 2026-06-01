"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WA_LINK } from "@/lib/constants";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [darkBg, setDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const pastHero = hero.getBoundingClientRect().bottom <= 0;
      setVisible(pastHero);

      if (pastHero) {
        const navbarY = 40;
        const sections = document.querySelectorAll("section, footer");
        let isDark = false;

        for (const section of Array.from(sections)) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarY && rect.bottom > navbarY) {
            const bg = window.getComputedStyle(section).backgroundColor;
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const alpha = match[4] !== undefined ? +match[4] : 1;
              if (alpha < 0.1) break;
              const luminance = (+match[1] * 299 + +match[2] * 587 + +match[3] * 114) / 1000;
              isDark = luminance < 100;
            }
            break;
          }
        }
        setDarkBg(isDark);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div
        style={{ WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)" }}
        className="flex items-center justify-between gap-6 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 shadow-lg w-full max-w-xl transform-gpu"
      >
        {/* Logo text */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Active Pilates"
            width={60}
            height={56}
            className={darkBg ? "invert" : ""}
          />
        </Link>

        {/* CTA */}
        <Link
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-[#CF9D2F] hover:bg-[#B8891A] text-black font-semibold text-sm rounded-full px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(207,157,47,0.4)] active:translate-y-0.5"
        >
          Garantir minha vaga
        </Link>
      </div>
    </header>
  );
}
