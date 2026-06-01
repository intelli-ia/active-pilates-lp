"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%281%29.jpeg",
    alt: "Depoimento Esdras Pimentel",
  },
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%284%29.jpeg",
    alt: "Depoimento Rafaela Leal Rocha",
  },
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%286%29.jpeg",
    alt: "Depoimento Italo Reis",
  },
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%283%29.jpeg",
    alt: "Depoimento Kleber Andrade",
  },
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%285%29.jpeg",
    alt: "Depoimento Hellen",
  },
  {
    src: "/testemonials/WhatsApp%20Image%202026-05-25%20at%2020.01.27%20%282%29.jpeg",
    alt: "Depoimento Hailton Costa",
  },
];

export default function TestimonialsScreenshots() {
  return (
    <section className="relative w-full pt-16 pb-32 md:pt-24 md:pb-48 bg-white overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-6 mb-16 md:mb-20"
      >
        <h2 className="font-title text-3xl md:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-tight">
          Quem já{" "}
          <span className="bg-gradient-to-r from-[#00B8D9] to-[#00A6BF] bg-clip-text text-transparent">
            navega
          </span>{" "}
          com a gente
        </h2>
      </motion.div>

      {/* Auto-scroll marquee */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-5 w-max"
        >
          {/* Duplicated for seamless loop */}
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] md:w-[300px]"
            >
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[9/16] border-2 border-[#00B8D9]/40">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
