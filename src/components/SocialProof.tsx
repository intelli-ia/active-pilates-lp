"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    quote: "Galera muito atenciosa! Atenção 100% com o aluno, gostei bastante.",
    author: "Janderson Santana",
  },
  {
    quote: "Indico todos vocês, melhor escola náutica.",
    author: "Pablo Cardoso",
  },
  {
    quote: "Atendimento extraordinário.",
    author: "Talysson Felipe",
  },
  {
    quote: "Aula fantástica com o Instrutor de Motoaquática Barretão!!",
    author: "Luis Fernando",
  },
  {
    quote: "O curso é sensacional. Barretão ama o que faz e só libera o aluno após o processo de aprendizagem ser concluído.",
    author: "Alex Silvestre",
  },
  {
    quote: "Com certeza a melhor que temos em Salvador e região!!",
    author: "Esdras Pimentel",
  },
  {
    quote: "Super satisfeita com a aula! Sou iniciante, fui recebida por Adriele, muito solicita nos cadastros e agendamentos.",
    author: "Rafaela Leal",
  },
  {
    quote: "Nunca tinha pilotado um jet e simplesmente saí da aula com Barretão com muita confiança. Muito atencioso e dedicado! Top dos tops.",
    author: "Luiza Calasans",
  },
  {
    quote: "Experiência incrível e super recomendo, eu amei e foi super aproveitado.",
    author: "Thiago Souza Fonseca",
  },
  {
    quote: "Excelentes! Super recomendo!",
    author: "Fernanda Santana",
  },
  {
    quote: "Experiência incrível, super indico. Atendimento de excelência.",
    author: "Jaime Bonfim",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 11);

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-16 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00B8D9]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-title text-3xl md:text-5xl font-bold text-[#1C1C1C] leading-tight">
            Melhor do que a gente falar, é deixar
            <span className="block bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent mt-2">
              nossos novos pilotos contarem:
            </span>
          </h2>
        </motion.div>

        {/* Scrolling columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[480px] md:max-h-[600px] overflow-hidden mb-12 md:mb-16"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={26} reverse />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </motion.div>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-3xl font-bold text-[#1C1C1C] mb-6 md:mb-8">
            E você será o nosso próximo piloto!
          </p>
          <CTAButton
            href="https://wa.me/5571991011008"
            target="_blank"
            rel="noopener noreferrer"
            label="Quero ser o próximo"
          />
        </motion.div>
      </div>
    </section>
  );
}
