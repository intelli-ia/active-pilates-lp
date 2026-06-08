"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const testimonials = [
  {
    name: "Vanessa Gonçalo",
    quote:
      "Experiência excelente. Profissionais altamente qualificados e preparados, que me motivaram a inserir o Pilates Clássico em meu espaço, e amar ainda mais esse método incrível.",
  },
  {
    name: "Stephanie Crocker",
    quote:
      "A Active Pilates é um excelente estúdio. Os professores são muito experientes e todos são super simpáticos. O Pilates me ajudou a me recuperar da cirurgia na coluna. Em menos de um ano, eu me sinto muito mais forte.",
  },
  {
    name: "Taanni Andrade",
    quote:
      "Melhor escola de Pilates, sem sombra de dúvidas. Fiz minha certificação lá e recomendo MUITO!! Profissionais excelentes e extremamente capacitadas que, com certeza, são referências para mim.",
  },
  {
    name: "Bianca Lima",
    quote:
      "Conhecer a Active Pilates foi para mim muito enriquecedor!! Do ponto de vista profissional, com o maravilhoso e organizado curso. Trouxe transformações incríveis para meu corpo. Super recomendo!",
  },
  {
    name: "Iêda Macário",
    quote:
      "Faço pilates no estúdio Active há mais de dez anos. A equipe é maravilhosa, com profissionais competentes e simpáticos.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#CF9D2F]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex flex-col flex-shrink-0 w-72 sm:w-80 h-72 sm:h-80 bg-white/8 rounded-3xl p-5 sm:p-7 border border-white/10 mx-2 sm:mx-3">
      <Stars />
      <blockquote className="flex-1 text-white/65 text-sm leading-relaxed overflow-hidden">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 border-t border-white/10 pt-4 mt-4">
        <div className="w-8 h-8 rounded-full bg-[#CF9D2F]/20 flex items-center justify-center flex-shrink-0">
          <span className="text-[#CF9D2F] font-bold text-xs">{t.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-[#CF9D2F] text-xs">Google Reviews ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];
  const doubledReversed = [...testimonials].reverse().concat([...testimonials].reverse());

  return (
    <section id="depoimentos" className="relative w-full py-20 md:py-36 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#CF9D2F] font-semibold text-sm uppercase tracking-widest mb-4 block text-center">
            Depoimentos
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight max-w-2xl mx-auto text-center">
            Veja a experiência de quem já pratica o método original com a nossa equipe.
          </h2>
        </motion.div>
      </div>

      {/* Marquee — esquerda para direita */}
      <div className="relative flex overflow-hidden mb-4">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee — direita para esquerda */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {doubledReversed.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      <p className="text-white/40 text-xs tracking-wide text-center mt-6">São +100 avaliações no Google</p>

      <div className="container mx-auto px-6 md:px-16 mt-6 flex justify-center">
        <CTAButton
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          label="Garantir minha vaga"
        />
      </div>

    </section>
  );
}
