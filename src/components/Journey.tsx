"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Entre em contato pelo WhatsApp",
    description:
      "Mande uma mensagem para o nosso atendimento 24h no WhatsApp",
  },
  {
    number: "02",
    title: "Agende sua aula experimental gratuita",
    description:
      "Escolha o melhor horário para você e venha conhecer o estúdio pessoalmente. A aula experimental é 100% gratuita e sem compromisso.",
  },
  {
    number: "03",
    title: "Compareça e experimente o método",
    description:
      "Vivencie na prática o Pilates Clássico original guiado pelas nossas instrutoras. Sinta a diferença de um método de verdade desde a primeira aula.",
  },
  {
    number: "04",
    title: "Transforme seu corpo e sua qualidade de vida",
    description:
      "Com constância e orientação especializada, você conquista um corpo mais forte, livre de dores e com mais energia para viver tudo o que importa.",
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-36 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/alinemendonca.pilates_413925014_18409617568013634_3950834793891382527_n.jpg"
          alt="Background"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center scale-105"
          style={{ filter: "blur(4px)" }}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#CF9D2F] font-semibold text-sm uppercase tracking-widest mb-3 block">
            Como funciona
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            Sua jornada começa com{" "}
            <span className="text-[#CF9D2F]">um simples passo.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">

          {/* Linha de fundo (estática) */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2 hidden md:block"
          />

          {/* Linha de progresso (animada) */}
          <motion.div
            className="absolute left-1/2 top-0 w-px bg-[#CF9D2F] -translate-x-1/2 hidden md:block origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex items-center md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Conteúdo */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                  >
                    <p className="text-[#CF9D2F] font-sora font-bold text-xs uppercase tracking-widest mb-2">
                      Passo {step.number}
                    </p>
                    <h3 className="font-sora font-bold text-lg md:text-xl text-white leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Círculo fixo na linha central */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#CF9D2F] items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(207,157,47,0.4)]">
                    <span className="font-sora font-bold text-black text-xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Espaço oposto */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16 md:mt-20"
        >
          <CTAButton
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            label="Garantir minha vaga"
          />
        </motion.div>

      </div>
    </section>
  );
}
