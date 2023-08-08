"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Setelah lulus dengan gelar S.Kom Jurusan System Komputer di Universitas
        Putra Indonesia YPTK Padang , saya memutuskan untuk mengejar passion
        saya dalam pemrograman. Saya melamar pekerjaan di jakarta di bidang
        komputer selama 2 tahun dan belajar pengembangan web full-stack. Bagian
        favorit saya dari pemrograman adalah aspek pemecahan masalah. Saya
        sangat menyukai perasaan ketika akhirnya menemukan solusi untuk sebuah
        masalah. Teknologi yang menjadi inti dalam stack saya adalah React,
        Next.js, Node.js, dan PHP (Laravel). Saya juga familiar dengan
        TypeScript dan Javascript. Saya selalu ingin mempelajari teknologi baru.
        Saat ini, Ketika saya tidak sedang coding,
        saya menikmati bermain video game, menonton film, Saya juga senang
        belajar hal-hal baru. Saat ini, saya sedang belajar tentang sejarah dan
        filsafat. Saya juga sedang belajar bermain gitar.
      </p>
    </motion.section>
  );
}
