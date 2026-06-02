"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const founders = [
  {
    name: "Aline Mendonça",
    title: "Fisioterapeuta & Fundadora",
    bio: "Professora da 3ª geração, certificada por Inelia Garcia e com pós-graduação em dor. Com intercâmbios de Pilates no Canadá desde 2010 e mais de 3.000 profissionais formados em duas décadas de carreira, ela traz toda essa expertise de mestre para garantir a sua evolução e segurança.",
    image: "/aline.webp",
    objectPosition: "center top",
  },
  {
    name: "Maira Baqueiro",
    title: "Fisioterapeuta & Co-fundadora",
    bio: "Também professora da 3ª geração, é a primeira instrutora da Bahia e de Sergipe certificada por Inélia Garcia pelo Authentic Pilates. Foram 980 horas de formação presencial em São Paulo sob supervisão direta, um nível de excelência técnica que agora é inteiramente dedicado à sua qualidade de vida.",
    image: "/maira.webp",
    objectPosition: "center 70%",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative w-full pt-8 pb-20 md:pt-12 md:pb-36 bg-[#0A0A0A] border-0 -mt-px">
      <div className="container mx-auto px-6 md:px-16">

        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mb-16 md:mb-24 mx-auto text-center"
        >
<h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            A linhagem mais autêntica do Pilates Clássico{" "}
            <span className="text-[#CF9D2F]">
              cuidando do seu corpo aqui,<br className="hidden lg:block" /> em Salvador.
            </span>
          </h2>
        </motion.div>

        {/* Fundadoras */}
        <div className="flex flex-col gap-16 md:gap-24">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-14 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Imagem */}
              <div className="relative w-full md:w-2/5 shrink-0 h-80 md:h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  quality={92}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  style={{ objectPosition: founder.objectPosition ?? "center top" }}
                />
              </div>

              <div className="space-y-4 md:w-3/5">
                <div>
                  <p className="text-[#CF9D2F] text-xs font-semibold uppercase tracking-widest mb-1">
                    {founder.title}
                  </p>
                  <h3 className="font-sora font-bold text-xl md:text-2xl text-white leading-tight">
                    {founder.name}
                  </h3>
                </div>
                <div className="w-10 h-0.5 bg-[#CF9D2F]" />
                <p className="text-white/55 text-lg leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
