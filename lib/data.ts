import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import deltainovasi from "@/public/deltainovasi.jpg";
import roby from "@/public/roby.jpg"
import pengunjung from "@/public/pengunjung.jpg";
import koni from "@/public/konipku.png";

type PropsImg = {
  imageUrl: string
}
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "S1 Sistem Kompter UPI YPTK PADANG",
    location: "Kota Padang",
    description:
      "Saya berhasil menyelesaikan pendidikan S1 di bidang Ilmu Komputer dengan prestasi yang memuaskan. Selama studi, saya telah mendalami berbagai aspek ilmu komputer seperti pemrograman, basis data, kecerdasan buatan, dan jaringan komputer. ",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    imageUrl: roby
  },
  {
    title: "IT SUPPORT BANK UOB",
    location: "Jakarta, Jakarta Pusat",
    description:
      "Sebagai IT Support, tugas saya adalah memberikan dukungan teknis dan solusi atas masalah perangkat keras, perangkat lunak, dan jaringan komputer kepada pengguna di lingkungan kerja. Saya bertanggung jawab untuk memastikan sistem teknologi berfungsi dengan baik, mengatasi gangguan, memberikan bantuan dalam penggunaan aplikasi, serta melakukan pemeliharaan dan pemecahan masalah secara efisien. Saya juga berinteraksi dengan pengguna dengan sopan dan responsif untuk memastikan kepuasan dan produktivitas mereka dalam menggunakan teknologi informasi.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "IT SUPPORT PT GRAHA KARYA JAKARTA",
    location: "Jakarta, Jakarta Pusat",
    description:
      "Sebagai IT Support, tugas saya adalah memberikan dukungan teknis dan solusi atas masalah perangkat keras, perangkat lunak, dan jaringan komputer kepada pengguna di lingkungan kerja. Saya bertanggung jawab untuk memastikan sistem teknologi berfungsi dengan baik, mengatasi gangguan, memberikan bantuan dalam penggunaan aplikasi, serta melakukan pemeliharaan dan pemecahan masalah secara efisien. Saya juga berinteraksi dengan pengguna dengan sopan dan responsif untuk memastikan kepuasan dan produktivitas mereka dalam menggunakan teknologi informasi.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Residence Relation PT MEGAPOLITAN DEVELOPMENT Tbk",
    location: "Jakarta, Jakarta Pusat",
    description:
      "Sebagai Residence Relation, tugas utama saya adalah menjaga hubungan baik antara manajemen perumahan dengan para penghuni atau penyewa. Saya bertanggung jawab untuk memberikan pelayanan dan solusi atas masalah yang dihadapi penghuni, memfasilitasi komunikasi, dan memastikan kepuasan penghuni terhadap layanan dan fasilitas yang disediakan oleh perumahan. Selain itu, saya juga berperan dalam mempromosikan suasana yang harmonis dan aman di dalam lingkungan perumahan agar para penghuni merasa nyaman dan betah tinggal di sana.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "PROGRAMER KONI KOTA PEKANBARU",
    location: "Pekanbaru, Riau",
    description:
      "Sebagai programmer website di KONI Kota Pekanbaru, tugas saya adalah mengembangkan dan memelihara situs web resmi KONI di tingkat kota. Saya bertanggung jawab untuk menciptakan pengalaman pengguna yang baik dengan menyediakan informasi olahraga terkini, jadwal acara, dan prestasi atlet di Kota Pekanbaru. Saya juga berkolaborasi dengan tim KONI untuk memastikan situs web tetap up-to-date dan berfungsi dengan baik guna mendukung promosi dan perkembangan olahraga di kota ini.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "TENAGA IT DISKOMINFO KOTA PEKANBARU",
    location: "Pekanbaru, Riau",
    description:
      "Sebagai tenaga IT di Dinas Komunikasi dan Informatika (Diskominfo) Kota Pekanbaru, tugas saya adalah memastikan kelancaran dan keandalan sistem teknologi informasi di lingkungan instansi tersebut. Saya bertanggung jawab untuk mengelola jaringan komputer, menjaga keamanan data, serta memberikan dukungan teknis kepada pengguna dalam penggunaan perangkat keras dan perangkat lunak. Selain itu, saya juga berperan dalam mengembangkan dan mengimplementasikan solusi teknologi guna meningkatkan efisiensi dan produktivitas kerja di Diskominfo Kota Pekanbaru.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Deltainovasi",
    description:
      "Deltainovasi adalah website penyedia jasa layanan pemrograman yang profesional dan inovatif, menawarkan solusi untuk aplikasi, website, dan perangkat lunak kustom. ",
    tags: ["React", "Next.js", "Tailwind", "Laravel", "HTML"],
    imageUrl: deltainovasi,
  },
  {
    title: "Pengunjung Wisata",
    description:
      "Website Pengunjung Wisata adalah situs informasi berguna untuk merencanakan perjalanan dan meningkatkan pengalaman wisatawan.",
    tags: ["Laravel", "Jquery", "Javascript", "Bootstrap", "HTML", "SQL", "CSS"],
    imageUrl: pengunjung,
  },
  {
    title: "Web Koni",
    description:
      "Website KONI adalah situs resmi yang memberikan informasi tentang olahraga di Indonesia, termasuk prestasi atlet, kegiatan, dan program KONI.",
    tags: ["Codeigniter", "Bootstrap", "SQL", "Jquery", "Javascript", "HTML", "SQL", "CSS"],
    imageUrl: koni,
  },
] as const;

export const skillsData = [
  "HTML",
  "Laravel",
  "Codeigniter",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
