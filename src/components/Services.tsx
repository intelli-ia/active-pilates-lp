"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section id="para-quem" className="bg-white py-20 md:py-32">

      {/* Container full-width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-black mx-6 md:mx-16 rounded-3xl px-8 md:px-16 py-12 md:py-16"
      >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="max-w-lg">
            <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Te acompanhamos para praticar o método de Joseph Pilates com{" "}
              <span className="text-[#CF9D2F]">precisão e segurança.</span>
            </h2>
            <p className="text-white/50 text-sm md:text-base mb-8 max-w-2xl">
              Independente do seu nível, a Active te leva para o próximo nível no Pilates Clássico.
            </p>
            <CTAButton
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              label="Garantir minha vaga"
            />
          </div>
          <div className="relative w-full md:flex-1 h-72 md:h-[420px] shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/IMG-20240618-WA0081.webp"
              alt="Aula de Pilates Clássico na Active Pilates"
              fill
              quality={92}
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* 3 colunas */}
      <div className="px-6 md:px-16 mt-12 md:mt-16">
        <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-black text-center mb-10 md:mb-14">
          Para quem é a <span className="text-[#CF9D2F]">Active Pilates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {audiences.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <span className="font-sora font-bold text-5xl text-black/8 leading-none block mb-4">
                {item.number}
              </span>
              <h3 className="font-sora font-bold text-lg md:text-xl text-black leading-snug mb-3">
                {item.title}
              </h3>
              <div className="w-8 h-0.5 bg-[#CF9D2F] mb-3" />
              <p className="text-black/55 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
