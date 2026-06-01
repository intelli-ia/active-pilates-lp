"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export default function DesireSection() {
  return (
    <section className="relative w-full bg-[#1C1C1C] overflow-hidden flex flex-col md:flex-row md:items-stretch md:min-h-screen">

      {/* Vídeo — topo no mobile (quadrado), coluna esquerda no desktop */}
      <div className="w-full aspect-square md:aspect-auto md:w-[38%] md:flex-shrink-0 relative">
        <video
          src="/gallery-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo — abaixo no mobile, coluna direita no desktop */}
      <div className="flex-1 flex items-center py-12 md:py-0">
        <div className="w-full px-6 md:pl-24 md:pr-16 max-w-2xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-[#00B8D9] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Não é só para rico
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-title text-3xl md:text-5xl font-bold text-white leading-tight mb-5 md:mb-6"
          >
            O mundo náutico é mais acessível
            <br />
            do que você imagina
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-10"
          >
            Tirar uma habilitação náutica custa menos da metade de uma CNH.
            Chega de achar que isso é coisa de outro mundo. É mais simples, mais barato e mais divertido do que você pensa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CTAButton
              href="https://wa.me/5571991011008"
              target="_blank"
              rel="noopener noreferrer"
              label="Quero viver essa experiência"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}
