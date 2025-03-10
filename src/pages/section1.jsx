import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Section1 = () => {
  const text2 = "WEB DEVELOPER";
  const [key, setKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Ubah key agar animasi terulang
    }, text2.length * 100 + 1000); // Ganti setelah animasi selesai + jeda 1 detik

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative md:mx-10 mx-5">
      {/* Gambar pertama dengan efek floating */}
      <img
        src="img/section1-1.png"
        alt=""
        className="absolute md:top-10 top-36"
      />

      {/* Teks dengan efek muncul satu per satu */}
      <p className="text-white absolute md:p-20 top-20 md:text-6xl text-2xl font-bold flex gap-2 max-w-[450px]">
        Hi, I'm
      </p>
      <p className="text-white absolute md:p-20 md:top-40 top-32 md:text-6xl text-2xl font-bold flex gap-2 max-w-[450px] break-words">
        {text2.split("").map((char, index) => (
          <motion.span
            key={`${key}-${index}`} // Tambahkan key agar animasi terulang
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 5, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </p>
      <div className="flex flex-col md:gap-10 gap-5 absolute md:p-20 md:top-64 top-44">
        <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
          Bertanggung jawab untuk membuat dan mengembangkan situs web atau
          aplikasi berbasis web menggunakan berbagai teknologi, seperti HTML,
          CSS, JavaScript, serta framework dan library modern untuk membangun
          website yang responsif, interaktif, dan berfungsi dengan baik.
        </p>
        <div className="flex gap-5">
          <button className="bg-[#939AFF] text-white flex justify-center font-bold px-5 py-2 rounded-xl md:w-[150px] w-[150px]">
            Portofolio
          </button>
          <button className="bg-[#939AFF] text-white flex justify-center font-bold px-5 py-2 rounded-xl md:w-[150px] w-[150px]">
            Contact Me
          </button>
        </div>
        <hr />
      </div>
      <div className="flex md:gap-5 gap-2 absolute md:p-20 md:mt-[490px] mt-[410px]">
        <button>
          <FaLinkedinIn className="text-black bg-white p-2 rounded-xl w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </button>
        <button>
          <FaGithub className="text-black bg-white p-2 rounded-xl w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </button>
        <button>
          <FaInstagram className="text-black bg-white p-2 rounded-xl w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </button>
      </div>
      {/* Gambar kedua dengan efek bergerak kanan-kiri */}
      <motion.img
        src="img/section1-2.png"
        alt=""
        className="absolute md:right-20 right-5 md:top-80 top-[430px] md:w-auto w-[300px]"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Section1;
