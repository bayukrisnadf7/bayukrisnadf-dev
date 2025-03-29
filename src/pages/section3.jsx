// import { motion } from "framer-motion";
import { FaLaravel } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
const Section3 = () => {
  return (
    <div id="section3" className="w-full min-h-screen bg-black text-white">
      <p className="text-[#FFA28B] md:text-3xl text-2xl text-center font-bold relative">
        Project
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 place-items-center mt-[50px] md:mx-20 mx-5">
        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900">
          <img
            src="img/project-8.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">
                  Perpustakaan POLIJE
                </p>
                <p>Fullstack</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk sistem layanan perpustakaan
                Polikteknik Negeri Jember
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <RiTailwindCssFill size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900 ">
          <img
            src="img/project-1.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">Medisora</p>
                <p>Fullstack</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk pendaftaran & pemeriksaan pasien
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <FaBootstrap size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900 ">
          <img
            src="img/project-2.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">Nutricare.ID</p>
                <p>Fullstack</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk pasien melakukan konsultasi kepada
                dokter
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaPhp size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <FaBootstrap size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900">
          <img
            src="img/project-3.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">Reporthing</p>
                <p>Fullstack</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk rapot penilaian siswa sekolah dasar
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaPhp size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <FaBootstrap size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900 ">
          <img
            src="img/project-7.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">ReNew</p>
                <p>Frontend</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi landing page untuk informasi mengenai
                energi terbarukan
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaReact size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <RiTailwindCssFill size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900 ">
          <img
            src="img/project-5.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">SiLelang</p>
                <p>Fullstack</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk sistem lelang barang online
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <FaBootstrap size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900 ">
          <img
            src="img/project-4.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">RevoEnergy</p>
                <p>Frontend</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk memperluas edukasi mengenai Energi
                Terbarukan
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <RiTailwindCssFill size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900">
          <img
            src="img/project-6.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">Edudu</p>
                <p>Frontend</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi landing page untuk informasi mengenai
                edukasi
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <RiTailwindCssFill size={25} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] p-5 rounded-xl bg-slate-900">
          <img
            src="img/project-9.png"
            alt=""
            // width={500}
            className="rounded-xl w-[500px] h-[250px]"
          />
          <div className="flex flex-col gap-4 mx-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-bold text-2xl">Kopisort</p>
                <p>Backend</p>
              </div>
              <p className="text-[#8B949E] md:text-base text-sm md:max-w-xl max-w-[300px]">
                Mengembangkan aplikasi untuk klasifikasi kualitas jenis biji kopi
              </p>
            </div>
            <div className="flex gap-3">
              <button className="border p-2 rounded-xl">
                <FaLaravel size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <DiMysql size={25} />
              </button>
              <button className="border p-2 rounded-xl">
                <RiTailwindCssFill size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
