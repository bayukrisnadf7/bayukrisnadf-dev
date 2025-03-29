import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaLaravel,
  FaPhp,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";

const Section2 = () => {
  const icons = [
    { component: <FaHtml5 size={40} />, key: "html" },
    { component: <FaCss3Alt size={40} />, key: "css" },
    { component: <FaGitAlt size={40} />, key: "git" },
    { component: <FaReact size={40} />, key: "react" },
    { component: <FaLaravel size={40} />, key: "laravel" },
    { component: <FaPhp size={40} />, key: "php" },
    { component: <RiNextjsFill size={40} />, key: "nextjs" },
    { component: <FaBootstrap size={40} />, key: "bootstrap" },
    { component: <RiTailwindCssFill size={40} />, key: "tailwind" },
    { component: <DiMysql size={40} />, key: "mysql" },
  ];
  const [activeTab, setActiveTab] = useState("techstack"); // Default "sertifikat"
  return (
    <div id="section2" className="w-full min-h-screen bg-black text-white">
      <p className="text-[#7EE787] md:text-3xl text-2xl text-center font-bold relative top-10">
        Tentang
      </p>
      <p className="md:text-xl text-sm text-center font-bold relative top-20 md:mx-20 mx-5 text-white">
        <span
          className="
        text-[#7EE787]"
        >
          Saya adalah mahasiswa Teknik Informatika yang memiliki minat besar
          dalam mengembangkan website dan aplikasi berbasis web. Selama masa
          studi, saya telah mempelajari berbagai konsep pemrograman, desain
          sistem, dan pengembangan perangkat lunak,
        </span>{" "}
        serta mengasah keterampilan teknis saya melalui proyek-proyek pribadi dan
        tugas kuliah. Saya senang mengeksplorasi teknologi terbaru dan selalu
        berusaha untuk meningkatkan kemampuan saya dalam pengembangan web.
      </p>

      <div className="mt-28 p-5">
        {/* Menu Tab */}
        <div className="flex justify-center gap-4 mb-5">
          <button
            className={`px-4 py-2 rounded-lg text-white ${
              activeTab === "techstack" ? "bg-[#939AFF]" : "bg-gray-600"
            }`}
            onClick={() => setActiveTab("techstack")}
          >
            Tech Stack
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-white ${
              activeTab === "sertifikat" ? "bg-[#939AFF]" : "bg-gray-600"
            }`}
            onClick={() => setActiveTab("sertifikat")}
          >
            Sertifikat
          </button>
        </div>

        {/* Konten */}
        <div className=" text-white md:p-6 p-1 rounded-lg shadow-lg md:mx-20 mx-5">
          {activeTab === "sertifikat" ? (
            <div className="">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 place-items-center">
                <motion.div
                  className="border flex flex-col gap-2 p-3 rounded-xl md:min-h-[370px] min-h-[200px]"
                  initial={{ opacity: 0, y: 50 }} // Mulai dari transparan & turun
                  animate={{ opacity: 1, y: 0 }} // Muncul perlahan & naik ke posisi normal
                  transition={{ duration: 0.6, ease: "easeOut" }} // Durasi & jenis animasi
                  whileHover={{ scale: 1.05 }} // Efek membesar saat hover
                >
                  <img
                    src="/img/sertifikat1.png"
                    alt=""
                    className="rounded-xl"
                  />
                  <p className="text-center md:text-xl text-sm font-bold">
                    3rd - National Web Design Competition
                  </p>
                </motion.div>
                <motion.div
                  className="border flex flex-col gap-2 p-3 rounded-xl md:min-h-[370px] min-h-[200px]"
                  initial={{ opacity: 0, y: 50 }} // Mulai dari transparan & turun
                  animate={{ opacity: 1, y: 0 }} // Muncul perlahan & naik ke posisi normal
                  transition={{ duration: 0.6, ease: "easeOut" }} // Durasi & jenis animasi
                  whileHover={{ scale: 1.05 }} // Efek membesar saat hover
                >
                  <img
                    src="/img/sertifikat2.png"
                    alt=""
                    className="rounded-xl"
                  />
                  <p className="text-center md:text-xl text-sm font-bold">
                    Sertifikat Pelatihan Junior Web Developer
                  </p>
                </motion.div>
                <motion.div
                  className="border flex flex-col gap-2 p-3 rounded-xl md:min-h-[370px] min-h-[200px]"
                  initial={{ opacity: 0, y: 50 }} // Mulai dari transparan & turun
                  animate={{ opacity: 1, y: 0 }} // Muncul perlahan & naik ke posisi normal
                  transition={{ duration: 0.6, ease: "easeOut" }} // Durasi & jenis animasi
                  whileHover={{ scale: 1.05 }} // Efek membesar saat hover
                >
                  <img
                    src="/img/sertifikat3.png"
                    alt=""
                    className="rounded-xl"
                  />
                  <p className="text-center md:text-xl text-sm font-bold">
                    Sertifikat Kompetensi Junior Web Developer
                  </p>
                </motion.div>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10 place-items-center mt-10">
                {icons.map(({ component, key }, index) => (
                  <motion.div
                    key={key}
                    className="border p-5 rounded-xl flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }} // Mulai dari transparan & sedikit turun
                    animate={{ opacity: 1, y: 0 }} // Muncul perlahan
                    transition={{ duration: 0.6, delay: index * 0.1 }} // Delay antar elemen
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }} // Efek putaran saat hover
                  >
                    {component}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Section2;
