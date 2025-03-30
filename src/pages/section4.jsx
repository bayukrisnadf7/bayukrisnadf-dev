import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <h2 className="py-20 text-3xl font-bold text-center">Blogs</h2>
      <div className="grid gap-10 grid-cols-1 place-items-center md:mx-20 mx-5">
        {[ 
          { 
            img: "img/blogs-1.jpg", 
            category: ["News", "Inspiration"], 
            date: "25 Maret 2025", 
            title: "Mengenal React dan Kelebihannya", 
            desc: [
              "React adalah pustaka JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) secara efisien dan dinamis.",
              "Salah satu fitur utama React adalah Virtual DOM, yang memungkinkan pembaruan UI menjadi lebih cepat dan efisien dibandingkan manipulasi langsung terhadap DOM."
            ]
          },
          {
            img: "img/blogs-2.jpg", 
            category: ["Inspiration"], 
            date: "15 Maret 2025", 
            title: "Peran Teknologi Informasi dalam Transformasi Digital", 
            desc: [
              "Teknologi Informasi (IT) telah menjadi pilar utama dalam era digital saat ini.",
              "Transformasi digital yang semakin pesat mendorong perusahaan, organisasi, hingga individu untuk mengadopsi IT guna meningkatkan efisiensi dan produktivitas."
            ]
          },
          {
            img: "img/blogs-3.png", 
            category: ["Inspiration"], 
            date: "10 Maret 2025", 
            title: "Tren Bahasa Pemrograman di Tahun 2025: Mana yang Harus Dipelajari?", 
            desc: [
              "Di era digital saat ini, pemrograman menjadi keterampilan yang sangat penting, dan Python adalah salah satu bahasa pemrograman yang paling populer di dunia.",
              "Keunggulan utama Python terletak pada fleksibilitasnya, dukungan pustaka yang luas, serta kompatibilitas dengan berbagai platform."
            ]
          }
        ].map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex md:flex-row flex-col justify-center gap-10"
          >
            <img src={blog.img} alt="" className="w-[500px] md:h-[350px] h-[200px] rounded-xl" />
            <div className="flex flex-col gap-4 mx-2 text-white">
              <div className="flex gap-5 items-center">
                {blog.category.map((cat, idx) => (
                  <p key={idx} className="bg-[#939AFF] p-2 px-5 rounded-xl">{cat}</p>
                ))}
                <p>{blog.date}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl max-w-[550px]">
                  {blog.title}
                </p>
                {blog.desc.map((text, idx) => (
                  <p key={idx} className="max-w-[550px]">{text}</p>
                ))}
                <p className="cursor-pointer hover:text-[#939AFF] mt-5">
                  Baca selengkapnya ...
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
