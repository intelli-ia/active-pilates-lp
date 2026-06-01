"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] overflow-hidden py-20 md:py-32">

      {/* Detalhe decorativo dourado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-[#CF9D2F]/40" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#CF9D2F]/60" />

      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-2xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
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
            className="flex justify-center mb-6"
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
            className="text-white/30 text-sm flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Atendimento pelo WhatsApp
          </motion.p>

        </div>
      </div>
    </section>
  );
}
