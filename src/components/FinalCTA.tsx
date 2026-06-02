"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32">

      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG-20250211-WA0206.webp"
          alt="Background"
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Detalhe decorativo dourado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#CF9D2F]/40 z-10" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#CF9D2F]/60 z-10" />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        <div className="relative max-w-2xl mx-auto text-center">
          {/* Frosted glass backdrop */}
          <div
            className="absolute inset-0 -mx-24 -my-10 rounded-3xl"
            style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", background: "rgba(0,0,0,0.25)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 mb-8"
          >
            <span className="text-[#CF9D2F]/60 font-semibold text-sm uppercase tracking-widest mb-6 block">
              Active Pilates
            </span>
            <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-6">
              Treine com a linhagem mais autêntica do Pilates Clássico{" "}
              <span className="text-[#CF9D2F]">em Salvador.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              Mais de 20 anos de excelência, 3.000+ profissionais formados e
              uma equipe especializada em dor para garantir a sua segurança e evolução.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center mb-6"
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Garantir minha vaga"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 text-white/30 text-sm flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Atendimento 24h pelo WhatsApp
          </motion.p>

        </div>
      </div>
    </section>
  );
}
