"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { WA_LINK } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Cards flutuantes sobre a hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ duration: 0.8, delay: 0.6, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
        className="absolute hidden lg:block z-10"
        style={{ bottom: "18%", right: "32%" }}
      >
        <div className="relative w-44 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60">
          <Image
            src="/hero-card-1.webp"
            alt="Aula de Pilates na Active Pilates"
            fill
            quality={92}
            sizes="180px"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 0.8, delay: 0.8, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
        className="absolute hidden lg:block z-0"
        style={{ top: "12%", right: "16%" }}
      >
        <div className="relative w-44 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60">
          <Image
            src="/hero-card-2.webp"
            alt="Aula de Pilates na Active Pilates"
            fill
            quality={92}
            sizes="180px"
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </motion.div>

      {/* Imagem — colada na direita, atrás de tudo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-0 h-full hidden lg:block z-0 overflow-hidden"
        style={{ left: "38%", width: "70%" }}
      >
        <Image
          src="/hero-model.webp"
          alt="Praticante de Pilates Clássico na Active Pilates"
          fill
          priority
          quality={95}
          sizes="70vw"
          className="object-cover object-left"
        />
      </motion.div>



      {/* Borda da próxima sessão aparecendo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0A0A0A] rounded-t-[5rem] z-20" />

      {/* Conteúdo */}
      <div className="container mx-auto px-6 md:px-32 relative z-10 -mt-36 lg:-mt-20">
        <div className="max-w-2xl space-y-5 lg:space-y-7">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.svg"
              alt="Active Pilates"
              width={110}
              height={102}
              priority
              className="w-20 lg:w-[110px]"
            />
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sora font-bold text-[#CF9D2F] text-[1.15rem] md:text-[2rem] lg:text-[2.4rem] leading-[1.22]"
          >
            <span className="block lg:whitespace-nowrap">Treine no estúdio com 20 anos</span>
            <span className="block lg:whitespace-nowrap">de excelência e tradição</span>
            <span className="block lg:whitespace-nowrap">em Pilates Clássico na Bahia.</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-black/60 text-sm md:text-lg leading-relaxed max-w-xs lg:max-w-none"
          >
            Te preparamos para ter um corpo forte, livre de dores e totalmente
            saudável através da prática do Pilates original. Um acompanhamento
            completo para a sua qualidade de vida.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Garantir minha vaga"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center gap-0 divide-x divide-gray-200"
          >
            {[
              { num: 20, prefix: "+", suffix: "", label: "anos de experiência" },
              { num: 3000, prefix: "+", suffix: "", label: "profissionais formados" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col px-5 first:pl-0">
                <AnimatedNumber
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-sora text-[#CF9D2F] font-bold text-2xl leading-none"
                />
                <span className="text-black/40 text-xs mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
