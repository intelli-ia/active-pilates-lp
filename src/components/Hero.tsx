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
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Imagem mobile — colada no topo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-0 left-0 right-0 z-0 lg:hidden"
        style={{ height: "44%" }}
      >
        <Image
          src="/hero-studio.jpg"
          alt="Aula de Pilates Clássico na Active Pilates"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "70% center" }}
        />
      </motion.div>

      {/* Imagem — altura total da hero, centralizada horizontalmente */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-0 bottom-0 z-0 hidden lg:block"
        style={{ left: "58%", transform: "translateX(-50%)", width: "55%" }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/hero-studio.jpg"
            alt="Aula de Pilates Clássico na Active Pilates"
            fill
            priority
            quality={95}
            sizes="55vw"
            className="object-cover"
            style={{ objectPosition: "70% center" }}
          />
        </div>
      </motion.div>



      {/* Borda da próxima sessão aparecendo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0A0A0A] rounded-t-[5rem] z-20" />

      {/* Wrapper: flex-col mobile / centrado desktop */}
      <div className="relative h-full flex flex-col lg:items-center lg:justify-center">

        {/* Conteúdo */}
        <div className="container mx-auto px-6 md:px-32 relative z-10 pt-[49vh] lg:pt-0 lg:-mt-20">
          <div className="max-w-2xl space-y-5 lg:space-y-7">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
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


      </div>

    </section>
  );
}
