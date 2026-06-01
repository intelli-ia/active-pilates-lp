"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const audiences = [
  {
    number: "01",
    title: "Profissionais da saúde e do movimento",
    description:
      "Fisioterapeutas, educadores físicos e bailarinos que querem treinar em um estúdio à altura do seu conhecimento corporal, exigindo profundidade técnica e linhagem reconhecida.",
  },
  {
    number: "02",
    title: "Iniciantes com vontade de começar certo",
    description:
      "Quem quer começar no Pilates com uma base sólida, aprendendo o método original no mesmo estúdio que forma os melhores profissionais do mercado.",
  },
  {
    number: "03",
    title: "Quem convive com dores ou tensões",
    description:
      "Pessoas que precisam de alívio e reabilitação, contando com a nossa especialização avançada em dor para recuperar o bem-estar e a segurança nos movimentos.",
  },
];

export default function ForWhomSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.25) setActiveCard(0);
    else if (v < 0.55) setActiveCard(1);
    else setActiveCard(2);
  });

  const item = audiences[activeCard];

  return (
    <div ref={containerRef} id="para-quem" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen bg-white flex items-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Esquerda — H1 estático */}
            <div className="lg:pl-8">
              <div className="bg-black rounded-3xl p-7 lg:p-12">
                <span className="text-[#CF9D2F] font-semibold text-sm uppercase tracking-widest mb-3 block">
                  Para quem é
                </span>
                <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Te acompanhamos para praticar o método de Joseph Pilates com{" "}
                  <span className="text-[#CF9D2F]">precisão e segurança.</span>
                </h2>
                <p className="text-white/50 text-sm md:text-base mb-8">
                  Independente do seu nível, a Active te leva para o próximo nível no Pilates Clássico.
                </p>
                <CTAButton
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  label="Garantir minha vaga"
                />
              </div>
            </div>

            {/* Direita — Card animado + indicadores */}
            <div className="flex items-center gap-6 lg:pl-16">

              {/* Card ativo */}
              <div className="relative h-52 flex-1 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-start"
                  >
                    <span
                      className="absolute -left-2 top-10 font-sora font-bold select-none pointer-events-none leading-none text-black/5"
                      style={{ fontSize: "9rem" }}
                    >
                      {item.number}
                    </span>
                    <div className="relative z-10 pt-6 max-w-xs">
                      <h3 className="font-sora font-bold text-xl md:text-2xl text-black leading-snug mb-3">
                        {item.title}
                      </h3>
                      <p className="text-black/55 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Indicadores verticais */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                {audiences.map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full transition-all duration-500"
                    style={{
                      height: i === activeCard ? "2rem" : "0.5rem",
                      backgroundColor: i === activeCard ? "#CF9D2F" : "#D4D4D4",
                    }}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
