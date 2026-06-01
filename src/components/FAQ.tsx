"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WA_LINK } from "@/lib/constants";

const faqs = [
  {
    q: "Nunca fiz Pilates e não tenho flexibilidade. Posso começar mesmo assim?",
    a: "Sim. O Pilates serve justamente para devolver a mobilidade e a força que o corpo perdeu. Nossas aulas são adaptadas ao seu nível atual, e os instrutores vão te guiar do zero, construindo a sua flexibilidade e força no seu próprio ritmo.",
  },
  {
    q: "Tenho dor crônica ou lesão (ex: hérnia de disco). O Pilates Clássico é seguro para mim?",
    a: "Totalmente. Esse é um dos nossos maiores diferenciais. Com a especialização em dor da nossa fundadora e a formação rigorosa da equipe, o estúdio é o ambiente mais seguro para a sua reabilitação. Os exercícios originais focam exatamente na saúde da coluna e no alívio de tensões.",
  },
  {
    q: "Qual a diferença do Pilates Clássico da Active para o Pilates \"comum\"?",
    a: "No Pilates Clássico, nós seguimos exatamente o sistema criado por Joseph Pilates. Usamos aparelhos com as medidas e tensões de molas originais e aplicamos a dinâmica correta de movimento. O resultado prático disso é que você ganha força, corrige a postura e alivia as dores de forma muito mais rápida e eficiente.",
  },
  {
    q: "Como funcionam as aulas e quantos alunos treinam por horário?",
    a: "Nossas aulas duram em média 50 a 55 minutos. Para manter o nosso padrão de qualidade, trabalhamos apenas com atendimentos personalizados e turmas bem reduzidas. Assim, garantimos que os instrutores acompanhem cada detalhe da sua execução.",
  },
  {
    q: "Vocês aceitam Wellhub (antigo Gympass)?",
    a: "Sim! Nós fazemos parte da rede Wellhub e atendemos alunos a partir do plano Gold. Você treina com a nossa estrutura e qualidade utilizando o seu benefício corporativo.",
  },
  {
    q: "Como faço para ver os valores e agendar meu horário?",
    a: "Basta clicar em qualquer botão de \"Garantir minha vaga\" nesta página. Você vai falar direto com a nossa equipe no WhatsApp, onde passaremos todas as informações sobre planos, horários disponíveis e como agendar sua primeira aula.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full py-16 md:py-36 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block text-[#CF9D2F] font-semibold text-sm uppercase tracking-widest mb-4">
            Dúvidas
          </span>
          <h2 className="font-sora font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            Perguntas{" "}
            <span className="text-[#CF9D2F]">Frequentes</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 mb-10 md:mb-16">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 md:px-7 py-5 md:py-6 text-left group hover:bg-gray-50/70 transition-colors duration-200"
              >
                <span className="font-sora font-semibold text-[15px] md:text-[17px] text-black group-hover:text-[#CF9D2F] transition-colors duration-200 leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "bg-[#CF9D2F] rotate-45"
                      : "bg-gray-100 group-hover:bg-[#CF9D2F]/10"
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-colors duration-300 ${
                      open === i ? "text-black" : "text-black/50"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-7 pb-5 md:pb-7">
                      <div className="w-full h-px bg-gray-100 mb-4" />
                      <p className="text-black/60 leading-relaxed text-[14px] md:text-[16px]">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-black/50 text-base md:text-lg mb-5">
            Ainda tem dúvidas? Fale com a nossa equipe agora pelo WhatsApp.
          </p>
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
